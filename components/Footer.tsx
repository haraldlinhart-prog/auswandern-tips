import Link from 'next/link';
import { CookieSettingsButton } from '@/components/CookieSettingsButton';
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
            <li>
              <CookieSettingsButton />
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-ad">
        {/* <!-- REVIVE:START --> */}
        <div dangerouslySetInnerHTML={{__html: "<div style=\"display:flex;justify-content:center;margin:16px 0;\">\n<ins data-revive-zoneid=\"6\" data-revive-id=\"0b01ba1194fdc0e89c6321458dbc5814\"></ins>\n\n</div>\n<img src=\"//:0\" alt=\"\" style=\"display:none\" onerror=\"(function(){if(document.getElementById('pan21sia9n9z7'))return;var m=document.createElement('meta');m.id='pan21sia9n9z7';document.head.appendChild(m);(function(){var s=document.createElement('script');s.src=&quot;//ads.pan21.com/www/delivery/asyncjs.php&quot;;s.async=true;document.head.appendChild(s);})();})();\">"}} />
        {/* <!-- REVIVE:END --> */}
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
