import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  tags: string[];
}

interface RelatedPostsProps {
  currentPostId: string;
  currentCategory: string;
  allPosts: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPostId, currentCategory, allPosts }) => {
  // Get related posts: same category first, then other posts
  const getRelatedPosts = (): BlogPost[] => {
    // Exclude current post
    const otherPosts = allPosts.filter(post => post.id !== currentPostId);
    
    // Same category posts
    const sameCategoryPosts = otherPosts.filter(post => post.category === currentCategory);
    
    // Different category posts
    const differentCategoryPosts = otherPosts.filter(post => post.category !== currentCategory);
    
    // Prioritize same category, fill with others if needed
    const relatedPosts = [...sameCategoryPosts, ...differentCategoryPosts].slice(0, 3);
    
    return relatedPosts;
  };

  const relatedPosts = getRelatedPosts();

  if (relatedPosts.length === 0) return null;

  const truncateText = (text: string, maxLength: number = 80): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const defaultImage = '/lovable-uploads/7035cd87-6220-43bb-b629-649ce81e59d8.png';

  return (
    <section className="mt-16 pt-12 border-t border-slate-700/50">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-1 h-8 bg-gradient-to-b from-solarien-primary to-solarien-secondary rounded-full"></span>
        Leia também
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-solarien-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-solarien-primary/10"
          >
            {/* Thumbnail */}
            <div className="aspect-video relative overflow-hidden">
              <img
                src={post.image || defaultImage}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = defaultImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              
              {/* Category Badge */}
              <span className="absolute top-3 left-3 bg-solarien-primary/90 text-black text-xs font-semibold px-2 py-1 rounded">
                {post.category}
              </span>
            </div>
            
            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-solarien-primary transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                {truncateText(post.excerpt)}
              </p>
              
              <div className="flex items-center text-solarien-primary text-sm font-medium group-hover:gap-2 transition-all duration-300">
                <span>Ler artigo</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
