import { useState } from 'react';
import { Product } from '../types/product';
import ResponsiveImage from './ResponsiveImage';

interface ComparisonTableProps {
  products: Product[];
}

export default function ComparisonTable({ products }: ComparisonTableProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    'Display',
    'Chip',
    'Camera',
  ]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  // Get all unique categories across all products
  const allCategories = Array.from(
    new Set(products.flatMap((p) => p.categories.map((c) => c.name)))
  );

  const expandAll = () => setExpandedCategories(allCategories);
  const collapseAll = () => setExpandedCategories([]);

  if (products.length === 0) {
    return (
      <section className="section bg-apple-gray-50">
        <div className="container-apple text-center py-20">
          <div className="w-16 h-16 mx-auto mb-6 bg-apple-gray-200 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-apple-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-body-large text-apple-gray-500">
            Välj produkter ovan för att jämföra
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-apple-gray-50">
      <div className="max-w-apple-wide mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h2 className="text-subheadline text-apple-gray-800">
            Jämför specifikationer
          </h2>
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="px-4 py-2 text-caption text-apple-blue hover:bg-apple-blue/5 rounded-lg transition-colors"
            >
              Visa alla
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 text-caption text-apple-gray-500 hover:bg-apple-gray-100 rounded-lg transition-colors"
            >
              Dölj alla
            </button>
          </div>
        </div>

        {/* Sticky Product Headers */}
        <div className="sticky top-0 bg-apple-gray-50/95 backdrop-blur-sm z-10 pb-6 pt-2 -mx-4 px-4 md:-mx-6 md:px-6">
          <div
            className="grid gap-4 md:gap-6"
            style={{ gridTemplateColumns: `minmax(120px, 200px) repeat(${products.length}, 1fr)` }}
          >
            <div className="hidden md:block" /> {/* Empty cell for row labels */}
            {products.map((product, index) => (
              <div key={product.id} className="text-center">
                <div className="aspect-square max-w-[120px] md:max-w-[150px] mx-auto mb-3">
                  <ResponsiveImage
                    images={product.images.frontBack}
                    alt={product.name}
                    className="w-full h-full"
                    priority={index === 0}
                  />
                </div>
                <h3 className="text-body md:text-subheadline font-semibold text-apple-gray-800">
                  {product.name}
                </h3>
                <p className="text-caption md:text-body text-apple-gray-500">
                  {product.price.formatted}
                </p>
                {/* Color dots */}
                <div className="flex justify-center gap-1 mt-2">
                  {product.colors.slice(0, 4).map((color) => (
                    <span
                      key={color.name}
                      className="w-2 h-2 rounded-full border border-apple-gray-200"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Categories */}
        <div className="space-y-3">
          {allCategories.map((categoryName) => {
            const isExpanded = expandedCategories.includes(categoryName);

            return (
              <div
                key={categoryName}
                className="bg-white rounded-apple overflow-hidden shadow-sm"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(categoryName)}
                  className="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-apple-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-apple-blue"
                  aria-expanded={isExpanded}
                >
                  <h4 className="text-body font-semibold text-apple-gray-800">
                    {categoryName}
                  </h4>
                  <svg
                    className={`w-5 h-5 text-apple-gray-400 transition-transform duration-apple ease-apple ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Category Specs */}
                <div
                  className={`
                    border-t border-apple-gray-100 overflow-hidden
                    transition-all duration-apple ease-apple
                    ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  {/* Get all unique specs across products for this category */}
                  {(() => {
                    const allSpecs = new Map<string, boolean>();
                    products.forEach((product) => {
                      const category = product.categories.find((c) => c.name === categoryName);
                      category?.specs.forEach((spec) => {
                        allSpecs.set(spec.label, true);
                      });
                    });
                    return Array.from(allSpecs.keys());
                  })().map((specLabel, specIndex) => (
                    <div
                      key={specIndex}
                      className={`
                        grid gap-4 md:gap-6 px-4 md:px-6 py-3 md:py-4
                        ${specIndex % 2 === 0 ? 'bg-white' : 'bg-apple-gray-50/50'}
                      `}
                      style={{ gridTemplateColumns: `minmax(120px, 200px) repeat(${products.length}, 1fr)` }}
                    >
                      {/* Spec Label */}
                      <div className="text-caption md:text-body text-apple-gray-500 flex items-center">
                        {specLabel}
                      </div>

                      {/* Spec Values for each product */}
                      {products.map((product) => {
                        const category = product.categories.find((c) => c.name === categoryName);
                        const productSpec = category?.specs.find((s) => s.label === specLabel);
                        const value = productSpec?.value;
                        const isHighlighted = productSpec?.highlight;

                        return (
                          <div
                            key={product.id}
                            className={`
                              text-caption md:text-body text-center flex items-center justify-center
                              ${isHighlighted ? 'text-apple-blue font-medium' : 'text-apple-gray-800'}
                            `}
                          >
                            {typeof value === 'boolean' ? (
                              value ? (
                                <svg
                                  className={`w-5 h-5 ${isHighlighted ? 'text-apple-blue' : 'text-apple-green'}`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-label="Ja"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <span className="text-apple-gray-300" aria-label="Nej">—</span>
                              )
                            ) : value !== undefined ? (
                              value
                            ) : (
                              <span className="text-apple-gray-300">—</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-body text-apple-gray-500 mb-4">
            Hittat rätt iPhone?
          </p>
          <a href="#" className="btn-primary">
            Köp nu
          </a>
        </div>
      </div>
    </section>
  );
}
