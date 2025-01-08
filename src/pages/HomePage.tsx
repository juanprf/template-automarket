import React from 'react';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { SearchSection } from '../components/home/SearchSection';
import { VehicleCard } from '../components/vehicles/VehicleCard';
import { Vehicle, SearchFilters } from '../types';
import { mockVehicles } from '../data/mockVehicles';

export function HomePage() {
  const handleSearch = (filters: SearchFilters) => {
    console.log('Search filters:', filters);
  };

  const handleFavorite = (id: number) => {
    console.log('Favorite:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative pb-32">
        <HeroCarousel vehicles={mockVehicles.slice(0, 4)} />
        <div className="absolute left-0 right-0 -bottom-16 z-10">
          <div className="container mx-auto px-4">
            
          </div>
        </div>
      </section>
<SearchSection onSearch={handleSearch} />
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Vehicles</h2>
          <a href="/inventory" className="text-blue-600 hover:text-blue-700">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onFavorite={handleFavorite}
            />
          ))}
        </div>
      </section>
    </div>
  );
}