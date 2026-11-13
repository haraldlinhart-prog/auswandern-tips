import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Source_Sans_3 } from 'next/font/google';
import { AnalyticsRouteChange } from '@/components/AnalyticsRouteChange';
import { CookieBanner } from '@/components/CookieBanner';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { GA_MEASUREMENT_ID, googleAnalyticsBootstrap } from '@/lib/analytics';
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const sans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Auswandern aus Deutschland, Österreich und der Schweiz | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Ratgeber zum Auswandern: Aufenthalt, Steuern, Krankenversicherung, Lebenshaltung, Arbeit und Konto. Für Menschen aus Deutschland, Österreich und der Schweiz.',
  applicationName: SITE_NAME,
  authors: [{ name: 'PAN21.com International LLC', url: `${SITE_URL}/ueber-uns` }],
  creator: 'PAN21.com International LLC',
  alternates: { canonical: SITE_URL, languages: { de: SITE_URL } },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: { card: 'summary' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0a3f3c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable}`}>
      <head>
        <script id="ga4-consent" dangerouslySetInnerHTML={{ __html: googleAnalyticsBootstrap() }} />
        <script id="ga4-loader" defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      </head>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <a className="skip" href="#inhalt">
          Zum Inhalt
        </a>
        <Header />
        <main id="inhalt">{children}</main>
        <Footer />
        <CookieBanner />
        <AnalyticsRouteChange />
      </body>
    </html>
  );
}
