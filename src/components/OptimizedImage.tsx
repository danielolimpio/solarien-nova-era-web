
import React, { useState, useCallback } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  srcSet?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  width,
  height,
  sizes,
  srcSet
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  // Otimização: usar aspect-ratio para evitar layout shift
  const aspectRatio = width && height ? `${width}/${height}` : undefined;

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded"
          style={{ aspectRatio }}
        />
      )}
      
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : loading}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          width={width}
          height={height}
          sizes={sizes}
          srcSet={srcSet}
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : (
        <div 
          className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400"
          style={{ aspectRatio }}
        >
          <span className="text-sm">Imagem não disponível</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
