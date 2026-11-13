import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

const crumbs = [
  { name: 'Start', path: '/' },
  { name: 'Impressum', path: '/impressum' },
];

export const metadata = pageMetadata({
  title: 'Impressum',
  description: 'Anbieterkennzeichnung der auswandern-tips.de, ein Service der PAN21.com International LLC.',
  path: '/impressum',
  noIndex: true,
});

export default function ImpressumPage() {
  return (
    <div className="wrap legal">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <header className="page-header">
        <h1>Impressum</h1>
      </header>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        <strong>PAN21.com International LLC</strong>
        <br />
        7533 South Center View CT, STE R
        <br />
        West Jordan, UT 84084
        <br />
        USA
      </p>
      <p>
        Vertreten durch: Harald Linhart
        <br />
        Registrierung: Utah Division of Corporations, Registernummer 14723637-0163
      </p>
      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:+493056844500">+49 30 5684450-0</a>
        <br />
        E-Mail: <a href="mailto:dsgvo@pan21.com">dsgvo@pan21.com</a>
      </p>
      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>Harald Linhart, Anschrift wie oben</p>
      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <p className="fine">
        Plattform betrieben unter der Domain auswandern-tips.de — ein Service der PAN21.com
        International LLC.
      </p>
    </div>
  );
}
