import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import { Service } from '../dich-vu/ServiceDetailClient';

const ProductGallery = ({ service }:{service: Service}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'ArrowLeft') {
          navigateImage(-1);
        } else if (e.key === 'ArrowRight') {
          navigateImage(1);
        } else if (e.key === 'Escape') {
          setLightboxOpen(false);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedImage]);
  
  const navigateImage = (direction: number) => {
    const newIndex = (selectedImage + direction + service.gallery.length) % service.gallery.length;
    setSelectedImage(newIndex);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
      {/* Main image container */}
      <div className="relative mb-4 group">
        <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 aspect-video md:aspect-[4/3]">
          <Image
            src={service.gallery[selectedImage].src}
            alt={service.gallery[selectedImage].alt}
            className="w-full h-full object-contain"
            width={800}
            height={600}
          />
          
          {/* Zoom button */}
          <button 
            onClick={() => setLightboxOpen(true)}
            className="absolute bottom-3 cursor-pointer right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Zoom image"
          >
            <ZoomIn className="w-5 h-5 text-gray-700" />
          </button>
          
          {/* Navigation arrows (only when there are multiple images) */}
          {service.gallery.length > 1 && (
            <>
              <button 
                onClick={() => navigateImage(-1)}
                className="absolute left-2 top-1/2 cursor-pointer -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button 
                onClick={() => navigateImage(1)}
                className="absolute right-2 top-1/2 cursor-pointer -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}
          
          {/* Image counter */}
          {service.gallery.length > 1 && (
            <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
              {selectedImage + 1} / {service.gallery.length}
            </div>
          )}
        </div>
      </div>
      
      {/* Thumbnails row */}
      {service.gallery.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
          {service.gallery.map((image, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 w-16 h-16 m-1 md:w-20 md:h-20 rounded-md overflow-hidden cursor-pointer transition-all duration-200 ${
                selectedImage === index 
                  ? 'ring-2 ring-primary ring-offset-2' 
                  : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt || `Product thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-4xl max-h-[80vh]">
            <Image
              src={service.gallery[selectedImage].src}
              alt={service.gallery[selectedImage].alt}
              width={1200}
              height={800}
              className="w-full h-full object-contain"
            />
            
            {service.gallery.length > 1 && (
              <>
                <button 
                  onClick={() => navigateImage(-1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => navigateImage(1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
          
          {/* Lightbox thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="flex gap-2 justify-center">
              {service.gallery.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    selectedImage === index ? 'bg-white' : 'bg-white/40'
                  }`}
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;