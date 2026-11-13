import { CONTENT_UPDATED } from '../site';
import type { Guide } from './types';

export function guide(data: Omit<Guide, 'updated'> & { updated?: string }): Guide {
  return { ...data, updated: data.updated ?? CONTENT_UPDATED };
}
