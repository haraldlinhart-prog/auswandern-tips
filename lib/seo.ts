import type { Metadata } from 'next';
import type { FaqItem, Guide } from './content/types';
import { SITE_NAME, SITE_URL, absoluteUrl } from './site';

export const organizationId = `${SITE_URL}/#organization`;
export const websiteId = `${SITE_URL}/#website`;

export function plainText(input: string): string {
  return input.replace(/\[([^\]]+)\]\((\/[^)\s]+)\)/g, '$1');
}

export function pageMetadata(options: {
  title: string;
  description: string;
  path: string;
  kind?: 'website' | 'article';
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(options.path);
  const documentTitle = options.path === '/' ? options.title : `${options.title} | ${SITE_NAME}`;
  return {
    title: options.path === '/' ? { absolute: documentTitle } : options.title,
    description: options.description,
    alternates: { canonical: url, languages: { de: url } },
    robots: options.noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: documentTitle,
      description: options.description,
      url,
      siteName: SITE_NAME,
      locale: 'de_DE',
      type: options.kind === 'article' ? 'article' : 'website',
    },
    twitter: {
      card: 'summary',
      title: documentTitle,
      description: options.description,
    },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId,
    name: SITE_NAME,
    url: SITE_URL,
    legalName: 'PAN21.com International LLC',
    email: 'dsgvo@pan21.com',
    telephone: '+49-30-5684450-0',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7533 South Center View CT, STE R',
      addressLocality: 'West Jordan',
      addressRegion: 'UT',
      postalCode: '84084',
      addressCountry: 'US',
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: 'de',
    description:
      'Ratgeber zum Auswandern aus Deutschland, Österreich und der Schweiz: Aufenthalt, Steuern, Krankenversicherung, Arbeit und Konto.',
    publisher: { '@id': organizationId },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(guide: Guide, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    inLanguage: 'de',
    datePublished: guide.updated,
    dateModified: guide.updated,
    mainEntityOfPage: absoluteUrl(path),
    author: { '@id': organizationId },
    publisher: { '@id': organizationId },
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'de',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: plainText(item.answer) },
    })),
  };
}
