import Link from 'next/link';
import SuchmaschinenBlogLink from './SuchmaschinenBlogLink';

const links = [
  { href: '/laender', label: 'Länder' },
  { href: '/ratgeber', label: 'Ratgeber' },
  { href: '/faq', label: 'FAQ' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/kontakt', label: 'Kontakt' },
];

function Mark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0a3f3c" />
      <circle cx="16" cy="16" r="8.5" fill="none" stroke="#f3efe6" strokeWidth="1.4" />
      <path d="M16 8.2 18.2 16 16 14.4 13.8 16Z" fill="#e4b089" />
      <circle cx="16" cy="16" r="1.3" fill="#f3efe6" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/">
          <Mark />
          <span className="brand-name">
            auswandern<span>-tips</span>
          </span>
        </Link>
        <nav aria-label="Hauptnavigation">
          <ul className="nav-inline">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <details className="nav-details">
            <summary>Menü</summary>
            <ul>
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </details>
          {/* suchmaschinen.pro:blog-link */}
          <SuchmaschinenBlogLink />
        </nav>
      </div>
    </header>
  );
}
