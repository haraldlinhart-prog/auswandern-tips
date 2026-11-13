import Link from 'next/link';
import { readingMinutes } from '@/lib/content/reading';
import type { Guide } from '@/lib/content/types';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';
import { formatGermanDate } from '@/lib/site';
import { Breadcrumbs } from './Breadcrumbs';
import { JsonLd } from './JsonLd';
import { RichText } from './RichText';

export function GuideArticle({
  guide,
  path,
  crumbs,
}: {
  guide: Guide;
  path: string;
  crumbs: { name: string; path: string }[];
}) {
  const minutes = readingMinutes(guide);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={articleJsonLd(guide, path)} />
      {guide.faqs.length > 0 ? <JsonLd data={faqJsonLd(guide.faqs)} /> : null}
      <article className="wrap">
        <Breadcrumbs items={crumbs} />
        <header className="page-header">
          <p className="eyebrow">{guide.eyebrow}</p>
          <h1>{guide.title}</h1>
          <p className="meta-row">
            <span>
              Zuletzt aktualisiert am <time dateTime={guide.updated}>{formatGermanDate(guide.updated)}</time>
            </span>
            <span>Lesezeit etwa {minutes} Minuten</span>
          </p>
          <div className="answer">
            <strong className="label">Kurzantwort</strong>
            <RichText text={guide.summary} />
          </div>
        </header>
        <div className="guide-layout">
          <div className="guide-main">
            {guide.sections.map((section) => (
              <section className="guide-section" id={section.id} key={section.id}>
                <h2>{section.heading}</h2>
                <p className="section-lead">
                  <RichText text={section.lead} />
                </p>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>
                    <RichText text={paragraph} />
                  </p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 48)}>
                        <RichText text={bullet} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
            <section className="guide-section" id="fragen">
              <h2>Häufige Fragen</h2>
              <div className="faq">
                {guide.faqs.map((item) => (
                  <article key={item.question}>
                    <h3>{item.question}</h3>
                    <p>
                      <RichText text={item.answer} />
                    </p>
                  </article>
                ))}
              </div>
            </section>
            <section className="guide-section" id="weiter">
              <h2>Weiterlesen</h2>
              <ul className="related">
                {guide.related.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
            <section className="guide-section sources" id="quellen">
              <h2>Was Sie an der Quelle prüfen</h2>
              <ul>
                {guide.sources.map((source) => (
                  <li key={source}>{source}</li>
                ))}
              </ul>
              <p className="notice">
                Dieser Text ist eine allgemeine Orientierung. Er ist keine Rechts-, Steuer- oder
                Versicherungsberatung. Aufenthalts-, Steuer- und Versicherungsregeln ändern sich und
                hängen von Pass, Aufenthaltszweck und Ihrer Situation ab.
              </p>
            </section>
          </div>
          <nav className="toc toc-mobile" aria-label="Inhalt">
            <details>
              <summary>Auf dieser Seite</summary>
              <TocList guide={guide} />
            </details>
          </nav>
          <nav className="toc toc-desktop" aria-label="Inhalt">
            <h2>Auf dieser Seite</h2>
            <TocList guide={guide} />
          </nav>
        </div>
      </article>
    </>
  );
}

function TocList({ guide }: { guide: Guide }) {
  return (
    <ol>
      {guide.sections.map((section) => (
        <li key={section.id}>
          <a href={`#${section.id}`}>{section.heading}</a>
        </li>
      ))}
      <li>
        <a href="#fragen">Häufige Fragen</a>
      </li>
      <li>
        <a href="#weiter">Weiterlesen</a>
      </li>
    </ol>
  );
}
