/**
 * iPhone Comparison App - Library Export
 * 
 * This file exports the main component and types for use in:
 * - React applications (npm package)
 * - TypeScript projects (type definitions)
 * - Standalone builds (iframe deployment)
 */

// Main components
export { AppleComparison } from '@components/AppleComparison';
export { ComparisonTable } from '@components/ComparisonTable';
export { ProductCard } from '@components/ProductCard';
export { ProductSelector } from '@components/ProductSelector';
export { Header } from '@components/Header';
export { Footer } from '@components/Footer';
export { ResponsiveImage } from '@components/ResponsiveImage';

// Types
export type { Product, iPhone, Specification, Category } from '@types/product';

// Version
export const VERSION = '__VERSION__';
export const INTEGRATION_MODE = '__INTEGRATION_MODE__';
