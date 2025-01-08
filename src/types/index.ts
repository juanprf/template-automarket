export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  bodyType: string;
  color: string;
  images: string[];
  description: string;
  features: string[];
  status: 'available' | 'sold' | 'reserved';
}

export interface SearchFilters {
  query?: string;
  make?: string;
  model?: string;
  minYear?: number;
  maxYear?: number;
  minPrice?: number;
  maxPrice?: number;
  transmission?: string;
  fuelType?: string;
  bodyType?: string;
  maxMileage?: number;
}