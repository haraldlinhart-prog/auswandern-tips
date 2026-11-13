import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { countries, topics } from '../lib/content';
import { buildLlmsTxt } from '../lib/llms';
import robots from '../app/robots';

const countrySections = ['visum', 'steuern', 'krankenversicherung', 'kosten', 'arbeiten', 'bankkonto', 'checkliste'];
const madagaskarSections = ['warum', 'visum', 'kosten', 'wohnen', 'gesundheit', 'steuern', 'firma', 'ruhestand'];

describe('guides', () => {
  it('gives every country the same seven sections and a direct answer', () => {
    const standard = countries.filter((guide) => guide.slug !== 'madagaskar');
    assert.equal(standard.length, 8);
    for (const guide of standard) {
      assert.deepEqual(
        guide.sections.map((section) => section.id),
        countrySections,
      );
      assert.ok(guide.summary.length > 80);
      assert.ok(guide.faqs.length >= 3);
    }
  });

  it('covers Madagaskar with the retirement and business sections and the partner offer', () => {
    const guide = countries.find((item) => item.slug === 'madagaskar');
    assert.ok(guide);
    assert.deepEqual(
      guide?.sections.map((section) => section.id),
      madagaskarSections,
    );
    assert.equal(guide?.partner?.href, 'https://www.pan21.africa');
    assert.equal(guide?.partner?.offers.length, 2);
    assert.match(guide?.sections.find((section) => section.id === 'visum')?.lead ?? '', /je nach Visumsart/i);
    assert.match(guide?.sections.find((section) => section.id === 'steuern')?.lead ?? '', /umgehen/);
  });

  it('links every guide from llms.txt', () => {
    const text = buildLlmsTxt();
    for (const guide of [...countries, ...topics]) {
      assert.match(text, new RegExp(guide.slug));
    }
  });
});

describe('robots', () => {
  it('allows the major AI crawlers', () => {
    const rules = robots().rules;
    const agents = (Array.isArray(rules) ? rules : [rules]).flatMap((rule) =>
      Array.isArray(rule.userAgent) ? rule.userAgent : [rule.userAgent],
    );
    for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended']) {
      assert.ok(agents.includes(bot), bot);
    }
  });
});
