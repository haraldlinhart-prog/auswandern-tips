import type { Guide } from './types';

export function readingMinutes(guide: Guide): number {
  const parts = [
    guide.summary,
    ...guide.sections.flatMap((section) => [
      section.heading,
      section.lead,
      ...section.paragraphs,
      ...(section.bullets ?? []),
    ]),
    ...guide.faqs.flatMap((item) => [item.question, item.answer]),
  ];
  const words = parts.join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / 180));
}
