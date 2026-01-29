import { useState, useRef, useEffect } from 'react';
import { ProductImage } from '../types/product';
import ResponsiveImage from './ResponsiveImage';

interface ImageGalleryProps {
  images: {
    frontBack: ProductImage;
    chip: ProductImage;
    camera: ProductImage;
    side: ProductImage;
  };
  productName: string;
}

export default function ImageGallery({
  images,
  productName,
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const touchStartX = useRef(0);

  const imageArray = [
    { images: images.frontBack, label: 'Front & Back' },
    { images: images.side, label: 'Side' },
    { images: images.camera, label: 'Camera' },
    { images: images.chip, label: 'Chip' },
  ];

  const currentImage = imageArray[currentIndex];

  // Handle prev/next navigation
  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? imageArray.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === imageArray.length - 1 ? 0 : prev + 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) =>
        prev === 0 ? imageArray.length - 1 : prev - 1
      );
      if (e.key === 'ArrowRight') setCurrentIndex((prev) =>
        prev === imageArray.length - 1 ? 0 : prev + 1
      );
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, imageArray.length]);

  // Handle touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // Swipe threshold: 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  return (
    <div className="w-full">
      {/* Main Image Display */}
      <div
        className="
          relative aspect-square bg-apple-gray-50 rounded-apple
          overflow-hidden cursor-pointer
          transition-transform duration-300 hover:scale-105
        "
        onClick={() => setIsLightboxOpen(true)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsLightboxOpen(true);
          }
        }}
        aria-label={`${productName} ${currentImage.label}. Click to enlarge`}
      >
        <div className="p-6 h-full flex items-center justify-center">
          <ResponsiveImage
            images={currentImage.images}
            alt={`${productName} ${currentImage.label}`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Zoom Indicator */}
        <div className="absolute bottom-4 right-4 p-2 bg-black/50 text-white text-xs rounded">
          🔍
        </div>
      </div>

      {/* Image Indicators & Controls */}
      <div className="mt-4 space-y-4">
        {/* Dot Indicators */}
        <div className="flex justify-center gap-2">
          {imageArray.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-2 h-2 rounded-full transition-all
                ${
                  index === currentIndex
                    ? 'bg-apple-blue w-6'
                    : 'bg-apple-gray-300 hover:bg-apple-gray-400'
                }
              `}
              aria-label={`View ${imageArray[index].label}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>

        {/* Previous/Next Buttons */}
        <div className="flex justify-between items-center gap-2">
          <button
            onClick={goToPrevious}
            className="
              flex-1 py-2 px-3 text-sm font-medium
              bg-apple-gray-100 text-apple-gray-900
              rounded-apple hover:bg-apple-gray-200
              transition-colors duration-apple
              active:scale-95
            "
            aria-label="Previous image"
          >
            ← Föregående
          </button>

          <span className="text-xs text-apple-gray-500 whitespace-nowrap">
            {currentIndex + 1} / {imageArray.length}
          </span>

          <button
            onClick={goToNext}
            className="
              flex-1 py-2 px-3 text-sm font-medium
              bg-apple-gray-100 text-apple-gray-900
              rounded-apple hover:bg-apple-gray-200
              transition-colors duration-apple
              active:scale-95
            "
            aria-label="Next image"
          >
            Nästa →
          </button>
        </div>

        {/* Image Labels */}
        <div className="text-center">
          <h3 className="text-sm font-medium text-apple-gray-900">
            {currentImage.label}
          </h3>
          <p className="text-xs text-apple-gray-500">
            Svep för att navigera på mobil
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <Lightbox
          image={currentImage.images}
          label={currentImage.label}
          productName={productName}
          onClose={() => setIsLightboxOpen(false)}
          onPrevious={goToPrevious}
          onNext={goToNext}
          currentIndex={currentIndex}
          totalImages={imageArray.length}
        />
      )}
    </div>
  );
}

// Lightbox Component
interface LightboxProps {
  image: ProductImage;
  label: string;
  productName: string;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  totalImages: number;
}

function Lightbox({
  image,
  label,
  productName,
  onClose,
  onPrevious,
  onNext,
  currentIndex,
  totalImages,
}: LightboxProps) {
  const touchStartX = useRef(0);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Handle touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        onNext();
      } else {
        onPrevious();
      }
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center
        animate-fade-in
      "
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="
          absolute top-4 right-4 z-50 p-2
          text-white hover:text-apple-gray-200
          transition-colors
        "
        aria-label="Close lightbox"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Image */}
      <div
        className="flex-1 flex items-center justify-center w-full px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-w-2xl">
          <ResponsiveImage
            images={image}
            alt={`${productName} ${label}`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="w-full px-4 py-6 flex items-center justify-between gap-4">
        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="
            p-2 text-white hover:text-apple-gray-200
            transition-colors
          "
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Image Info */}
        <div className="text-center text-white">
          <h3 id="lightbox-title" className="font-medium">
            {label}
          </h3>
          <p className="text-sm text-apple-gray-300">
            {currentIndex + 1} / {totalImages}
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="
            p-2 text-white hover:text-apple-gray-200
            transition-colors
          "
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Keyboard Hint */}
      <p className="text-xs text-apple-gray-400 pb-4">
        Använd piltangenter för att navigera, ESC för att stänga
      </p>
    </div>
  );
}
