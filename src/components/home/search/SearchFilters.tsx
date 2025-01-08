import React from 'react';
import { YearRangeSlider } from './YearRangeSlider';
import { SearchFilters as SearchFiltersType } from '../../../types';

interface SearchFiltersProps {
  onFilterChange: (filters: SearchFiltersType) => void;
}

export function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [filters, setFilters] = React.useState<SearchFiltersType>({});

  const handleFilterChange = (key: keyof SearchFiltersType, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Price Range */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Price Range</label>
        <select
          onChange={(e) => {
            const [min, max] = e.target.value.split('-').map(Number);
            handleFilterChange('minPrice', min);
            handleFilterChange('maxPrice', max);
          }}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12"
        >
          <option value="">Any Price</option>
          <option value="0-30000">Under $30,000</option>
          <option value="30000-50000">$30,000 - $50,000</option>
          <option value="50000-100000">$50,000 - $100,000</option>
          <option value="100000-">$100,000+</option>
        </select>
      </div>

      {/* Year Range Slider */}
      <div className="space-y-2 md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Year</label>
        <YearRangeSlider
          onYearChange={(min, max) => {
            handleFilterChange('minYear', min);
            handleFilterChange('maxYear', max);
          }}
        />
      </div>

    </div>
  );
}