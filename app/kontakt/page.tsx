import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

const crumbs = [
  { name: 'Start', path: '/' },
  { name: 'Kontakt', path: '/kontakt' },
];

export const metadata = pageMetadata({
  title: 'Kontakt',
  description:
    'Schreiben Sie uns einen Hinweis zu den Ratgebern. Das Formular ist keine Rechts- oder Steuerberatung. Datenschutzanfragen gehen an dsgvo@pan21.com.',
  path: '/kontakt',
});

export default function ContactPage() {
  return (
    <div className="wrap">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <header className="page-header">
        <p className="eyebrow">Kontakt</p>
        <h1>Hinweis oder Frage zur Seite</h1>
        <p className="lede">
          Wir lesen Nachrichten zu den Ratgebern. Eine individuelle Beratung zu Visum, Steuer oder
          Versicherung geben wir darüber nicht. Dafür sind Behörde und zugelassene Beratung zuständig.
        </p>
      </header>
      <p>
        Datenschutzanfragen: <a href="mailto:dsgvo@pan21.com">dsgvo@pan21.com</a>. Telefon wie im{' '}
        <Link href="/impressum">Impressum</Link>: +49 30 5684450-0.
      </p>
      <ContactForm />
    </div>
  );
}
