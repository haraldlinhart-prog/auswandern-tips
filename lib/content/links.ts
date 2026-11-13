import type { RelatedLink } from './types';

export const links = {
  checkliste: { href: '/ratgeber/auswandern-checkliste', label: 'Auswandern-Checkliste' },
  abmeldung: { href: '/ratgeber/abmeldung-deutschland', label: 'Abmeldung in Deutschland' },
  steuern: { href: '/ratgeber/steuern-beim-auswandern', label: 'Steuern beim Auswandern' },
  krankenversicherung: { href: '/ratgeber/krankenversicherung-ausland', label: 'Krankenversicherung im Ausland' },
  firma: { href: '/ratgeber/firma-im-ausland-gruenden', label: 'Firma im Ausland gründen' },
  bank: { href: '/ratgeber/bankkonto-im-ausland', label: 'Bankkonto im Ausland' },
  rente: { href: '/ratgeber/rente-im-ausland', label: 'Rente im Ausland' },
  thailand: { href: '/laender/thailand', label: 'Thailand' },
  madagaskar: { href: '/laender/madagaskar', label: 'Madagaskar' },
  spanien: { href: '/laender/spanien', label: 'Spanien' },
  portugal: { href: '/laender/portugal', label: 'Portugal' },
  dubai: { href: '/laender/dubai-vae', label: 'Dubai und die VAE' },
  zypern: { href: '/laender/zypern', label: 'Zypern' },
  usa: { href: '/laender/usa', label: 'USA' },
  schweiz: { href: '/laender/schweiz', label: 'Schweiz' },
  kanada: { href: '/laender/kanada', label: 'Kanada' },
} as const satisfies Record<string, RelatedLink>;
