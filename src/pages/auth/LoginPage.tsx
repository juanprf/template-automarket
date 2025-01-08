// LoginPage.tsx (Modificado para usar el admin hardcodeado)
import React from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface LoginFormData {
  email: string;
  password: string;
}

export function LoginPage() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    login(data.email, data.password);
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label>Email</label>
          <input {...register('email', { required: true })} type="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-6">
          <label>Password</label>
          <input {...register('password', { required: true })} type="password" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
}