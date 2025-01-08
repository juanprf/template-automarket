import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Vehicle } from '../../types';

interface HeroCarouselProps {
  vehicles: Vehicle[];
}

export function HeroCarousel({ vehicles }: HeroCarouselProps) {
  return (
    <div className="relative h-[600px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {vehicles.map((vehicle) => (
          <SwiperSlide key={vehicle.id}>
            <div className="relative h-full">
              <img
                src={vehicle.images[0]}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h2>
                  <p className="text-xl text-white mb-4">${vehicle.price.toLocaleString()}</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}