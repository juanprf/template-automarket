const FAVORITES_KEY = 'vehicleFavorites';
import { Vehicle } from '../types/index';

const vehicleService = {
  async getVehicles(): Promise<Vehicle[]> {
    const response = await fetch('/api/cars');
    if (!response.ok) throw new Error('Failed to fetch vehicles');
    return response.json();
  },

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
    if (!favorites.some((fav: Vehicle) => fav.id === String(vehicle.id))) {
      favorites.push(vehicle);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  },

  removeFavorite(id: number): void {
    let favorites = vehicleService.getFavorites();
    favorites = favorites.filter((vehicle: Vehicle) => vehicle.id !== String(id));
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  },
};

export default vehicleService;
