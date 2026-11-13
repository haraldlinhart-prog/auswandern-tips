import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { countries, countryPath } from '@/lib/content';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

const crumbs = [
  { name: 'Start', path: '/' },
  { name: 'Länder', path: '/laender' },
];

export const metadata = pageMetadata({
  title: 'Länder-Ratgeber zum Auswandern',
  description:
    'Auswandern nach Thailand, Madagaskar, Spanien, Portugal, Dubai, Zypern, in die USA, die Schweiz oder nach Kanada: Aufenthalt, Steuern, Versicherung, Kosten, Arbeit und Konto.',
  path: '/laender',
});

export default function CountriesPage() {
  return (
    <div className="wrap">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <header className="page-header">
        <p className="eyebrow">Länder</p>
        <h1>Länder-Ratgeber zum Auswandern</h1>
        <p className="lede">
          Neun Ziele. Die meisten Seiten folgen derselben Fragenliste, Madagaskar ergänzt Regionen
          und den Ruhestand. So sehen Sie, wo ein Touristenstatus endet und wo die EU-Freizügigkeit
          nur den Anfang der Anmeldung ist.
        </p>
      </header>
      <ul className="card-grid">
        {countries.map((guide) => (
          <li key={guide.slug}>
            <Link className="card" href={countryPath(guide)}>
              <span className="eyebrow">{guide.eyebrow}</span>
              <h2>{guide.label}</h2>
              <p>{guide.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      <p>
        Die Fragen, die in jedem Land wiederkehren, stehen in den{' '}
        <Link href="/ratgeber">Themen-Ratgebern</Link>.
      </p>
    </div>
  );
}
