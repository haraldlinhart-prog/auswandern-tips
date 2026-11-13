import { dubai, kanada, schweiz, thailand, usa } from './countries-world';
import { portugal, spanien, zypern } from './countries-eu';
import { abmeldung, checkliste, steuern } from './topics-a';
import { bank, firma, krankenversicherung, rente } from './topics-b';
import type { Guide } from './types';

export const countries: Guide[] = [thailand, spanien, portugal, dubai, zypern, usa, schweiz, kanada];
export const topics: Guide[] = [checkliste, abmeldung, steuern, krankenversicherung, firma, bank, rente];

export function getCountry(slug: string): Guide | undefined {
  return countries.find((guide) => guide.slug === slug);
}

export function getTopic(slug: string): Guide | undefined {
  return topics.find((guide) => guide.slug === slug);
}

export function countryPath(guide: Guide): string {
  return `/laender/${guide.slug}`;
}

export function topicPath(guide: Guide): string {
  return `/ratgeber/${guide.slug}`;
}
