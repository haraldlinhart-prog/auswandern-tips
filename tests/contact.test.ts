import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  buildContactMail,
  createRateLimiter,
  mailIdentity,
  processContact,
  signChallenge,
  verifyChallenge,
  type ContactInput,
} from '../lib/contact';
import { DEFAULT_CONTACT_FROM, DEFAULT_CONTACT_TO } from '../lib/site';

const SECRET = 'test-secret';
const NOW = 1_700_000_000_000;

function input(overrides: Partial<ContactInput> = {}): ContactInput {
  return {
    name: 'Anna Berger',
    email: 'anna.berger@example.com',
    message:
      'Guten Tag, wir planen einen Umzug von München nach Valencia und möchten die Abmeldung verstehen.',
    topic: 'Steuern und Abmeldung',
    website: '',
    challenge: signChallenge(SECRET, NOW - 10_000),
    consent: true,
    turnstileToken: '',
    ...overrides,
  };
}

function run(overrides: Partial<ContactInput> = {}, allow = () => true, extra: { turnstileRequired?: boolean; turnstileOk?: boolean } = {}) {
  return processContact(input(overrides), {
    now: NOW,
    secret: SECRET,
    ip: '203.0.113.10',
    allowIp: allow,
    turnstileRequired: extra.turnstileRequired ?? false,
    turnstileOk: extra.turnstileOk ?? true,
    identity: { from: DEFAULT_CONTACT_FROM, to: DEFAULT_CONTACT_TO },
  });
}

describe('challenge', () => {
  it('rejects fast, expired and tampered tokens', () => {
    const fresh = signChallenge(SECRET, NOW - 1000);
    assert.equal(verifyChallenge(fresh, SECRET, NOW), 'too-fast');
    const old = signChallenge(SECRET, NOW - 5 * 60 * 60 * 1000);
    assert.equal(verifyChallenge(old, SECRET, NOW), 'expired');
    const ok = signChallenge(SECRET, NOW - 5000);
    assert.equal(verifyChallenge(ok, SECRET, NOW), 'ok');
    assert.equal(verifyChallenge(`${ok}ff`, SECRET, NOW), 'invalid');
  });
});

describe('processContact', () => {
  it('builds an escaped mail with the visitor as reply-to', () => {
    const result = run({
      name: "Anna O'Connor",
      message: 'Hallo & willkommen\n<script>alert(1)</script> wir ziehen nach Valencia um.',
    });
    assert.equal(result.type, 'send');
    if (result.type !== 'send') return;
    assert.equal(result.mail.replyTo, 'anna.berger@example.com');
    assert.equal(result.mail.from, DEFAULT_CONTACT_FROM);
    assert.equal(result.mail.to, DEFAULT_CONTACT_TO);
    assert.match(result.mail.html, /Anna O&#39;Connor/);
    assert.match(result.mail.html, /&lt;script&gt;/);
    assert.match(result.mail.html, /Hallo &amp; willkommen<br>/);
    assert.doesNotMatch(result.mail.html, /<script>/);
  });

  it('does not produce a mail for honeypot, keywords or blocked mail', () => {
    assert.equal(run({ website: 'https://spam.example' }).type, 'silent');
    assert.equal(run({ message: 'Buy viagra cheap and contact me today please.' }).type, 'silent');
    assert.equal(run({ email: 'ugibanicepi459@gmail.com' }).type, 'silent');
    assert.equal(
      run({ message: 'Links https://a.example und https://b.example sollen Sie anklicken heute.' }).type,
      'silent',
    );
  });

  it('returns field errors for real visitors and does not rate-limit them', () => {
    let calls = 0;
    const result = run({ consent: false }, () => {
      calls += 1;
      return true;
    });
    assert.equal(result.type, 'error');
    if (result.type === 'error') assert.equal(result.status, 400);
    assert.equal(calls, 0);
    assert.equal(run({ email: 'not-an-email' }).type, 'error');
    assert.equal(run({ message: 'Zu kurz.' }).type, 'error');
  });

  it('allows three sends per hour and blocks the fourth', () => {
    const limiter = createRateLimiter(3, 60 * 60 * 1000);
    const allow = () => limiter.allow('198.51.100.8', NOW);
    assert.equal(run({}, allow).type, 'send');
    assert.equal(run({}, allow).type, 'send');
    assert.equal(run({}, allow).type, 'send');
    const blocked = run({}, allow);
    assert.equal(blocked.type, 'error');
    if (blocked.type === 'error') assert.equal(blocked.status, 429);
  });

  it('asks to reload when the token expired', () => {
    const result = run({ challenge: signChallenge(SECRET, NOW - 5 * 60 * 60 * 1000) });
    assert.equal(result.type, 'error');
    if (result.type === 'error') assert.match(result.error, /abgelaufen/);
  });

  it('rejects a failed turnstile check before sending', () => {
    const result = run({}, () => true, { turnstileRequired: true, turnstileOk: false });
    assert.equal(result.type, 'error');
    if (result.type === 'error') assert.equal(result.status, 400);
  });
});

describe('mailIdentity', () => {
  it('uses the documented defaults', () => {
    assert.deepEqual(mailIdentity({} as unknown as NodeJS.ProcessEnv), {
      from: DEFAULT_CONTACT_FROM,
      to: DEFAULT_CONTACT_TO,
    });
    assert.equal(
      mailIdentity({ CONTACT_TO: 'redaktion@example.com' } as unknown as NodeJS.ProcessEnv).to,
      'redaktion@example.com',
    );
  });
});

describe('buildContactMail', () => {
  it('whitelists the topic', () => {
    const mail = buildContactMail(
      {
        name: 'Anna Berger',
        email: 'anna.berger@example.com',
        message: 'Eine ausreichend lange Nachricht zum Umzug.',
        topic: 'Viagra\r\nBcc: evil@example.com',
      },
      { from: DEFAULT_CONTACT_FROM, to: DEFAULT_CONTACT_TO },
    );
    assert.equal(mail.subject, 'Kontakt auswandern-tips.de – Allgemeine Frage');
    assert.doesNotMatch(mail.subject, /[\r\n]/);
  });
});
