export type LinkMap = Record<string, string | null | undefined>;

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: string;
  featured: boolean;
  summary: string;
  description: string;
  tags: string[];
  links: LinkMap;
};

export type NewsItem = {
  date: string;
  title: string;
  description?: string;
  type?: string;
};

export type Award = {
  title: string;
  year: string;
  description?: string;
};

export type Talk = {
  title: string;
  event: string;
  date: string;
  location: string;
  type: string;
  description: string;
  links?: LinkMap;
};
