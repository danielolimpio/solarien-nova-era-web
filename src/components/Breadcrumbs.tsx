
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  path: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const routeNames: { [key: string]: string } = {
    'faq': 'Perguntas Frequentes',
    'contact': 'Contato',
    'terms': 'Termos de Serviço',
    'privacy': 'Política de Privacidade',
    'cookies': 'Política de Cookies',
    'como-funciona': 'Como Funciona',
    'transparency': 'Transparência',
    'feedback': 'Feedback',
    'depoimentos': 'Depoimentos',
    'blog': 'Blog'
  };

  if (pathnames.length === 0) {
    return null;
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', path: '/' },
    ...pathnames.map((pathname, index) => ({
      name: routeNames[pathname] || pathname,
      path: `/${pathnames.slice(0, index + 1).join('/')}`
    }))
  ];

  return (
    <nav 
      className="bg-slate-800/50 backdrop-blur-sm py-4 px-4 mt-20" 
      aria-label="Breadcrumb"
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      <div className="responsive-container">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li 
              key={breadcrumb.path}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index === 0 && (
                <Home className="w-4 h-4 mr-1 text-solarien-primary" aria-hidden="true" />
              )}
              
              {index < breadcrumbs.length - 1 ? (
                <>
                  <Link
                    to={breadcrumb.path}
                    className="text-gray-300 hover:text-solarien-primary transition-colors duration-200"
                    itemProp="item"
                  >
                    <span itemProp="name">{breadcrumb.name}</span>
                  </Link>
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-500" aria-hidden="true" />
                </>
              ) : (
                <span 
                  className="text-solarien-primary font-medium"
                  itemProp="name"
                  aria-current="page"
                >
                  {breadcrumb.name}
                </span>
              )}
              
              <meta itemProp="position" content={`${index + 1}`} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default React.memo(Breadcrumbs);
