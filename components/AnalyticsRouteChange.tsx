'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export function AnalyticsRouteChange() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const path = pathname;
    const frame = window.requestAnimationFrame(() => {
      window.gtag?.('event', 'page_view', {
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
