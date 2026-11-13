import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { topicPath, topics } from '@/lib/content';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

const crumbs = [
  { name: 'Start', path: '/' },
  { name: 'Ratgeber', path: '/ratgeber' },
];

export const metadata = pageMetadata({
  title: 'Ratgeber zum Auswandern',
  description:
    'Checkliste, Abmeldung, Steuern, Krankenversicherung, Firma, Bankkonto und Rente: die Themen hinter einem Umzug aus Deutschland, Österreich oder der Schweiz.',
  path: '/ratgeber',
});

export default function TopicsPage() {
  return (
    <div className="wrap">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <header className="page-header">
        <p className="eyebrow">Themen</p>
        <h1>Ratgeber zum Auswandern</h1>
        <p className="lede">
          Diese Texte gelten über einzelne Länder hinweg. Die Länderseiten verlinken hierher, wenn
          die Regel am Herkunftsland hängt.
        </p>
      </header>
      <ul className="card-grid">
        {topics.map((guide) => (
          <li key={guide.slug}>
            <Link className="card" href={topicPath(guide)}>
              <span className="eyebrow">{guide.eyebrow}</span>
              <h2>{guide.label}</h2>
              <p>{guide.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      <p>
        Die Ziele im Überblick finden Sie unter <Link href="/laender">Länder</Link>.
      </p>
    </div>
  );
}
