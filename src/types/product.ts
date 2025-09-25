export interface Product {
  _id: string;
  title: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  category: string;
  price: number;
  availability: boolean;
  slug: {
    current: string;
  };
}

export interface ProductFilters {
  search: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  sortBy: 'price-asc' | 'price-desc' | 'title-asc' | 'title-desc';
}

export interface Category {
  name: string;
  count: number;
}
