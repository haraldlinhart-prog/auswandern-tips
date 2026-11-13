export type GuideSection = {
  id: string;
  heading: string;
  lead: string;
  paragraphs: string[];
  bullets?: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type RelatedLink = {
  href: string;
  label: string;
};

export type PartnerOffer = {
  title: string;
  text: string;
};

export type PartnerCta = {
  title: string;
  href: string;
  lead: string;
  offers: PartnerOffer[];
};

export type Guide = {
  kind: 'country' | 'topic';
  slug: string;
  title: string;
  label: string;
  eyebrow: string;
  description: string;
  updated: string;
  summary: string;
  sections: GuideSection[];
  faqs: FaqItem[];
  related: RelatedLink[];
  sources: string[];
  partner?: PartnerCta;
};
