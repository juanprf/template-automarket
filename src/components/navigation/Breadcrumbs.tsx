import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getBreadcrumbItems } from './breadcrumbUtils';

export function Breadcrumbs() {
  const location = useLocation();
  const items = getBreadcrumbItems(location.pathname);

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li 
              key={item.path}
              className="flex items-center"
              {...(isLast && { 'aria-current': 'page' })}
            >
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
              )}
              
              {isLast ? (
                <span className="font-medium text-gray-900">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}