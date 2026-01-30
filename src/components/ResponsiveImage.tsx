import { useState } from 'react';
import { ProductImage } from '../types/product';

interface ResponsiveImageProps {
  images: ProductImage;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function ResponsiveImage({
  images,
  alt,
  className = '',
  priority = false,
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

    if (hasError) {
    return (
      <div
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-gray-400 text-small">Image unavailable</span>
      </div>
    );
  }

  return (
    <picture className={`block ${className}`}>
      {/* Large screens (desktop) */}
      <source
        media="(min-width: 1024px)"
        srcSet={`${images.large} 1x, ${images.large2x} 2x`}
      />
      {/* Medium screens (tablet) */}
      <source
        media="(min-width: 768px)"
        srcSet={`${images.medium} 1x, ${images.medium2x} 2x`}
      />
      {/* Small screens (mobile) - default */}
      <img
        src={images.small}
        srcSet={`${images.small} 1x, ${images.small2x} 2x`}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`
          w-full h-full object-contain
          transition-opacity duration-300
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </picture>
  );
}
