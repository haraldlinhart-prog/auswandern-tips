import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  countLinks,
  detectSpam,
  escapeHtml,
  isGibberish,
  looksHuman,
  normalizeEmail,
} from '../lib/spam';

const clean = {
  name: 'Anna Berger',
  email: 'anna.berger@example.com',
  message:
    'Guten Tag, wir planen einen Umzug von München nach Valencia und möchten verstehen, wie die Abmeldung und die Krankenversicherung zusammenhängen.',
};

describe('normalizeEmail', () => {
  it('strips gmail dots and plus tags', () => {
    assert.equal(normalizeEmail('E.dip.ajulo.dev.85+spam@gmail.com'), 'edipajulodev85@gmail.com');
    assert.equal(normalizeEmail('edipajulodev85@googlemail.com'), 'edipajulodev85@gmail.com');
  });
});

describe('escapeHtml', () => {
  it('escapes markup', () => {
    assert.equal(escapeHtml(`<script>alert("x")</script> & 'y'`), '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt; &amp; &#39;y&#39;');
  });
});

describe('detectSpam', () => {
  it('accepts a normal German message', () => {
    assert.equal(detectSpam(clean), null);
    assert.equal(isGibberish(clean.message), false);
    assert.equal(looksHuman(clean.message), true);
  });

  it('blocks drug, casino, porn, loan, SEO and crypto phrases including obfuscation', () => {
    assert.equal(detectSpam({ ...clean, message: 'Buy cheap viagra today please thanks' }), 'keyword');
    assert.equal(detectSpam({ ...clean, message: 'Hier ist v1agra für Sie, bitte antworten Sie heute.' }), 'keyword');
    assert.equal(detectSpam({ ...clean, message: 'Angebot: v . i . a . g . r . a sofort bestellen bitte.' }), 'keyword');
    assert.equal(detectSpam({ ...clean, message: 'v i a g r a Sonderpreis nur heute bestellen bitte.' }), 'keyword');
    assert.equal(detectSpam({ ...clean, message: 'Best online casino bonus waiting for you now.' }), 'keyword');
    assert.equal(detectSpam({ ...clean, message: 'C.A.S.I.N.O Bonus ohne Einzahlung sichern Sie sich.' }), 'keyword');
    assert.equal(detectSpam({ ...clean, message: 'We offer SEO services and ranking for your new site.' }), 'keyword');
    assert.equal(detectSpam({ ...clean, message: 'Kaufen Sie Backlinks für Ihre neue Website im Ausland.' }), 'keyword');
    assert.equal(detectSpam({ ...clean, message: 'Invest in bitcoin now and double the deposit quickly.' }), 'keyword');
    assert.equal(detectSpam({ ...clean, message: 'Crypto investment opportunity with guaranteed weekly profit.' }), 'keyword');
    assert.equal(detectSpam({ ...clean, message: 'Payday loan approved, reply today for the transfer.' }), 'keyword');
    assert.equal(detectSpam({ ...clean, message: 'Free porn access and more adult links for you today.' }), 'keyword');
  });

  it('rejects more than one link and any link in the name', () => {
    assert.equal(
      detectSpam({
        ...clean,
        message: 'Bitte siehe https://www.example.com/a und auch https://www.example.org/b für den Fall.',
      }),
      'links',
    );
    assert.equal(
      detectSpam({
        ...clean,
        message: 'Die offizielle Seite ist https://www.auswaertiges-amt.de und dort steht der Ablauf.',
      }),
      null,
    );
    assert.equal(detectSpam({ ...clean, name: 'Anna https://spam.example' }), 'name-link');
    assert.equal(countLinks('anna@example.com und https://www.example.de/info'), 1);
  });

  it('flags gibberish, random tokens and non-latin spam', () => {
    assert.equal(detectSpam({ ...clean, name: 'aSdFgHjKlQwErT' }), 'gibberish');
    assert.equal(detectSpam({ ...clean, message: 'Kj8sLq2mNp9xTr4wYz7bQe' }), 'gibberish');
    assert.equal(
      detectSpam({
        ...clean,
        message: 'Купите дешево сейчас и получите бонус сразу без регистрации сегодня',
      }),
      'script',
    );
    assert.equal(
      detectSpam({
        ...clean,
        message: '立即购买便宜药品和赌场奖金请今天联系我们的客服人员谢谢合作',
      }),
      'script',
    );
    assert.equal(looksHuman('a'.repeat(61)), false);
  });

  it('blocks normalized spam inboxes', () => {
    assert.equal(detectSpam({ ...clean, email: 'e.dip.ajulo.dev.85+x@gmail.com' }), 'email');
  });

  it('does not treat a short Cyrillic name plus a German question as script spam', () => {
    assert.equal(
      detectSpam({
        ...clean,
        name: 'Мария',
        message: 'Ich lebe in Wien und möchte wissen, wie die Abmeldung abläuft, wenn wir nach Spanien ziehen.',
      }),
      null,
    );
  });
});
