import React from 'react';

export function AboutHero() {
  return (
    <section className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560958089-b8a1929cea89"
          alt="Dealership"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About AutoMarket</h1>
          <p className="text-xl opacity-90">Your trusted partner in finding the perfect vehicle since 1995</p>
        </div>
      </div>
    </section>
  );
}