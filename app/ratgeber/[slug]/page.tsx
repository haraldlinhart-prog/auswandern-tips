import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GuideArticle } from '@/components/GuideArticle';
import { getTopic, topicPath, topics } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return topics.map((guide) => ({ slug: guide.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getTopic(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: topicPath(guide),
    kind: 'article',
  });
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const guide = getTopic(slug);
  if (!guide) notFound();
  const path = topicPath(guide);
  return (
    <GuideArticle
      guide={guide}
      path={path}
      crumbs={[
        { name: 'Start', path: '/' },
        { name: 'Ratgeber', path: '/ratgeber' },
        { name: guide.label, path },
      ]}
    />
  );
}
