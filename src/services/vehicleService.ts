const FAVORITES_KEY = 'vehicleFavorites';
import { Vehicle } from '../types/index';

const vehicleService = {
  // Obtener vehículos desde la API
  async getVehicles(): Promise<Vehicle[]> {
    const response = await fetch('/api/cars');  // Llamada a la API
    if (!response.ok) throw new Error('Failed to fetch vehicles');
    return response.json();
  },

  // Obtener vehículo por ID
  async getVehicleById(id: number): Promise<Vehicle> {
    const response = await fetch(`/api/cars/${id}`);
    if (!response.ok) throw new Error('Vehicle not found');
    return response.json();
  },

  getFavorites(): Vehicle[] {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  },

  addFavorite(vehicle: Vehicle): void {
    const favorites = vehicleService.getFavorites();
    if (!favorites.some((fav: Vehicle) => fav.id === vehicle.id)) {
      favorites.push(vehicle);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  },

  removeFavorite(id: string): void {
    let favorites = vehicleService.getFavorites();
    favorites = favorites.filter((vehicle: Vehicle) => vehicle.id !== id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  },
};

export default vehicleService;
