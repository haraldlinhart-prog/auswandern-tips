import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GuideArticle } from '@/components/GuideArticle';
import { countries, countryPath, getCountry } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return countries.map((guide) => ({ slug: guide.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getCountry(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: countryPath(guide),
    kind: 'article',
  });
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const guide = getCountry(slug);
  if (!guide) notFound();
  const path = countryPath(guide);
  return (
    <GuideArticle
      guide={guide}
      path={path}
      crumbs={[
        { name: 'Start', path: '/' },
        { name: 'Länder', path: '/laender' },
        { name: guide.label, path },
      ]}
    />
  );
}
