import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

const crumbs = [
  { name: 'Start', path: '/' },
  { name: 'Datenschutz', path: '/datenschutz' },
];

const sections: { title: string; body: string | string[] }[] = [
  {
    title: 'Verantwortlicher',
    body: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist die PAN21.com International LLC, 7533 South Center View CT, STE R, West Jordan, UT 84084, USA, vertreten durch Harald Linhart. E-Mail: dsgvo@pan21.com, Telefon: +49 30 5684450-0.',
  },
  {
    title: 'Hosting',
    body: 'Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf der Website verarbeitet Vercel technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer und Browserinformationen (Server-Logfiles), um die Website auszuliefern und vor Missbrauch zu schützen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb). Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung; Datenübermittlungen in die USA erfolgen auf Grundlage der EU-Standardvertragsklauseln.',
  },
  {
    title: 'Cookies',
    body: 'Für den Betrieb der Seiten selbst setzen wir keine Cookies. Analyse- und Werbecookies von Google Analytics setzen wir nur, wenn Sie einwilligen; Einzelheiten stehen im Abschnitt Google Analytics 4. Ihre Entscheidung speichern wir im lokalen Speicher des Browsers und nicht in einem Cookie. Ist der optionale Spamschutz Cloudflare Turnstile aktiviert, kann dieser Anbieter technisch notwendige Cookies setzen. Es gibt kein Nutzerkonto. Über „Cookie-Einstellungen“ in der Fußzeile können Sie die Entscheidung jederzeit ändern.',
  },
  {
    title: 'Google Analytics 4',
    body: [
      'Wir setzen Google Analytics 4 ein, einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google kann Daten auch an die Google LLC in den USA übermitteln. Die Mess-ID lautet G-RJC3FZKEZP. Das Tag ist auf jeder Seite eingebunden. Damit möchten wir erkennen, welche Beiträge gelesen werden, und das Angebot verbessern.',
      'Vor Ihrer Entscheidung gilt Google Consent Mode v2: analytics_storage, ad_storage, ad_user_data und ad_personalization stehen auf „denied“. Ohne Einwilligung werden keine Analyse-Cookies gesetzt. Google kann in diesem Zustand eine cookielose Meldung erhalten, die keine wiederkehrende Kennung in einem Cookie speichert.',
      'Erst „Akzeptieren“ stellt die vier Zwecke auf „granted“. Dann kann Google Analytics Cookies schreiben, vor allem _ga und _ga_RJC3FZKEZP, und verarbeitet insbesondere aufgerufene Seiten, Verweildauer, ungefähre Region sowie Geräte- und Browserdaten. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. „Ablehnen“ lässt die Zwecke auf „denied“ und löscht bereits vorhandene _ga-Cookies. Die Wahl liegt im lokalen Speicher des Browsers. Über „Cookie-Einstellungen“ in der Fußzeile können Sie sie jederzeit mit Wirkung für die Zukunft ändern.',
      'Google Analytics 4 speichert IP-Adressen nicht in voller Länge. Soweit Daten in die USA übermittelt werden, stützt sich das auf die EU-Standardvertragsklauseln. Weitere Hinweise von Google stehen unter https://policies.google.com/privacy und https://support.google.com/analytics/answer/6004245.',
    ],
  },
  {
    title: 'Kontaktformular und E-Mail',
    body: 'Wenn Sie uns über das Kontaktformular schreiben, verarbeiten wir Ihre Angaben (Name, E-Mail-Adresse, gewähltes Thema und Nachricht), um Ihre Anfrage zu beantworten. Die Angabe ist freiwillig. Ohne diese Daten können wir die Anfrage nicht beantworten. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können die Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, etwa über dsgvo@pan21.com. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt. Wir speichern die Nachrichten nicht in einer eigenen Datenbank. Sie liegen im Postfach des Empfängers und beim E-Mail-Dienstleister, bis die Anfrage erledigt ist und keine Aufbewahrungspflicht entgegensteht. Zur Abwehr von Missbrauch verarbeiten wir die IP-Adresse kurzzeitig im Arbeitsspeicher des Servers (Rate-Limit). Der E-Mail-Versand erfolgt über Resend (Resend Inc., USA) auf Grundlage eines Auftragsverarbeitungsvertrags und der EU-Standardvertragsklauseln.',
  },
  {
    title: 'Spamschutz',
    body: 'Das Formular nutzt ein verstecktes Feld, eine zeitliche Prüfung und Mengengrenzen, damit automatisierte Werbung nicht ankommt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Schutz des Postfachs). Sofern die Funktion aktiviert ist, setzen wir zusätzlich Cloudflare Turnstile (Cloudflare, Inc., USA) ein. Dabei werden technische Daten wie IP-Adresse und Browsermerkmale an Cloudflare übermittelt. Die Übermittlung in die USA stützt sich auf die EU-Standardvertragsklauseln. Ohne aktivierte Funktion läuft das Formular ohne diesen Anbieter.',
  },
  {
    title: 'Schriftarten',
    body: 'Die Schriftarten dieser Website werden lokal von unserem Server geladen. Es findet keine Verbindung zu Servern von Google oder anderen Schriftanbietern statt.',
  },
  {
    title: 'Ihre Rechte',
    body: 'Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21). Erteilte Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Wenden Sie sich für Ihre Anliegen an dsgvo@pan21.com.',
  },
];

export const metadata = pageMetadata({
  title: 'Datenschutzerklärung',
  description:
    'Datenschutz auf auswandern-tips.de: Verantwortlicher PAN21.com International LLC, Hosting bei Vercel, Kontaktformular über Resend, Google Analytics nur mit Einwilligung.',
  path: '/datenschutz',
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <div className="wrap legal">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <header className="page-header">
        <h1>Datenschutzerklärung</h1>
      </header>
      {sections.map((section, index) => (
        <section key={section.title}>
          <h2>
            {index + 1}. {section.title}
          </h2>
          {(Array.isArray(section.body) ? section.body : [section.body]).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
      <p className="fine">Stand: 13. November 2026</p>
    </div>
  );
}
