import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

export function MissionVision() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">To provide exceptional service and quality vehicles to our customers, making their car buying experience seamless and enjoyable.</p>
          </div>
          
          <div className="text-center p-6">
            <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600">To be the most trusted and preferred automotive dealership, setting industry standards for customer satisfaction and service excellence.</p>
          </div>
          
          <div className="text-center p-6">
            <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <p className="text-gray-600">Integrity, transparency, and commitment to customer satisfaction guide everything we do.</p>
          </div>
        </div>
      </div>
    </section>
  );
}