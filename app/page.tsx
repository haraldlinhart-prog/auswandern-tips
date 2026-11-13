import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { RichText } from '@/components/RichText';
import { countries, countryPath, topicPath, topics } from '@/lib/content';
import { homeFaq } from '@/lib/content/faq';
import { faqJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Auswandern aus Deutschland, Österreich und der Schweiz | auswandern-tips.de',
  description:
    'Länder- und Themenratgeber zum Auswandern: Visum, Steuern, Krankenversicherung, Bankkonto, Arbeiten und Abmeldung. Klar erklärt, ohne erfundene Zahlen.',
  path: '/',
});

export default function HomePage() {
  return (
    <div className="wrap">
      <JsonLd data={faqJsonLd(homeFaq)} />
      <section className="hero">
        <div>
          <p className="eyebrow">Deutschland, Österreich, Schweiz</p>
          <h1>Auswandern aus Deutschland, Österreich und der Schweiz</h1>
          <p className="lede">
            Was Sie zu Aufenthalt, Steuern, Krankenversicherung, Lebenshaltung, Arbeit und Konto
            wissen sollten, bevor Sie umziehen. Sachlich erklärt, ohne erfundene Zahlen und ohne
            Verkauf von Visa oder Versicherungen.
          </p>
          <div className="actions">
            <Link className="button" href="/laender">
              Länder ansehen
            </Link>
            <Link className="button secondary" href="/ratgeber/auswandern-checkliste">
              Mit der Checkliste starten
            </Link>
          </div>
        </div>
        <aside className="hero-panel">
          <h2>Dieselben Grundfragen, neun Länder</h2>
          <ol>
            <li>Visum und Aufenthalt</li>
            <li>Steuern und Wegzug</li>
            <li>Krankenversicherung</li>
            <li>Was der Alltag kostet</li>
            <li>Arbeit und Firma</li>
            <li>Bankkonto</li>
            <li>Checkliste für den Umzug</li>
          </ol>
        </aside>
      </section>
      <p className="notice">
        Keine Rechts-, Steuer- oder Versicherungsberatung. Regeln ändern sich. Jede Länder- und
        Themenseite nennt, was Sie bei Behörde, Botschaft oder Kasse selbst prüfen sollten. Stand
        der Bearbeitung: 13. November 2026.
      </p>

      <section className="section">
        <h2>Neun Länder im gleichen Raster</h2>
        <p className="section-intro">
          Damit Sie Thailand nicht mit Spanien verwechseln und Dubai nicht mit einer EU-Anmeldung.
          Jede Seite beginnt mit einer Kurzantwort. Madagaskar ergänzt Regionen, Ruhestand und die
          Betreuung vor Ort.
        </p>
        <ul className="card-grid">
          {countries.map((guide) => (
            <li key={guide.slug}>
              <Link className="card" href={countryPath(guide)}>
                <span className="eyebrow">{guide.eyebrow}</span>
                <h3>{guide.label}</h3>
                <p>{guide.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Themen, die fast jeden Umzug betreffen</h2>
        <p className="section-intro">
          Die Länderseiten verlinken hierher, wenn eine Frage nicht am Reisepass hängt, sondern am
          Herkunftsland.
        </p>
        <ul className="card-grid">
          {topics.map((guide) => (
            <li key={guide.slug}>
              <Link className="card" href={topicPath(guide)}>
                <span className="eyebrow">{guide.eyebrow}</span>
                <h3>{guide.label}</h3>
                <p>{guide.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Wie Sie die Ratgeber nutzen</h2>
        <ol className="steps">
          <li>
            <h3>Herkunft festhalten</h3>
            <p>
              Deutschland, Österreich und die Schweiz stellen dieselben Fragen an verschiedene
              Behörden. Eine Abmeldung in Köln gilt nicht in Wien oder Zürich.
            </p>
          </li>
          <li>
            <h3>Status vor Kündigung</h3>
            <p>
              Klären Sie, ob Sie einreisen dürfen und dort wohnen und arbeiten können, bevor
              Wohnung und Job im Herkunftsland enden.
            </p>
          </li>
          <li>
            <h3>Quelle statt Artikel</h3>
            <p>
              Nutzen Sie die Kurzantwort als Landkarte und die genannte Behörde als Entscheidung.
              Dieser Text wird nicht Ihr Bescheid.
            </p>
          </li>
        </ol>
      </section>

      <section className="section">
        <h2>Kurz beantwortet</h2>
        <div className="faq">
          {homeFaq.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>
                <RichText text={item.answer} />
              </p>
            </article>
          ))}
        </div>
        <p>
          <Link href="/faq">Alle häufigen Fragen</Link>
        </p>
      </section>

      <section className="section">
        <h2>Einen Hinweis zum Inhalt?</h2>
        <p className="section-intro">
          Das Formular ist für Rückfragen und Korrekturen da, nicht für eine Einzelfallberatung.
        </p>
        <p>
          <Link className="button" href="/kontakt">
            Zum Kontaktformular
          </Link>
        </p>
      </section>
    </div>
  );
}
