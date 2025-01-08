import React from 'react';
import { Heart, Trash2 } from 'lucide-react';
import { Vehicle } from '../../types';
import { formatPrice, formatMileage } from '../../lib/utils';

interface VehicleCardProps {
  vehicle: Vehicle;
  onFavorite?: (id: number) => void;  // Cambiar a number
  onRemove?: () => void;
}

export function VehicleCard({ vehicle, onFavorite = () => {}, onRemove }: VehicleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-[16/9]">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-cover"
        />
        
        {/* Botón para agregar a favoritos */}
        <button
          onClick={() => onFavorite(Number(vehicle.id))} 
          className="absolute top-2 right-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <Heart className="h-5 w-5" />
        </button>

        {/* Botón para eliminar de favoritos */}
        {onRemove && (
          <button
            onClick={onRemove}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-100"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        
        <div className="mt-2 space-y-2">
          <p className="text-2xl font-bold text-blue-600">
            {formatPrice(vehicle.price)}
          </p>
          
          <div className="flex justify-between text-sm text-gray-600">
            <span>{formatMileage(vehicle.mileage)}</span>
            <span>{vehicle.transmission}</span>
            <span>{vehicle.fuelType}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <a
            href={`/inventory/${vehicle.id}`}
            className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
