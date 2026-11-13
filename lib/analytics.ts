export const GA_MEASUREMENT_ID = 'G-RJC3FZKEZP';
export const CONSENT_STORAGE_KEY = 'auswandern-tips-consent';
export const OPEN_COOKIE_SETTINGS_EVENT = 'auswandern:open-cookie-settings';

export type ConsentState = 'granted' | 'denied';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    auswandernSetConsent?: (value: ConsentState) => void;
  }
}

/**
 * Blocking head snippet. Consent Mode v2 defaults to denied before gtag.js is
 * requested, and a stored choice is applied before the first config hit.
 */
export function googleAnalyticsBootstrap(): string {
  const measurementId = JSON.stringify(GA_MEASUREMENT_ID);
  const storageKey = JSON.stringify(CONSENT_STORAGE_KEY);
  return `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;

gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});

function deleteGaCookies() {
  var chunks = document.cookie ? document.cookie.split(';') : [];
  var host = location.hostname;
  var domains = [host, '.' + host];
  var parts = host.split('.');
  if (parts.length > 2) {
    var parent = parts.slice(-2).join('.');
    domains.push(parent, '.' + parent);
  }
  var expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
  for (var i = 0; i < chunks.length; i++) {
    var name = chunks[i].split('=')[0].trim();
    if (name.indexOf('_ga') !== 0) continue;
    document.cookie = name + '=; expires=' + expires + '; path=/';
    for (var d = 0; d < domains.length; d++) {
      document.cookie = name + '=; expires=' + expires + '; path=/; domain=' + domains[d];
    }
  }
}

function consentUpdate(state) {
  gtag('consent', 'update', {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state
  });
}

function clearDeniedCookies() {
  deleteGaCookies();
  window.setTimeout(deleteGaCookies, 0);
  window.setTimeout(deleteGaCookies, 800);
}

window.auswandernSetConsent = function (value) {
  var state = value === 'granted' ? 'granted' : 'denied';
  try { localStorage.setItem(${storageKey}, state); } catch (error) {}
  consentUpdate(state);
  if (state === 'denied') clearDeniedCookies();
};

try {
  var stored = localStorage.getItem(${storageKey});
  if (stored === 'granted') consentUpdate('granted');
  if (stored === 'denied') deleteGaCookies();
} catch (error) {}

gtag('js', new Date());
gtag('config', ${measurementId});
`.trim();
}
