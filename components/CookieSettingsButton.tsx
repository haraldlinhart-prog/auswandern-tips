'use client';

import { OPEN_COOKIE_SETTINGS_EVENT } from '@/lib/analytics';

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer-button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
    >
      Cookie-Einstellungen
    </button>
  );
}
