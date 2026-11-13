import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { RichText } from '@/components/RichText';
import { faqItems } from '@/lib/content/faq';
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from '@/lib/seo';
import { CONTENT_UPDATED, formatGermanDate } from '@/lib/site';

const crumbs = [
  { name: 'Start', path: '/' },
  { name: 'FAQ', path: '/faq' },
];

export const metadata = pageMetadata({
  title: 'Häufige Fragen zum Auswandern',
  description:
    'Kurze Antworten zu Abmeldung, Steuerpflicht, Krankenversicherung, Rente, Touristenvisum und Auslandsfirma für Menschen aus Deutschland, Österreich und der Schweiz.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <div className="wrap">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(faqItems)} />
      <Breadcrumbs items={crumbs} />
      <header className="page-header">
        <p className="eyebrow">FAQ</p>
        <h1>Häufige Fragen zum Auswandern</h1>
        <p className="lede">
          Die Antworten sind der Einstieg. Die verlinkten Ratgeber führen sie aus. Stand:{' '}
          <time dateTime={CONTENT_UPDATED}>{formatGermanDate(CONTENT_UPDATED)}</time>.
        </p>
      </header>
      <div className="faq">
        {faqItems.map((item) => (
          <article key={item.question}>
            <h2>{item.question}</h2>
            <p>
              <RichText text={item.answer} />
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
