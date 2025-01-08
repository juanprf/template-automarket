import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-blue-600" />
          <span>+1 (555) 123-4567</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-blue-600" />
          <span>contact@automarket.com</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <MapPin className="h-5 w-5 text-blue-600" />
          <span>123 Dealership Ave, City, State 12345</span>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}