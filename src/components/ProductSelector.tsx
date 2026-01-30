import { Product } from '../types/product';
import ProductCard from './ProductCard';

interface ProductSelectorProps {
  products: Product[];
  selectedIds: string[];
  onToggle: (productId: string) => void;
  maxSelection?: number;
}

export default function ProductSelector({
  products,
  selectedIds,
  onToggle,
  maxSelection = 3,
}: ProductSelectorProps) {
  const isMaxSelected = selectedIds.length >= maxSelection;

  return (
    <section className="section bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-headline text-gray-800 mb-4 text-balance">
            Jämför iPhone-modeller
          </h2>
          <p className="text-body-large text-gray-500 max-w-2xl mx-auto">
            Välj upp till {maxSelection} modeller att jämföra
          </p>

          {/* Selection Counter */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <span className="text-body text-gray-600">
              {selectedIds.length} av {maxSelection} valda
            </span>
            <div className="flex gap-1">
              {Array.from({ length: maxSelection }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    i < selectedIds.length ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product) => {
            const isSelected = selectedIds.includes(product.id);

            return (
              <ProductCard
                key={product.id}
                product={product}
                isSelected={isSelected}
                onToggle={() => onToggle(product.id)}
                disabled={isMaxSelected && !isSelected}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
