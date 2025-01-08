// AdminDashboard.tsx (Nueva Vista para gestión de autos)
import React from 'react';
import { Link } from 'react-router-dom';

export function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="space-y-6">
        <Link to="/admin/manage-cars" className="block p-4 border rounded-lg shadow-sm bg-white hover:bg-gray-100">
          Manage Cars
        </Link>
        <Link to="/admin/manage-users" className="block p-4 border rounded-lg shadow-sm bg-white hover:bg-gray-100">
          Manage Users
        </Link>
      </div>
    </div>
  );
}