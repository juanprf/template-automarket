import React from 'react';
import { SearchFilters as SearchFiltersType } from '../../types';
import { cn } from '../../lib/utils';

interface SearchFiltersProps {
  onFilterChange: (filters: SearchFiltersType) => void;
  className?: string;
}

export function SearchFilters({ onFilterChange, className }: SearchFiltersProps) {
  const [filters, setFilters] = React.useState<SearchFiltersType>({});

  const handleChange = (key: keyof SearchFiltersType, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Price Range</label>
        <select
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) => {
            const [min, max] = e.target.value.split('-').map(Number);
            handleChange('minPrice', min);
            handleChange('maxPrice', max);
          }}
        >
          <option value="">Any Price</option>
          <option value="0-10000">Under $10,000</option>
          <option value="10000-20000">$10,000 - $20,000</option>
          <option value="20000-30000">$20,000 - $30,000</option>
          <option value="30000-50000">$30,000 - $50,000</option>
          <option value="50000-">$50,000+</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Year Range</label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Min Year"
            className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => handleChange('minYear', Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Max Year"
            className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => handleChange('maxYear', Number(e.target.value))}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Mileage</label>
        <select
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) => handleChange('maxMileage', Number(e.target.value))}
        >
          <option value="">Any Mileage</option>
          <option value="10000">Under 10,000 mi</option>
          <option value="30000">Under 30,000 mi</option>
          <option value="50000">Under 50,000 mi</option>
          <option value="100000">Under 100,000 mi</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Body Type</label>
        <select
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) => handleChange('bodyType', e.target.value)}
        >
          <option value="">Any Type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="truck">Truck</option>
          <option value="coupe">Coupe</option>
          <option value="van">Van</option>
        </select>
      </div>
    </div>
  );
}