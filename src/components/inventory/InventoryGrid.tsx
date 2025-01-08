import React from 'react';
import { VehicleCard } from '../vehicles/VehicleCard';
import { Vehicle } from '../../types';

interface InventoryGridProps {
  vehicles: Vehicle[];
  onFavorite: (id: string) => void;
}

export function InventoryGrid({ vehicles, onFavorite }: InventoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onFavorite={onFavorite}
        />
      ))}
    </div>
  );
}