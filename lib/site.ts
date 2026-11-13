export const SITE_URL = 'https://www.auswandern-tips.de';
export const SITE_NAME = 'auswandern-tips.de';
export const CONTENT_UPDATED = '2026-11-13';

export const DEFAULT_CONTACT_FROM = 'auswandern-tips.de <kontakt@pan21.com>';
export const DEFAULT_CONTACT_TO = 'support@pan21.com';

export function absoluteUrl(path: string): string {
  if (path === '/' || path === '') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function formatGermanDate(iso: string): string {
  return new Intl.DateTimeFormat('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`));
}
