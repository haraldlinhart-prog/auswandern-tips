import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap page-header">
      <p className="eyebrow">404</p>
      <h1>Diese Seite gibt es nicht</h1>
      <p className="lede">Der Ratgeber ist umgezogen oder der Link war unvollständig.</p>
      <div className="actions">
        <Link className="button" href="/">
          Zur Startseite
        </Link>
        <Link className="button secondary" href="/laender">
          Länder
        </Link>
      </div>
    </div>
  );
}
