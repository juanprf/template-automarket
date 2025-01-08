import React, { useState, useEffect } from 'react';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { SearchSection } from '../components/home/SearchSection';
import { VehicleCard } from '../components/vehicles/VehicleCard';
import { Vehicle, SearchFilters } from '../types';
import vehicleService from '../services/vehicleService';

export function HomePage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [favorites, setFavorites] = useState<Vehicle[]>([]);

  useEffect(() => {
    async function fetchVehicles() {
      try {
        const data = await vehicleService.getVehicles();
        setVehicles(data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    }

    fetchVehicles();
    const savedFavorites = vehicleService.getFavorites();
    setFavorites(savedFavorites);
  }, []);

  const handleSearch = (filters: SearchFilters) => {
    console.log('Search filters:', filters);
  };

  const handleFavorite = (id: string) => {
    const vehicle = vehicles.find((v) => String(v.id) === String(id));  // Conversión a string
    if (!vehicle) return;

    const isFavorited = favorites.some((fav) => String(fav.id) === String(id));  // Conversión a string

    if (isFavorited) {
      vehicleService.removeFavorite(id);
      setFavorites(favorites.filter((fav) => String(fav.id) !== String(id)));  // Conversión a string
    } else {
      vehicleService.addFavorite(vehicle);
      setFavorites([...favorites, vehicle]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative pb-32">
        <HeroCarousel vehicles={vehicles.slice(0, 4)} />
        <div className="absolute left-0 right-0 -bottom-16 z-10">
          <div className="container mx-auto px-4"></div>
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
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onFavorite={() => handleFavorite(vehicle.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
