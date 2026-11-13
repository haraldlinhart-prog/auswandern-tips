import Link from 'next/link';
import { countries, countryPath, topicPath, topics } from '@/lib/content';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <h2>auswandern-tips.de</h2>
          <p>
            Orientierung zum Auswandern aus Deutschland, Österreich und der Schweiz. Ein
            Informationsangebot der PAN21.com International LLC, keine Behörde und keine Kanzlei.
          </p>
        </div>
        <div>
          <h2>Länder</h2>
          <ul>
            {countries.map((guide) => (
              <li key={guide.slug}>
                <Link href={countryPath(guide)}>{guide.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Ratgeber</h2>
          <ul>
            {topics.map((guide) => (
              <li key={guide.slug}>
                <Link href={topicPath(guide)}>{guide.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/faq">Häufige Fragen</Link>
            </li>
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap">
        <p className="fine">
          Regeln zu Aufenthalt, Steuern und Versicherung ändern sich. Prüfen Sie die zuständigen
          Behörden, bevor Sie entscheiden.
        </p>
      </div>
    </footer>
  );
}
