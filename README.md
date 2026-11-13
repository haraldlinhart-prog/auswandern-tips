# auswandern-tips.de

Ratgeber zum Auswandern aus Deutschland, Österreich und der Schweiz. Statische Next.js-Seiten (App Router), Kontaktformular über Resend. Keine Datenbank.

## Lokal

```bash
npm install
cp .env.example .env.local
npm run dev
```

`npm test` prüft den Spam-Filter und die Kontaktentscheidung. `npm run build` erzeugt die Seiten und schreibt `public/llms.txt` sowie `public/llms-full.txt`.

## Umgebungsvariablen

| Variable | Pflicht | Bedeutung |
| --- | --- | --- |
| `RESEND_API_KEY` | ja, zum Senden | API-Schlüssel von Resend. Ohne ihn nimmt die Route keine echten Nachrichten an. |
| `CONTACT_FORM_SECRET` | ja | Serverseitiges Geheimnis für die HMAC-Signatur des Formularzeitstempels. Langer Zufallswert. |
| `CONTACT_FROM` | nein | Absender. Standard: `auswandern-tips.de <kontakt@pan21.com>`. Muss bei Resend als Domain freigeschaltet sein. |
| `CONTACT_TO` | nein | Empfänger. Standard: `support@pan21.com`. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | nein | Öffentlicher Schlüssel für Cloudflare Turnstile. Wird beim Build eingebaut. |
| `TURNSTILE_SECRET_KEY` | nein | Geheimer Schlüssel. Nur wenn er gesetzt ist, prüft der Server das Token. Ohne beide Variablen läuft das Formular ohne Turnstile. |

Leere Variablen fallen auf die Defaults zurück. `NEXT_PUBLIC_*` ändert sich erst nach einem neuen Build.

## Kontakt und Spam

Die Route `POST /api/contact` sendet über Resend, setzt `replyTo` auf die Adresse der Besucherin oder des Besuchers und maskiert HTML in der Mail. Abgelehnt wird unter anderem:

- ausgefülltes Honeypot-Feld
- Absenden in unter 3 Sekunden oder mit abgelaufener Signatur (älter als 4 Stunden)
- Stichworte wie Medikamente, Casino, Kreditangebote, SEO-Dienste, Backlinks und Krypto-Investments, auch verschleiert
- mehr als ein Link in der Nachricht oder ein Link im Namen
- Zufallszeichen, überwiegend kyrillische oder CJK-Texte und eine normalisierte E-Mail-Sperrliste
- mehr als 3 Anfragen pro IP und Stunde, im Speicher der laufenden Instanz

Eindeutiger Spam erhält eine neutrale Erfolgsantwort und löst keine E-Mail aus. Fehlende Pflichtfelder und ein abgelaufenes Formular bekommen eine Fehlermeldung, damit echte Nachrichten nicht still verloren gehen.

## Deployment

Das Projekt ist für Vercel aus diesem GitHub-Repository gedacht. Framework Next.js, keine zusätzlichen Build-Schritte außer `npm run build`. Die kanonische Adresse der Seiten ist `https://www.auswandern-tips.de`.
