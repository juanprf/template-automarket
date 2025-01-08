import React from 'react';
import { SearchBar } from './search/SearchBar';
import { SearchFilters } from './search/SearchFilters';
import { SearchFilters as SearchFiltersType } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchSectionProps {
  onSearch: (filters: SearchFiltersType) => void;
}

export function SearchSection({ onSearch }: SearchSectionProps) {
  const [isFiltersVisible, setIsFiltersVisible] = React.useState(false);

  return (
    <div className="relative max-w-4xl mx-auto px-4 -mt-24">
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Find Your Perfect Vehicle
        </h2>
        
        <SearchBar 
          onToggleFilters={() => setIsFiltersVisible(!isFiltersVisible)}
          onSearch={(query) => onSearch({ query })}
        />
        
        <AnimatePresence>
          {isFiltersVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 border-t border-gray-200 pt-6"
            >
              <SearchFilters onFilterChange={onSearch} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {['SUV', 'Sedan', 'Truck', 'Luxury', 'Electric'].map((category) => (
            <button
              key={category}
              onClick={() => onSearch({ bodyType: category.toLowerCase() })}
              className="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}