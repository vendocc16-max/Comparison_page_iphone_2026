/**
 * iPhone Comparison App - Library Export
 * 
 * This file exports the main component and types for use in:
 * - React applications (npm package)
 * - TypeScript projects (type definitions)
 * - Standalone builds (iframe deployment)
 */

import type { Product, ProductImage, ProductSpec, ProductCategory, ComparisonState } from './types/product';

// Main components (default exports)
export { default as AppleComparison } from '@components/AppleComparison';
export { default as ComparisonTable } from '@components/ComparisonTable';
export { default as ProductCard } from '@components/ProductCard';
export { default as ProductSelector } from '@components/ProductSelector';
export { default as Header } from '@components/Header';
export { default as Footer } from '@components/Footer';
export { default as ResponsiveImage } from '@components/ResponsiveImage';
export { default as ImageGallery } from '@components/ImageGallery';

// Re-export types
export type { Product, ProductImage, ProductSpec, ProductCategory, ComparisonState };

// Version
export const VERSION = '__VERSION__';
export const INTEGRATION_MODE = '__INTEGRATION_MODE__';
