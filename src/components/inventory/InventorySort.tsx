import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface InventorySortProps {
  onSort: (value: string) => void;
}

export function InventorySort({ onSort }: InventorySortProps) {
  return (
    <div className="flex items-center space-x-2">
      <ArrowUpDown className="h-5 w-5 text-gray-500" />
      <select
        onChange={(e) => onSort(e.target.value)}
        className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="year-desc">Year: Newest First</option>
        <option value="year-asc">Year: Oldest First</option>
        <option value="mileage-asc">Mileage: Low to High</option>
        <option value="mileage-desc">Mileage: High to Low</option>
      </select>
    </div>
  );
}