import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

const crumbs = [
  { name: 'Start', path: '/' },
  { name: 'Über uns', path: '/ueber-uns' },
];

export const metadata = pageMetadata({
  title: 'Über auswandern-tips.de',
  description:
    'Wer auswandern-tips.de betreibt, für wen die Ratgeber geschrieben sind und warum die Seite keine Beratung und keine Behörde ersetzt.',
  path: '/ueber-uns',
});

export default function AboutPage() {
  return (
    <div className="wrap legal">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <header className="page-header">
        <p className="eyebrow">Über uns</p>
        <h1>Wofür diese Seite da ist</h1>
      </header>
      <p>
        auswandern-tips.de ist ein redaktioneller Ratgeber für Menschen, die in Deutschland,
        Österreich oder der Schweiz leben und einen längeren Umzug prüfen. Die Seiten ordnen
        Aufenthalt, Steuern, Krankenversicherung, Arbeit, Konto und Abmeldung. Sie verkaufen keine
        Visa, keine Versicherungen und keine Firmengründungen.
      </p>
      <h2>Wer dahintersteht</h2>
      <p>
        Betrieben wird die Seite von der PAN21.com International LLC, vertreten durch Harald
        Linhart. Anschrift, Telefon und die Registrierung stehen im <Link href="/impressum">Impressum</Link>.
        Es gibt keine Kanzlei und keine Behörde hinter den Texten. Wenn eine Frage nur mit Ihren
        Unterlagen zu beantworten ist, gehört sie dorthin.
      </p>
      <h2>Wie die Texte entstehen</h2>
      <p>
        Wir beschreiben Regeln allgemein und nennen keine erfundenen Statistiken, Mieten oder
        Steuersätze. Wo eine Zahl sich schnell ändert, steht stattdessen, welche Stelle sie
        veröffentlicht. Jeder Ratgeber zeigt das Datum der letzten Bearbeitung. Vor einer
        Entscheidung zählt die aktuelle Fassung der Behörde.
      </p>
      <h2>Was wir nicht tun</h2>
      <p>
        Wir raten nicht zu Scheinwohnsitzen, zu Konten auf fremde Namen oder zu Gesellschaften ohne
        echte Tätigkeit. Solche Muster sind auf den Themenseiten beschrieben, damit man sie erkennt.
        Hinweise auf veraltete Stellen nehmen wir über das <Link href="/kontakt">Kontaktformular</Link> entgegen.
      </p>
    </div>
  );
}
