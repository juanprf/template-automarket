import React, { useState, useEffect } from 'react';
import { InventoryFilters } from '../components/inventory/InventoryFilters';
import { InventoryGrid } from '../components/inventory/InventoryGrid';
import { InventorySort } from '../components/inventory/InventorySort';
import { Vehicle, SearchFilters } from '../types';
import { mockVehicles } from '../data/mockVehicles';

export function InventoryPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(mockVehicles);
  const [filters, setFilters] = useState<SearchFilters>({});

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleSort = (sortValue: string) => {
    const [field, direction] = sortValue.split('-');
    const sorted = [...filteredVehicles].sort((a, b) => {
      if (direction === 'asc') {
        return (a[field as keyof Vehicle] as any) - (b[field as keyof Vehicle] as any);
      }
      return (b[field as keyof Vehicle] as any) - (a[field as keyof Vehicle] as any);
    });
    setFilteredVehicles(sorted);
  };

  const handleFavorite = (id: string) => {
    // Implement favorite functionality
    console.log('Favorite:', id);
  };

  const applyFilters = (currentFilters: SearchFilters) => {
    let filtered = [...vehicles];

    if (currentFilters.query) {
      const query = currentFilters.query.toLowerCase();
      filtered = filtered.filter(
        vehicle =>
          vehicle.make.toLowerCase().includes(query) ||
          vehicle.model.toLowerCase().includes(query) ||
          vehicle.year.toString().includes(query)
      );
    }

    if (currentFilters.minPrice) {
      filtered = filtered.filter(vehicle => vehicle.price >= currentFilters.minPrice!);
    }

    if (currentFilters.maxPrice) {
      filtered = filtered.filter(vehicle => vehicle.price <= currentFilters.maxPrice!);
    }

    if (currentFilters.minYear) {
      filtered = filtered.filter(vehicle => vehicle.year >= currentFilters.minYear!);
    }

    if (currentFilters.maxYear) {
      filtered = filtered.filter(vehicle => vehicle.year <= currentFilters.maxYear!);
    }

    if (currentFilters.bodyType) {
      filtered = filtered.filter(vehicle => 
        vehicle.bodyType.toLowerCase() === currentFilters.bodyType!.toLowerCase()
      );
    }

    if (currentFilters.transmission) {
      filtered = filtered.filter(vehicle => 
        vehicle.transmission.toLowerCase() === currentFilters.transmission!.toLowerCase()
      );
    }

    if (currentFilters.fuelType) {
      filtered = filtered.filter(vehicle => 
        vehicle.fuelType.toLowerCase() === currentFilters.fuelType!.toLowerCase()
      );
    }

    setFilteredVehicles(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <InventoryFilters
            onFilterChange={handleFilterChange}
            totalResults={filteredVehicles.length}
            className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]"
          />
          
          <main className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                Available Vehicles
              </h1>
              <InventorySort onSort={handleSort} />
            </div>

            <InventoryGrid
              vehicles={filteredVehicles}
              onFavorite={handleFavorite}
            />
          </main>
        </div>
      </div>
    </div>
  );
}