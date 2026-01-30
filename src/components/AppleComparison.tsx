import { useState, useEffect, useRef } from 'react';
import { Product } from '../types/product';
import ResponsiveImage from './ResponsiveImage';

interface AppleComparisonProps {
  allProducts: Product[];
  selectedIds: string[];
  onSelectionChange: (ids: string[]) => void;
}

// Category navigation items
const categories = [
  { id: 'design', label: 'Design' },
  { id: 'display', label: 'Skärm' },
  { id: 'camera', label: 'Kamera' },
  { id: 'chip', label: 'Chip' },
  { id: 'battery', label: 'Batteri' },
];

export default function AppleComparison({ allProducts, selectedIds, onSelectionChange }: AppleComparisonProps) {
  const [activeCategory, setActiveCategory] = useState('design');
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Get selected products in order
  const products = selectedIds.map(id => allProducts.find(p => p.id === id)).filter(Boolean) as Product[];

  // Track scroll position for compact header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-body-large text-gray-500">
          Välj produkter för att jämföra
        </p>
      </div>
    );
  }

  return (
    <div className="apple-comparison">
      {/* Sticky Compact Header - Shows when scrolled */}
      <div
        ref={headerRef}
        className={`
          fixed top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200
          transition-all duration-300 ease-in-out
          ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}
      >
        <div className="max-w-[980px] mx-auto px-4 md:px-6">
          <div
            className="grid py-3"
            style={{ gridTemplateColumns: `repeat(${products.length}, 1fr)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="text-center px-2 md:px-4 flex items-center justify-center gap-3">
                <div className="w-10 h-10 flex-shrink-0 hidden sm:block">
                  <ResponsiveImage
                    images={product.images.frontBack}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-caption md:text-body font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>
                  <p className="text-small text-gray-500 hidden md:block">
                    {product.price.formatted}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section with Products */}
      <div className="bg-white pt-8 pb-4 md:pb-8">
        <div className="max-w-[980px] mx-auto px-4 md:px-6">
          {/* Product Selector Row */}
          <div
            className="grid mb-4 md:mb-6"
            style={{ gridTemplateColumns: `repeat(${products.length}, 1fr)` }}
          >
            {selectedIds.map((selectedId, index) => (
              <div key={index} className="text-center px-2 md:px-4">
                <select
                  value={selectedId}
                  onChange={(e) => {
                    const newIds = [...selectedIds];
                    newIds[index] = e.target.value;
                    onSelectionChange(newIds);
                  }}
                  className="w-full max-w-[200px] px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  {allProducts.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Product Images */}
          <div
            className="grid"
            style={{ gridTemplateColumns: `repeat(${products.length}, 1fr)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="text-center px-2 md:px-4">
                {/* Product Image */}
                <div className="h-[180px] md:h-[280px] flex items-center justify-center mb-3 md:mb-4">
                  <ResponsiveImage
                    images={product.images.frontBack}
                    alt={product.name}
                    className="max-h-full w-auto"
                    priority
                  />
                </div>

                {/* Color Swatches */}
                <div className="flex justify-center gap-1 md:gap-2 mb-3 md:mb-4">
                  {product.colors.slice(0, 4).map((color) => (
                    <button
                      key={color.name}
                      className="w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={`Välj ${color.name}`}
                    />
                  ))}
                  {product.colors.length > 4 && (
                    <span className="text-small text-apple-gray-400 self-center">
                      +{product.colors.length - 4}
                    </span>
                  )}
                </div>

                {/* Price */}
                <p className="text-caption md:text-body text-gray-800 mb-3 md:mb-4">
                  {product.price.formatted}
                </p>

                {/* CTAs */}
                <div className="space-y-2 md:space-y-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full max-w-[160px] md:max-w-[200px] px-4 md:px-6 py-2 md:py-3 bg-primary text-white text-caption md:text-body font-medium rounded-md hover:bg-primary transition-colors"
                  >
                    Köp
                  </a>
                  <a
                    href="#"
                    className="block text-primary text-caption md:text-body hover:underline"
                  >
                    Läs mer →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Navigation - Sticky */}
      <div className="sticky top-0 z-20 bg-gray-100 border-y border-gray-200">
        <div className="max-w-[980px] mx-auto px-4 md:px-6">
          <nav className="flex justify-center overflow-x-auto scrollbar-hide scroll-smooth">
            <ul className="flex gap-1 p-1 bg-gray-200 rounded-full my-3">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => setActiveCategory(cat.id)}
                    className={`
                      px-3 md:px-5 py-1.5 md:py-2 rounded-full text-small md:text-caption font-medium transition-all whitespace-nowrap
                      ${activeCategory === cat.id
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-600 hover:text-gray-800'
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
      <div className="bg-white py-6 md:py-8">
        <div className="max-w-[980px] mx-auto px-4 md:px-6">
          {/* Scrollable container for mobile */}
          <div className="overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide scroll-smooth">
            <div className="min-w-[600px] md:min-w-0" key={activeCategory}>
              {/* Design Section */}
              {activeCategory === 'design' && (
                <div className="animate-fade-in">
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
                    {
                      label: 'Ceramic Shield',
                      getValue: () => true,
                    },
                    {
                      label: 'Vattenbeständig',
                      getValue: () => 'IP68',
                    },
                  ]}
                />
                </div>
              )}

              {/* Display Section */}
              {activeCategory === 'display' && (
                <div className="animate-fade-in">
                <ComparisonSection
                  products={products}
                  title="Skärm"
                  rows={[
                    {
                      label: 'Skärmstorlek',
                      getValue: (p) =>
                        p.id === 'iphone-17-pro'
                          ? '6,3″ / 6,9″'
                          : p.id === 'iphone-17-air'
                          ? '6,6″'
                          : '6,3″',
                      imageKey: 'side',
                    },
                    {
                      label: 'Skärmtyp',
                      getValue: () => 'Super Retina XDR',
                    },
                    {
                      label: 'ProMotion (120 Hz)',
                      getValue: (p) => p.id !== 'iphone-17',
                      highlight: (p) => p.id !== 'iphone-17',
                    },
                    {
                      label: 'Always-On-skärm',
                      getValue: (p) => p.id === 'iphone-17-pro',
                      highlight: (p) => p.id === 'iphone-17-pro',
                    },
                    {
                      label: 'Dynamic Island',
                      getValue: () => true,
                    },
                    {
                      label: 'HDR-ljusstyrka',
                      getValue: (p) =>
                        p.id === 'iphone-17-pro' ? '2000 nits' : '1600 nits',
                      highlight: (p) => p.id === 'iphone-17-pro',
                    },
                  ]}
                />
                </div>
              )}

              {/* Camera Section */}
              {activeCategory === 'camera' && (
                <div className="animate-fade-in">
                <ComparisonSection
                  products={products}
                  title="Kamera"
                  rows={[
                    {
                      label: 'Kamerasystem',
                      getValue: (p) =>
                        p.id === 'iphone-17-pro'
                          ? 'Pro Fusion-system'
                          : 'Fusion-system',
                      imageKey: 'camera',
                    },
                    {
                      label: 'Huvudkamera',
                      getValue: () => '48 MP',
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
                        p.id === 'iphone-17-pro' ? '48 MP (5× zoom)' : '—',
                      highlight: (p) => p.id === 'iphone-17-pro',
                    },
                    {
                      label: 'Frontkamera',
                      getValue: (p) =>
                        p.id === 'iphone-17-air' ? '24 MP TrueDepth' : '12 MP TrueDepth',
                      highlight: (p) => p.id === 'iphone-17-air',
                    },
                    {
                      label: 'ProRes-video',
                      getValue: (p) => p.id === 'iphone-17-pro',
                      highlight: (p) => p.id === 'iphone-17-pro',
                    },
                  ]}
                />
                </div>
              )}

              {/* Chip Section */}
              {activeCategory === 'chip' && (
                <div className="animate-fade-in">
                <ComparisonSection
                  products={products}
                  title="Chip"
                  rows={[
                    {
                      label: 'Processor',
                      getValue: (p) =>
                        p.id === 'iphone-17' ? 'A19-chip' : 'A19 Pro-chip',
                      highlight: (p) => p.id !== 'iphone-17',
                      imageKey: 'chip',
                    },
                    {
                      label: 'CPU-kärnor',
                      getValue: () => '6-core',
                    },
                    {
                      label: 'GPU-kärnor',
                      getValue: (p) =>
                        p.id === 'iphone-17-pro' ? '6-core' : '5-core',
                      highlight: (p) => p.id === 'iphone-17-pro',
                    },
                    {
                      label: 'Neural Engine',
                      getValue: () => '16-core',
                    },
                    {
                      label: 'Apple Intelligence',
                      getValue: () => true,
                    },
                    {
                      label: 'USB 3-hastighet',
                      getValue: (p) => p.id === 'iphone-17-pro',
                      highlight: (p) => p.id === 'iphone-17-pro',
                    },
                  ]}
                />
                </div>
              )}

              {/* Battery Section */}
              {activeCategory === 'battery' && (
                <div className="animate-fade-in">
                <ComparisonSection
                  products={products}
                  title="Batteri"
                  rows={[
                    {
                      label: 'Videouppspelning',
                      getValue: (p) =>
                        p.id === 'iphone-17-pro'
                          ? 'Upp till 33 tim'
                          : p.id === 'iphone-17-air'
                          ? 'Upp till 22 tim'
                          : 'Upp till 26 tim',
                      highlight: (p) => p.id === 'iphone-17-pro',
                    },
                    {
                      label: 'Streamad video',
                      getValue: (p) =>
                        p.id === 'iphone-17-pro'
                          ? 'Upp till 29 tim'
                          : p.id === 'iphone-17-air'
                          ? 'Upp till 18 tim'
                          : 'Upp till 22 tim',
                      highlight: (p) => p.id === 'iphone-17-pro',
                    },
                    {
                      label: 'MagSafe',
                      getValue: () => true,
                    },
                    {
                      label: 'Qi2 trådlös',
                      getValue: () => true,
                    },
                    {
                      label: 'Snabbladdning',
                      getValue: () => '50% på 30 min',
                    },
                  ]}
                />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-apple-gray-50 py-12 md:py-16">
        <div className="max-w-[980px] mx-auto px-4 md:px-6 text-center">
          <h3 className="text-subheadline md:text-headline font-semibold text-apple-gray-800 mb-4">
            Hittat rätt iPhone?
          </h3>
          <p className="text-body text-apple-gray-500 mb-6 max-w-lg mx-auto">
            Utforska finansieringsalternativ, byt in din gamla enhet och få hjälp med att komma igång.
          </p>
          <a href="#" className="btn-primary inline-flex">
            Köp iPhone
          </a>
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
    <div className="comparison-section animate-stagger">
      <h3 className="sr-only">{title}</h3>

      {rows.map((row, index) => (
        <div
          key={index}
          className={`
            grid items-center py-4 md:py-6 border-b border-apple-gray-100 last:border-b-0
            transition-colors hover:bg-apple-gray-50/50
            ${index === 0 ? 'pt-0' : ''}
          `}
          style={{ gridTemplateColumns: `140px repeat(${products.length}, 1fr)` }}
        >
          {/* Row Label */}
          <div className="text-caption md:text-body text-apple-gray-500 pr-4">
            {row.label}
          </div>

          {/* Product Values */}
          {products.map((product) => {
            const value = row.getValue(product);
            const isHighlighted = row.highlight?.(product) ?? false;

            return (
              <div key={product.id} className="text-center px-2 md:px-4">
                {/* Optional Image */}
                {row.imageKey && index === 0 && (
                  <div className="h-[80px] md:h-[120px] flex items-center justify-center mb-2 md:mb-3">
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
                      className={`w-5 h-5 md:w-6 md:h-6 mx-auto animate-scale-in ${
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
                    <span className="text-apple-gray-300 text-caption md:text-body animate-fade-in">—</span>
                  )
                ) : (
                  <span
                    className={`text-caption md:text-body transition-colors ${
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
