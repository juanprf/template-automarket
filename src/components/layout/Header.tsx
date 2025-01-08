import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Heart, ShoppingCart, User, Menu, LogOut, LogIn, UserPlus } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isAuthenticated, logout } = React.useContext(AuthContext);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">AutoMarket</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/inventory" className="text-gray-300 hover:text-blue-400 transition-colors">Inventory</Link>
            <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link>
            <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
           <Link to="/favorites" className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800">
              <Heart className="h-6 w-6" />
            </Link>
            <Link to="/saved" className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800">
              <User className="h-6 w-6" />
            </Link>
                <button onClick={logout} className="text-gray-600 hover:text-red-600 flex items-center">
                  <LogOut className="h-6 w-6 mr-1" /> Logout
                </button>
              </>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
              aria-label="Login to your account"
            >
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
              aria-label="Create a new account"
            >
              <UserPlus className="h-5 w-5" />
              <span>Register</span>
            </Link>
          </div>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/inventory" className="text-gray-600 hover:text-blue-600">Inventory</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
              <div className="flex space-x-4 pt-4">
                {isAuthenticated ? (
                  <>
           <Link to="/favorites" className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800">
              <Heart className="h-6 w-6" />
            </Link>
            <Link to="/saved" className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800">
              <User className="h-6 w-6" />
            </Link>
                    <button onClick={logout} className="text-gray-600 hover:text-red-600 flex items-center">
                      <LogOut className="h-6 w-6 mr-1" /> Logout
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col space-y-4">
                    <Link to="/login" className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200">
                      <LogIn className="h-5 w-5" />
                      <span>Login</span>
                    </Link>
                    <Link to="/register" className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200">
                      <UserPlus className="h-5 w-5" />
                      <span>Register</span>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
