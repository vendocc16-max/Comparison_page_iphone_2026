import { Product } from '../types/product';

interface ProductSelectorProps {
  products: Product[];
  selectedIds: string[];
  onToggle: (productId: string) => void;
}

export default function ProductSelector({ products, selectedIds, onToggle }: ProductSelectorProps) {
  return (
    <section className="section bg-white">
      <div className="container-apple">
        <div className="text-center mb-12">
          <h2 className="text-headline text-apple-gray-800 mb-4 text-balance">
            Jämför iPhone-modeller
          </h2>
          <p className="text-body-large text-apple-gray-500 max-w-2xl mx-auto">
            Välj upp till 3 modeller att jämföra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {products.map((product) => {
            const isSelected = selectedIds.includes(product.id);

            return (
              <button
                key={product.id}
                onClick={() => onToggle(product.id)}
                className={`
                  group relative p-6 rounded-apple-lg border-2 transition-all duration-apple ease-apple
                  ${isSelected
                    ? 'border-apple-blue bg-apple-blue/5'
                    : 'border-apple-gray-200 hover:border-apple-gray-300'
                  }
                `}
              >
                {/* Checkmark indicator */}
                <div
                  className={`
                    absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center
                    transition-all duration-apple ease-apple
                    ${isSelected ? 'bg-apple-blue' : 'bg-apple-gray-200 group-hover:bg-apple-gray-300'}
                  `}
                >
                  {isSelected && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>

                {/* Product Image */}
                <div className="aspect-square mb-4 flex items-center justify-center">
                  <img
                    src={product.images.frontBack.medium}
                    srcSet={`${product.images.frontBack.medium} 1x, ${product.images.frontBack.medium2x} 2x`}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <div className="text-center">
                  {product.isNew && (
                    <span className="inline-block px-2 py-1 text-small font-medium text-apple-red bg-apple-red/10 rounded-full mb-2">
                      Ny
                    </span>
                  )}
                  <h3 className="text-subheadline text-apple-gray-800 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-body text-apple-gray-500 mb-2">
                    {product.tagline}
                  </p>
                  <p className="text-body font-medium text-apple-gray-800">
                    {product.price.formatted}
                  </p>
                </div>

                {/* Color options */}
                <div className="flex justify-center gap-2 mt-4">
                  {product.colors.slice(0, 4).map((color) => (
                    <span
                      key={color.name}
                      className="w-3 h-3 rounded-full border border-apple-gray-300"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                  {product.colors.length > 4 && (
                    <span className="text-small text-apple-gray-400">
                      +{product.colors.length - 4}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
