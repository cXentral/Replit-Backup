export interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  features: {
    overview?: string;
    featureList?: Array<{
      title: string;
      description: string;
    }>;
    specifications?: string;
    useCases?: Array<{
      title: string;
      description: string;
    }>;
  };
}

export type ProductResponse = Product;
