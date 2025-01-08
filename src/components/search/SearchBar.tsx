import React from 'react';
import { Search } from 'lucide-react';
import { SearchInput } from './SearchInput';
import { SearchFilters } from './SearchFilters';
import { SearchFilters as SearchFiltersType } from '../../types';

interface SearchBarProps {
  onSearch: (filters: SearchFiltersType) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [isFiltersVisible, setIsFiltersVisible] = React.useState(false);
  const [filters, setFilters] = React.useState<SearchFiltersType>({});

  const handleSearch = (query: string) => {
    const newFilters = { ...filters, query };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  const handleFilterChange = (newFilters: SearchFiltersType) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onSearch(updatedFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
      <div className="flex items-center gap-4">
        <SearchInput onSearch={handleSearch} />
        <button
          onClick={() => setIsFiltersVisible(!isFiltersVisible)}
          className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Filters
        </button>
      </div>

      {isFiltersVisible && (
        <SearchFilters
          onFilterChange={handleFilterChange}
          className="pt-4 border-t border-gray-200"
        />
      )}
    </div>
  );
}