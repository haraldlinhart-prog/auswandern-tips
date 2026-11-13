import { countries, countryPath, topicPath, topics } from './content';
import { faqItems } from './content/faq';
import { plainText } from './seo';
import { SITE_URL } from './site';
import type { Guide } from './content/types';

function linkLine(label: string, path: string, description: string): string {
  return `- [${label}](${SITE_URL}${path}): ${description}`;
}

export function buildLlmsTxt(): string {
  const lines = [
    '# auswandern-tips.de',
    '',
    '> Unabhängige Ratgeber zum Auswandern aus Deutschland, Österreich und der Schweiz. Die Länderseiten behandeln Aufenthalt, Steuern, Krankenversicherung, Lebenshaltungskosten, Arbeit und Konto. Madagaskar ergänzt Regionen, Ruhestand und ein Angebot der Betreuung vor Ort. Keine Rechts-, Steuer- oder Versicherungsberatung. Regeln ändern sich, verbindlich sind Behörden und zugelassene Beratung.',
    '',
    `Kanonische Adresse: ${SITE_URL}`,
    'Sprache: Deutsch',
    '',
    '## Länder',
    ...countries.map((guide) => linkLine(guide.label, countryPath(guide), guide.description)),
    '',
    '## Themen',
    ...topics.map((guide) => linkLine(guide.label, topicPath(guide), guide.description)),
    '',
    '## Weitere Seiten',
    linkLine('Häufige Fragen', '/faq', 'Kurze Antworten auf die wiederkehrenden Fragen zu Abmeldung, Steuer, Versicherung und Rente.'),
    linkLine('Über uns', '/ueber-uns', 'Wer die Seite betreibt und was sie nicht ist.'),
    linkLine('Kontakt', '/kontakt', 'Hinweisformular, keine Einzelfallberatung.'),
    linkLine('Impressum', '/impressum', 'Anbieterkennzeichnung der PAN21.com International LLC.'),
    linkLine('Datenschutz', '/datenschutz', 'Verarbeitung, Hosting bei Vercel, E-Mail-Versand über Resend.'),
    '',
    'Ausführliche Fassungen der Ratgeber: /llms-full.txt',
    '',
  ];
  return lines.join('\n');
}

function guideBlock(guide: Guide, path: string): string[] {
  return [
    `## ${guide.title}`,
    '',
    `URL: ${SITE_URL}${path}`,
    `Stand: ${guide.updated}`,
    '',
    plainText(guide.summary),
    '',
    ...guide.sections.flatMap((section) => [
      `### ${section.heading}`,
      '',
      plainText(section.lead),
      '',
      ...section.paragraphs.map((paragraph) => plainText(paragraph)),
      ...(section.bullets ? ['', ...section.bullets.map((bullet) => `- ${plainText(bullet)}`)] : []),
      '',
    ]),
    ...(guide.partner
      ? [
          `### ${guide.partner.title}`,
          '',
          plainText(guide.partner.lead),
          '',
          ...guide.partner.offers.map((offer) => `- ${offer.title}: ${plainText(offer.text)} (${guide.partner?.href})`),
          '',
        ]
      : []),
  ];
}

export function buildLlmsFullTxt(): string {
  const lines = [
    '# auswandern-tips.de, ausführliche Fassung',
    '',
    'Die Kurzantworten stehen jeweils direkt unter der Frage. Sie sind eine Orientierung und ersetzen keine behördliche Auskunft. Stand der Bearbeitung siehe jeweils unter der URL.',
    '',
    '# Länder',
    '',
    ...countries.flatMap((guide) => guideBlock(guide, countryPath(guide))),
    '# Themen',
    '',
    ...topics.flatMap((guide) => guideBlock(guide, topicPath(guide))),
    '# Häufige Fragen',
    '',
    ...faqItems.flatMap((item) => [`## ${item.question}`, '', plainText(item.answer), '']),
  ];
  return `${lines.join('\n').trim()}\n`;
}
