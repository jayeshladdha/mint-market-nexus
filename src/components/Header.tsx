
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, User, Wallet } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            NFTMarket
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/explore" className="text-gray-300 hover:text-white transition-colors">Explore</Link>
            <Link to="/create" className="text-gray-300 hover:text-white transition-colors">Create</Link>
            <Link to="/artists" className="text-gray-300 hover:text-white transition-colors">Artists</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-800 rounded-full px-4 py-2 max-w-md flex-1 mx-8">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search NFTs, collections, artists..."
              className="bg-transparent text-white placeholder-gray-400 outline-none flex-1"
            />
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all">
              <Wallet className="w-4 h-4" />
              <span>Connect</span>
            </button>
            <button className="p-2 text-gray-300 hover:text-white transition-colors">
              <User className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/explore" className="text-gray-300 hover:text-white transition-colors">Explore</Link>
              <Link to="/create" className="text-gray-300 hover:text-white transition-colors">Create</Link>
              <Link to="/artists" className="text-gray-300 hover:text-white transition-colors">Artists</Link>
              <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 mt-4">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-white placeholder-gray-400 outline-none flex-1"
                />
              </div>
              <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full mt-4">
                <Wallet className="w-4 h-4" />
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
