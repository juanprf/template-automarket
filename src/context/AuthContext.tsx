import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  isAdmin: false,
  user: null,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3000/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setIsAuthenticated(true);
        setUser(response.data);
        setIsAdmin(response.data.isAdmin);
      })
      .catch(() => {
        logout();
      });
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = await axios.post('http://localhost:3000/auth/login', { email, password });
    const { access_token } = response.data;
    localStorage.setItem('token', access_token);

    const profile = await axios.get('http://localhost:3000/auth/profile', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    setIsAuthenticated(true);
    setUser(profile.data);
    setIsAdmin(profile.data.isAdmin);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
    setIsAdmin(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}