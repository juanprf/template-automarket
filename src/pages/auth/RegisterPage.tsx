import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../../components/auth/RegisterForm';
import { AuthLayout } from '../../components/auth/AuthLayout';

export function RegisterPage() {
  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p className="text-gray-600 mt-2">Join our community today</p>
      </div>

      <RegisterForm />

      <p className="text-center mt-6 text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}