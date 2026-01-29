import { useState } from 'react';
import { Product } from '../types/product';
import ResponsiveImage from './ResponsiveImage';

interface AppleComparisonProps {
  products: Product[];
}

// Category navigation items
const categories = [
  { id: 'design', label: 'Design' },
  { id: 'display', label: 'Skärm' },
  { id: 'camera', label: 'Kamera' },
  { id: 'chip', label: 'Chip' },
  { id: 'battery', label: 'Batteri' },
];

export default function AppleComparison({ products }: AppleComparisonProps) {
  const [activeCategory, setActiveCategory] = useState('design');

  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-body-large text-apple-gray-500">
          Välj produkter för att jämföra
        </p>
      </div>
    );
  }

  return (
    <div className="apple-comparison">
      {/* Product Headers - Fixed at top */}
      <div className="sticky top-0 z-20 bg-white border-b border-apple-gray-200">
        <div className="max-w-[980px] mx-auto px-6">
          {/* Product Title Row */}
          <div
            className="grid pt-6 pb-4"
            style={{ gridTemplateColumns: `repeat(${products.length}, 1fr)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="text-center px-4">
                <p className="text-caption text-apple-gray-500 mb-1">Ny</p>
                <h2 className="text-subheadline font-semibold text-apple-gray-800">
                  {product.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Images & CTAs */}
      <div className="bg-white pb-8">
        <div className="max-w-[980px] mx-auto px-6">
          <div
            className="grid"
            style={{ gridTemplateColumns: `repeat(${products.length}, 1fr)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="text-center px-4">
                {/* Product Image */}
                <div className="h-[280px] flex items-center justify-center mb-4">
                  <ResponsiveImage
                    images={product.images.frontBack}
                    alt={product.name}
                    className="max-h-full w-auto"
                    priority
                  />
                </div>

                {/* Color Swatches */}
                <div className="flex justify-center gap-2 mb-4">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      className="w-6 h-6 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-apple-blue focus:ring-offset-2"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={`Välj ${color.name}`}
                    />
                  ))}
                </div>

                {/* Price */}
                <p className="text-body text-apple-gray-800 mb-4">
                  {product.price.formatted}
                </p>

                {/* CTAs */}
                <div className="space-y-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full max-w-[200px] px-6 py-3 bg-apple-blue text-white text-body font-medium rounded-apple-sm hover:bg-apple-blue-hover transition-colors"
                  >
                    Köp
                  </a>
                  <a
                    href="#"
                    className="block text-apple-blue text-body hover:underline"
                  >
                    Läs mer →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-[72px] z-10 bg-apple-gray-100 border-y border-apple-gray-200">
        <div className="max-w-[980px] mx-auto px-6">
          <nav className="flex justify-center">
            <ul className="flex gap-1 p-1 bg-apple-gray-200 rounded-full my-3">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => setActiveCategory(cat.id)}
                    className={`
                      px-5 py-2 rounded-full text-caption font-medium transition-all
                      ${activeCategory === cat.id
                        ? 'bg-apple-gray-800 text-white'
                        : 'text-apple-gray-600 hover:text-apple-gray-800'
                      }
                    `}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Comparison Content */}
      <div className="bg-white py-8">
        <div className="max-w-[980px] mx-auto px-6">
          {/* Design Section */}
          {activeCategory === 'design' && (
            <ComparisonSection
              products={products}
              title="Design"
              rows={[
                {
                  label: 'Material',
                  getValue: (p) =>
                    p.id === 'iphone-17-pro'
                      ? 'Titan'
                      : p.id === 'iphone-17-air'
                      ? 'Titan och aluminium'
                      : 'Aluminium',
                  imageKey: 'frontBack',
                },
                {
                  label: 'Tjocklek',
                  getValue: (p) =>
                    p.id === 'iphone-17-pro'
                      ? '8,25 mm'
                      : p.id === 'iphone-17-air'
                      ? '5,5 mm'
                      : '7,8 mm',
                  highlight: (p) => p.id === 'iphone-17-air',
                },
                {
                  label: 'Vikt',
                  getValue: (p) =>
                    p.id === 'iphone-17-pro'
                      ? '227 g'
                      : p.id === 'iphone-17-air'
                      ? '149 g'
                      : '195 g',
                  highlight: (p) => p.id === 'iphone-17-air',
                },
              ]}
            />
          )}

          {/* Display Section */}
          {activeCategory === 'display' && (
            <ComparisonSection
              products={products}
              title="Skärm"
              rows={[
                {
                  label: 'Skärmstorlek',
                  getValue: (p) =>
                    p.id === 'iphone-17-pro'
                      ? '6,3″ eller 6,9″'
                      : p.id === 'iphone-17-air'
                      ? '6,6″'
                      : '6,3″',
                },
                {
                  label: 'Skärmtyp',
                  getValue: () => 'Super Retina XDR',
                },
                {
                  label: 'ProMotion',
                  getValue: (p) => p.id !== 'iphone-17',
                  highlight: (p) => p.id !== 'iphone-17',
                },
                {
                  label: 'Always-On',
                  getValue: (p) => p.id === 'iphone-17-pro',
                  highlight: (p) => p.id === 'iphone-17-pro',
                },
                {
                  label: 'Dynamic Island',
                  getValue: () => true,
                },
              ]}
            />
          )}

          {/* Camera Section */}
          {activeCategory === 'camera' && (
            <ComparisonSection
              products={products}
              title="Kamera"
              rows={[
                {
                  label: 'Huvudkamera',
                  getValue: () => '48 MP Fusion',
                  imageKey: 'camera',
                },
                {
                  label: 'Ultravidvinkel',
                  getValue: (p) =>
                    p.id === 'iphone-17-pro'
                      ? '48 MP'
                      : p.id === 'iphone-17'
                      ? '48 MP'
                      : '—',
                  highlight: (p) => p.id === 'iphone-17-pro',
                },
                {
                  label: 'Teleobjektiv',
                  getValue: (p) =>
                    p.id === 'iphone-17-pro' ? '48 MP 5× optisk zoom' : '—',
                  highlight: (p) => p.id === 'iphone-17-pro',
                },
                {
                  label: 'Frontkamera',
                  getValue: (p) =>
                    p.id === 'iphone-17-air' ? '24 MP TrueDepth' : '12 MP TrueDepth',
                  highlight: (p) => p.id === 'iphone-17-air',
                },
              ]}
            />
          )}

          {/* Chip Section */}
          {activeCategory === 'chip' && (
            <ComparisonSection
              products={products}
              title="Chip"
              rows={[
                {
                  label: 'Processor',
                  getValue: (p) =>
                    p.id === 'iphone-17' ? 'A19' : 'A19 Pro',
                  highlight: (p) => p.id !== 'iphone-17',
                  imageKey: 'chip',
                },
                {
                  label: 'Neural Engine',
                  getValue: () => '16-core',
                },
                {
                  label: 'Apple Intelligence',
                  getValue: () => true,
                },
              ]}
            />
          )}

          {/* Battery Section */}
          {activeCategory === 'battery' && (
            <ComparisonSection
              products={products}
              title="Batteri"
              rows={[
                {
                  label: 'Videouppspelning',
                  getValue: (p) =>
                    p.id === 'iphone-17-pro'
                      ? 'Upp till 33 timmar'
                      : p.id === 'iphone-17-air'
                      ? 'Upp till 22 timmar'
                      : 'Upp till 26 timmar',
                  highlight: (p) => p.id === 'iphone-17-pro',
                },
                {
                  label: 'MagSafe',
                  getValue: () => true,
                },
                {
                  label: 'Snabbladdning',
                  getValue: () => true,
                },
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Comparison Section Component
interface ComparisonRowConfig {
  label: string;
  getValue: (product: Product) => string | boolean;
  highlight?: (product: Product) => boolean;
  imageKey?: 'frontBack' | 'chip' | 'camera' | 'side';
}

interface ComparisonSectionProps {
  products: Product[];
  title: string;
  rows: ComparisonRowConfig[];
}

function ComparisonSection({ products, title, rows }: ComparisonSectionProps) {
  return (
    <div className="comparison-section">
      <h3 className="sr-only">{title}</h3>

      {rows.map((row, index) => (
        <div
          key={index}
          className={`
            grid items-center py-6 border-b border-apple-gray-100
            ${index === 0 ? 'pt-0' : ''}
          `}
          style={{ gridTemplateColumns: `180px repeat(${products.length}, 1fr)` }}
        >
          {/* Row Label */}
          <div className="text-body text-apple-gray-500 pr-4">
            {row.label}
          </div>

          {/* Product Values */}
          {products.map((product) => {
            const value = row.getValue(product);
            const isHighlighted = row.highlight?.(product) ?? false;

            return (
              <div key={product.id} className="text-center px-4">
                {/* Optional Image */}
                {row.imageKey && index === 0 && (
                  <div className="h-[120px] flex items-center justify-center mb-3">
                    <ResponsiveImage
                      images={product.images[row.imageKey]}
                      alt={`${product.name} ${row.label}`}
                      className="max-h-full w-auto"
                    />
                  </div>
                )}

                {/* Value Display */}
                {typeof value === 'boolean' ? (
                  value ? (
                    <svg
                      className={`w-6 h-6 mx-auto ${
                        isHighlighted ? 'text-apple-blue' : 'text-apple-green'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span className="text-apple-gray-300 text-body">—</span>
                  )
                ) : (
                  <span
                    className={`text-body ${
                      isHighlighted
                        ? 'text-apple-blue font-medium'
                        : 'text-apple-gray-800'
                    }`}
                  >
                    {value}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
