import React from 'react';
import { useParams } from 'react-router-dom';
import { MessageCircle, Calendar } from 'lucide-react';
import { VehicleGallery } from '../components/vehicles/VehicleGallery';
import { Vehicle } from '../types';

// Mock data - replace with API call
const mockVehicle: Vehicle = {
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
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537',
    'https://images.unsplash.com/photo-1602777924012-f8664ffeed27'
  ],
  description: 'Pristine condition BMW M3',
  features: ['Navigation', 'Leather Seats', 'Sunroof'],
  status: 'available'
};

const WHATSAPP_NUMBER = '+523332449981'; // Replace with actual number

export function VehicleDetailPage() {
  const { id } = useParams();
  const vehicle = mockVehicle; // Replace with API call using id

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola, quiero más información del ${vehicle.year} ${vehicle.make} ${vehicle.model}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <VehicleGallery 
          images={vehicle.images} 
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} 
        />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h1>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-gray-600">Mileage</dt>
                  <dd className="font-semibold">{vehicle.mileage.toLocaleString()} mi</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Transmission</dt>
                  <dd className="font-semibold">{vehicle.transmission}</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Fuel Type</dt>
                  <dd className="font-semibold">{vehicle.fuelType}</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Body Type</dt>
                  <dd className="font-semibold">{vehicle.bodyType}</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Color</dt>
                  <dd className="font-semibold">{vehicle.color}</dd>
                </div>
              </dl>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="grid grid-cols-2 gap-2">
                {vehicle.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="text-3xl font-bold text-blue-600 mb-6">
                ${vehicle.price.toLocaleString()}
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Consultar por WhatsApp</span>
                </button>

                <button
                  onClick={() => {/* Implement scheduling logic */}}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Agendar Cita</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}