import React, { useState, useEffect } from 'react';
import { VehicleCard } from '../components/vehicles/VehicleCard';
import vehicleService from '../services/vehicleService';
import { Vehicle } from '../types/index';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Vehicle[]>([]);

  useEffect(() => {
    const savedFavorites: Vehicle[] = vehicleService.getFavorites();
    setFavorites(savedFavorites);
  }, []);

  const handleRemoveFavorite = (id: string) => {
    vehicleService.removeFavorite(id);
    setFavorites(vehicleService.getFavorites());
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Tus Favoritos</h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favorites.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onRemove={() => handleRemoveFavorite((vehicle.id))}
            />
          ))}
        </div>
      ) : (
        <p className="text-lg">No tienes vehículos favoritos aún.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
