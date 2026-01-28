// Product Types for iPhone Comparison Page

export interface ProductImage {
  small: string;
  small2x: string;
  medium: string;
  medium2x: string;
  large: string;
  large2x: string;
}

export interface ProductSpec {
  label: string;
  value: string | number | boolean;
  highlight?: boolean;
}

export interface ProductCategory {
  name: string;
  specs: ProductSpec[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: {
    amount: number;
    currency: string;
    formatted: string;
  };
  colors: {
    name: string;
    hex: string;
  }[];
  images: {
    frontBack: ProductImage;
    chip: ProductImage;
    camera: ProductImage;
    side: ProductImage;
  };
  categories: ProductCategory[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface ComparisonState {
  selectedProducts: string[];
  maxProducts: number;
  expandedCategories: string[];
}
