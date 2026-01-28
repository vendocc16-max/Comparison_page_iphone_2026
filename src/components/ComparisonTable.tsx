import { useState } from 'react';
import { Product } from '../types/product';

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

  if (products.length === 0) {
    return (
      <section className="section bg-apple-gray-50">
        <div className="container-apple text-center">
          <p className="text-body-large text-apple-gray-500">
            Välj produkter ovan för att jämföra
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-apple-gray-50">
      <div className="max-w-apple-wide mx-auto px-6">
        {/* Sticky Product Headers */}
        <div className="sticky top-0 bg-apple-gray-50 z-10 pb-6 pt-2">
          <div className="grid gap-6" style={{ gridTemplateColumns: `200px repeat(${products.length}, 1fr)` }}>
            <div /> {/* Empty cell for row labels */}
            {products.map((product) => (
              <div key={product.id} className="text-center">
                <div className="aspect-square max-w-[150px] mx-auto mb-4">
                  <img
                    src={product.images.frontBack.small}
                    srcSet={`${product.images.frontBack.small} 1x, ${product.images.frontBack.small2x} 2x`}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-subheadline text-apple-gray-800">{product.name}</h3>
                <p className="text-body text-apple-gray-500">{product.price.formatted}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Categories */}
        <div className="space-y-4">
          {allCategories.map((categoryName) => {
            const isExpanded = expandedCategories.includes(categoryName);

            return (
              <div key={categoryName} className="bg-white rounded-apple overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(categoryName)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-apple-gray-50 transition-colors"
                >
                  <h4 className="text-body-large font-semibold text-apple-gray-800">
                    {categoryName}
                  </h4>
                  <svg
                    className={`w-5 h-5 text-apple-gray-400 transition-transform duration-apple ease-apple ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Category Specs */}
                {isExpanded && (
                  <div className="border-t border-apple-gray-100">
                    {/* Get specs for this category from first product that has it */}
                    {products[0]?.categories
                      .find((c) => c.name === categoryName)
                      ?.specs.map((spec, specIndex) => (
                        <div
                          key={specIndex}
                          className="grid gap-6 px-6 py-4 border-b border-apple-gray-100 last:border-b-0"
                          style={{ gridTemplateColumns: `200px repeat(${products.length}, 1fr)` }}
                        >
                          {/* Spec Label */}
                          <div className="text-body text-apple-gray-500">{spec.label}</div>

                          {/* Spec Values for each product */}
                          {products.map((product) => {
                            const category = product.categories.find((c) => c.name === categoryName);
                            const productSpec = category?.specs.find((s) => s.label === spec.label);
                            const value = productSpec?.value;
                            const isHighlighted = productSpec?.highlight;

                            return (
                              <div
                                key={product.id}
                                className={`text-body text-center ${
                                  isHighlighted ? 'text-apple-blue font-medium' : 'text-apple-gray-800'
                                }`}
                              >
                                {typeof value === 'boolean' ? (
                                  value ? (
                                    <svg
                                      className={`w-5 h-5 mx-auto ${
                                        isHighlighted ? 'text-apple-blue' : 'text-apple-green'
                                      }`}
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  ) : (
                                    <span className="text-apple-gray-300">—</span>
                                  )
                                ) : (
                                  value || <span className="text-apple-gray-300">—</span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
