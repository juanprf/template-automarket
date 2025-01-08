import React from 'react';
import { Search } from 'lucide-react';
import { SearchFilters } from '../../types';
import { YearRangeSlider } from '../shared/YearRangeSlider';
import { cn } from '../../lib/utils';

interface InventoryFiltersProps {
  onFilterChange: (filters: SearchFilters) => void;
  totalResults: number;
  className?: string;
}

export function InventoryFilters({ onFilterChange, totalResults, className }: InventoryFiltersProps) {
  const [filters, setFilters] = React.useState<SearchFilters>({});
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    handleFilterChange('query', searchQuery);
  };

  return (
    <aside className={cn("w-full lg:w-64 space-y-6", className)}>
      <div className="bg-white rounded-lg shadow-md p-4">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search vehicles..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
        <h3 className="font-semibold text-gray-900">Filters</h3>
        <p className="text-sm text-gray-600">{totalResults} vehicles found</p>

        <div className="space-y-6">
          {/* Price Range */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Price Range</label>
            <select
              onChange={(e) => {
                const [min, max] = e.target.value.split('-').map(Number);
                handleFilterChange('minPrice', min);
                handleFilterChange('maxPrice', max);
              }}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Any Price</option>
              <option value="0-30000">Under $30,000</option>
              <option value="30000-50000">$30,000 - $50,000</option>
              <option value="50000-100000">$50,000 - $100,000</option>
              <option value="100000-">$100,000+</option>
            </select>
          </div>

          {/* Year Range */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Year</label>
            <YearRangeSlider
              onYearChange={(min, max) => {
                handleFilterChange('minYear', min);
                handleFilterChange('maxYear', max);
              }}
            />
          </div>

          {/* Body Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Body Type</label>
            <select
              onChange={(e) => handleFilterChange('bodyType', e.target.value)}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">All Types</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="coupe">Coupe</option>
              <option value="truck">Truck</option>
              <option value="van">Van</option>
            </select>
          </div>

          {/* Transmission */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Transmission</label>
            <select
              onChange={(e) => handleFilterChange('transmission', e.target.value)}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>

          {/* Fuel Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Fuel Type</label>
            <select
              onChange={(e) => handleFilterChange('fuelType', e.target.value)}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="gasoline">Gasoline</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}