/**
 * SEO Utility Functions
 * Helper functions for SEO optimization across the application
 */

/**
 * Generates a canonical URL for a given path
 * @param path - The path to generate canonical URL for
 * @returns The full canonical URL
 */
export const getCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://solarien.com.br';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Truncates text to a specified length while preserving word boundaries
 * Useful for meta descriptions
 * @param text - The text to truncate
 * @param maxLength - Maximum length (default: 160 for meta descriptions)
 * @returns Truncated text
 */
export const truncateText = (text: string, maxLength: number = 160): string => {
  if (text.length <= maxLength) return text;
  
  const truncated = text.substr(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 
    ? `${truncated.substr(0, lastSpace)}...`
    : `${truncated}...`;
};

/**
 * Generates structured data for organization
 * @returns JSON-LD structured data for organization
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Solarien Energy",
  "url": "https://solarien.com.br",
  "logo": "https://solarien.com.br/lovable-uploads/7035cd87-6220-43bb-b629-649ce81e59d8.png",
  "description": "Especialistas em gestão de contratos energéticos, energia solar por assinatura e mercado livre de energia",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Julia Freire, 1200 - Expedicionários",
    "addressLocality": "João Pessoa",
    "addressRegion": "PB",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-99736-1698",
    "contactType": "customer service",
    "email": "contato@solarien.com.br",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://www.facebook.com/solarien",
    "https://www.instagram.com/solarien",
    "https://www.linkedin.com/company/solarien"
  ]
});

/**
 * Generates structured data for breadcrumbs
 * @param items - Array of breadcrumb items with name and url
 * @returns JSON-LD structured data for breadcrumbs
 */
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

/**
 * Generates Open Graph image URL
 * @param imagePath - Relative or absolute image path
 * @returns Full URL for Open Graph image
 */
export const getOgImageUrl = (imagePath?: string): string => {
  const defaultImage = 'https://solarien.com.br/lovable-uploads/7035cd87-6220-43bb-b629-649ce81e59d8.png';
  
  if (!imagePath) return defaultImage;
  
  if (imagePath.startsWith('http')) return imagePath;
  
  return `https://solarien.com.br${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
};

/**
 * Extracts keywords from text content
 * @param text - Text to extract keywords from
 * @param maxKeywords - Maximum number of keywords to return
 * @returns Array of keywords
 */
export const extractKeywords = (text: string, maxKeywords: number = 10): string[] => {
  // Remove common stop words in Portuguese
  const stopWords = ['a', 'o', 'e', 'de', 'da', 'do', 'em', 'um', 'uma', 'os', 'as', 
                     'para', 'com', 'por', 'no', 'na', 'ao', 'à', 'dos', 'das'];
  
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.includes(word));
  
  // Count word frequency
  const frequency: Record<string, number> = {};
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  
  // Sort by frequency and return top keywords
  return Object.entries(frequency)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
};

/**
 * Validates if a URL is internal to the site
 * @param url - URL to validate
 * @returns Boolean indicating if URL is internal
 */
export const isInternalUrl = (url: string): boolean => {
  if (!url) return false;
  
  // Check if it's a relative URL
  if (url.startsWith('/')) return true;
  
  // Check if it's an anchor link
  if (url.startsWith('#')) return true;
  
  // Check if it contains the site domain
  return url.includes('solarien.com.br');
};
