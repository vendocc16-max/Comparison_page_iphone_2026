import { Product } from '../types/product';
import ResponsiveImage from './ResponsiveImage';

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export default function ProductCard({
  product,
  isSelected,
  onToggle,
  disabled = false,
}: ProductCardProps) {
  return (
    <article
      className={`
        relative bg-white rounded-apple-lg overflow-hidden
        transition-all duration-apple ease-apple
        ${disabled && !isSelected ? 'opacity-50' : ''}
        ${isSelected ? 'ring-2 ring-apple-blue shadow-apple-lg' : 'shadow-apple hover:shadow-apple-lg'}
      `}
    >
      {/* New Badge */}
      {product.isNew && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 text-small font-medium text-white bg-apple-red rounded-full">
            Ny
          </span>
        </div>
      )}

      {/* Featured Badge */}
      {product.isFeatured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-block px-3 py-1 text-small font-medium text-apple-blue bg-apple-blue/10 rounded-full">
            Populär
          </span>
        </div>
      )}

      {/* Product Image */}
      <div className="aspect-square p-6 bg-apple-gray-50">
        <ResponsiveImage
          images={product.images.frontBack}
          alt={`${product.name} front and back view`}
          className="w-full h-full"
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Color Options */}
        <div className="flex justify-center gap-2 mb-4">
          {product.colors.map((color) => (
            <button
              key={color.name}
              className={`
                w-5 h-5 rounded-full border-2 transition-transform duration-200
                hover:scale-110 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:ring-offset-2
                ${color.hex === '#f5f5f7' || color.hex === '#f0e4d3' || color.hex === '#e3e3df'
                  ? 'border-apple-gray-300'
                  : 'border-transparent'
                }
              `}
              style={{ backgroundColor: color.hex }}
              title={color.name}
              aria-label={`${color.name} color option`}
            />
          ))}
        </div>

        {/* Name & Tagline */}
        <div className="text-center mb-4">
          <h3 className="text-subheadline text-apple-gray-800 mb-1">
            {product.name}
          </h3>
          <p className="text-body text-apple-gray-500">
            {product.tagline}
          </p>
        </div>

        {/* Price */}
        <p className="text-center text-body-large font-medium text-apple-gray-800 mb-6">
          {product.price.formatted}
        </p>

        {/* Quick Specs Preview */}
        <div className="grid grid-cols-2 gap-3 mb-6 text-center">
          {product.categories.slice(0, 2).map((category) => (
            <div key={category.name} className="bg-apple-gray-50 rounded-apple-sm p-3">
              <p className="text-small text-apple-gray-500 mb-1">{category.name}</p>
              <p className="text-caption font-medium text-apple-gray-800">
                {typeof category.specs[0]?.value === 'boolean'
                  ? (category.specs[0].value ? 'Ja' : 'Nej')
                  : category.specs[0]?.value}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={onToggle}
          disabled={disabled && !isSelected}
          className={`
            w-full py-3 px-6 rounded-apple-sm font-medium
            transition-all duration-apple ease-apple
            focus:outline-none focus:ring-2 focus:ring-offset-2
            ${isSelected
              ? 'bg-apple-blue text-white hover:bg-apple-blue-hover focus:ring-apple-blue'
              : disabled
                ? 'bg-apple-gray-200 text-apple-gray-400 cursor-not-allowed'
                : 'bg-apple-gray-100 text-apple-gray-800 hover:bg-apple-gray-200 focus:ring-apple-gray-400'
            }
          `}
        >
          {isSelected ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Vald för jämförelse
            </span>
          ) : disabled ? (
            'Max 3 produkter valda'
          ) : (
            'Lägg till i jämförelse'
          )}
        </button>
      </div>

      {/* Learn More Link */}
      <div className="px-6 pb-6 pt-0">
        <a
          href="#"
          className="block text-center text-body text-apple-blue hover:underline"
        >
          Läs mer om {product.name} →
        </a>
      </div>
    </article>
  );
}
