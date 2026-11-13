import Link from 'next/link';
import type { ReactNode } from 'react';

const LINK_SOURCE = String.raw`\[([^\]]+)\]\((\/[^)\s]+)\)`;

function isSafeHref(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//') && !href.includes('\\');
}

export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(new RegExp(LINK_SOURCE, 'g'))) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    const label = match[1] ?? '';
    const href = match[2] ?? '';
    if (isSafeHref(href)) {
      nodes.push(
        <Link key={`${href}-${index}`} href={href}>
          {label}
        </Link>,
      );
    } else {
      nodes.push(match[0]);
    }
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
