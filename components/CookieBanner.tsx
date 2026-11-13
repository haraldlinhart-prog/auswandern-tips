'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  CONSENT_STORAGE_KEY,
  OPEN_COOKIE_SETTINGS_EVENT,
  type ConsentState,
} from '@/lib/analytics';

function readStoredConsent(): ConsentState | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const declineRef = useRef<HTMLButtonElement>(null);
  const openedFromFooter = useRef(false);

  useEffect(() => {
    if (!readStoredConsent()) setOpen(true);
    const openSettings = () => {
      openedFromFooter.current = true;
      setOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  useEffect(() => {
    if (!open || !openedFromFooter.current) return;
    declineRef.current?.focus();
    openedFromFooter.current = false;
  }, [open]);

  if (!open) return null;

  function choose(value: ConsentState) {
    if (typeof window.auswandernSetConsent === 'function') {
      window.auswandernSetConsent(value);
    } else {
      try {
        localStorage.setItem(CONSENT_STORAGE_KEY, value);
      } catch {
        /* Private mode can block storage; the banner still closes. */
      }
    }
    setOpen(false);
  }

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie-Einstellungen">
      <div className="wrap cookie-banner-inner">
        <p>
          Wir möchten Google Analytics nutzen, um zu sehen, welche Seiten gelesen werden.
          Analyse- und Werbecookies setzen wir nur, wenn Sie zustimmen.{' '}
          <Link href="/datenschutz">Datenschutzerklärung</Link>
        </p>
        <div className="cookie-actions">
          <button
            ref={declineRef}
            type="button"
            className="button secondary"
            onClick={() => choose('denied')}
          >
            Ablehnen
          </button>
          <button type="button" className="button secondary" onClick={() => choose('granted')}>
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
