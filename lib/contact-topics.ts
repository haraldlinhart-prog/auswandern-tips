export const CONTACT_TOPICS = [
  'Allgemeine Frage',
  'Länder-Ratgeber',
  'Steuern und Abmeldung',
  'Krankenversicherung und Rente',
  'Konto, Arbeit, Firma',
  'Hinweis zum Inhalt',
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number];
