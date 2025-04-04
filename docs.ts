export interface Doc {
  id: string;
  title: string;
  description: string;
  category: string;
}

export type DocsResponse = Doc[];
