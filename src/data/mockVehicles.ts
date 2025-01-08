import { Vehicle } from '../types';

export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    make: 'BMW',
    model: 'M3',
    year: 2021,
    price: 65000,
    mileage: 15000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    bodyType: 'Sedan',
    color: 'Alpine White',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537'
    ],
    description: 'Pristine condition BMW M3 Competition',
    features: ['Navigation', 'Leather Seats', 'Sunroof', 'M Sport Package'],
    status: 'available'
  },
  {
    id: '2',
    make: 'Mercedes-Benz',
    model: 'G63 AMG',
    year: 2022,
    price: 185000,
    mileage: 8000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    bodyType: 'SUV',
    color: 'Obsidian Black',
    images: [
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366',
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366'
    ],
    description: 'Powerful G63 AMG with all available options',
    features: ['360 Camera', 'Massage Seats', 'Night Package', 'AMG Performance Exhaust'],
    status: 'available'
  },
  {
    id: '3',
    make: 'Porsche',
    model: '911 GT3',
    year: 2023,
    price: 205000,
    mileage: 1200,
    transmission: 'Manual',
    fuelType: 'Gasoline',
    bodyType: 'Coupe',
    color: 'Guards Red',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70'
    ],
    description: 'Track-ready GT3 with manual transmission',
    features: ['Carbon Ceramic Brakes', 'Sport Chrono', 'Bucket Seats', 'Front Lift'],
    status: 'available'
  },
  {
    id: '4',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2023,
    price: 125000,
    mileage: 5000,
    transmission: 'Automatic',
    fuelType: 'Electric',
    bodyType: 'Sedan',
    color: 'Midnight Silver',
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89'
    ],
    description: 'Fastest production sedan in the world',
    features: ['Autopilot', 'Ludicrous Mode', 'Glass Roof', 'Premium Sound'],
    status: 'available'
  },
  // Add more vehicles here...
];