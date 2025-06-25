
import { useState } from 'react';
import { Crown, TrendingUp, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('sales');

  const artists = [
    {
      id: '1',
      name: 'ArtisticVision',
      avatar: 'photo-1649972904349-6e44c42644a7',
      banner: 'photo-1488590528505-98d2b5aba04b',
      totalSales: '147.5',
      works: 23,
      followers: 15200,
      verified: true,
      description: 'Digital artist specializing in cosmic and abstract art',
      joined: 'March 2023'
    },
    {
      id: '2',
      name: 'CyberCreator',
      avatar: 'photo-1488590528505-98d2b5aba04b',
      banner: 'photo-1461749280684-dccba630e2f6',
      totalSales: '92.3',
      works: 18,
      followers: 8900,
      verified: true,
      description: 'Creating futuristic digital experiences',
      joined: 'January 2023'
    },
    {
      id: '3',
      name: 'FutureArt',
      avatar: 'photo-1461749280684-dccba630e2f6',
      banner: 'photo-1486312338219-ce68d2c6f44d',
      totalSales: '78.9',
      works: 31,
      followers: 12400,
      verified: false,
      description: 'Exploring the boundaries of digital creativity',
      joined: 'February 2023'
    },
    {
      id: '4',
      name: 'ModernMint',
      avatar: 'photo-1486312338219-ce68d2c6f44d',
      banner: 'photo-1581091226825-a6a2a5aee158',
      totalSales: '65.2',
      works: 15,
      followers: 6700,
      verified: true,
      description: 'Contemporary digital art with a modern twist',
      joined: 'April 2023'
    },
    {
      id: '5',
      name: 'TechnoArt',
      avatar: 'photo-1581091226825-a6a2a5aee158',
      banner: 'photo-1531297484001-80022131f5a1',
      totalSales: '134.7',
      works: 42,
      followers: 18600,
      verified: true,
      description: 'Where technology meets artistic expression',
      joined: 'December 2022'
    },
    {
      id: '6',
      name: 'DigitalPioneer',
      avatar: 'photo-1531297484001-80022131f5a1',
      banner: 'photo-1487058792275-0ad4aaf24ca7',
      totalSales: '45.8',
      works: 27,
      followers: 5300,
      verified: false,
      description: 'Pioneering new forms of digital art',
      joined: 'May 2023'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Top <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Artists</span>
          </h1>
          <p className="text-gray-400 text-lg">Discover and follow the most talented creators in our marketplace</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search artists..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-700 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-600 focus:border-purple-500 outline-none"
                />
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-purple-500 outline-none"
              >
                <option value="sales">Total Sales</option>
                <option value="followers">Followers</option>
                <option value="works">Artworks</option>
                <option value="joined">Recently Joined</option>
              </select>
              
              <button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition-colors">
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <Link key={artist.id} to={`/artist/${artist.id}`} className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20">
                {/* Banner */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${artist.banner}?w=400&h=128&fit=crop`}
                    alt={`${artist.name} banner`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                  
                  {/* Rank Badge */}
                  {index < 3 && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2">
                      <Crown className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Profile Section */}
                <div className="p-6 -mt-8 relative">
                  {/* Avatar */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative">
                      <img
                        src={`https://images.unsplash.com/${artist.avatar}?w=80&h=80&fit=crop&crop=face`}
                        alt={artist.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-gray-800 group-hover:border-purple-500 transition-colors"
                      />
                      {artist.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-gray-800">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-right">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        #{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Artist Info */}
                  <div className="mb-4">
                    <h3 className="text-white font-semibold text-xl mb-1 group-hover:text-purple-400 transition-colors">
                      {artist.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{artist.description}</p>
                    <p className="text-gray-500 text-xs">Joined {artist.joined}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <TrendingUp className="w-4 h-4 text-purple-400" />
                        <span className="text-white font-semibold text-sm">{artist.totalSales}</span>
                      </div>
                      <p className="text-gray-400 text-xs">ETH Sales</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-semibold text-sm mb-1">{artist.works}</p>
                      <p className="text-gray-400 text-xs">Artworks</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-semibold text-sm mb-1">{artist.followers.toLocaleString()}</p>
                      <p className="text-gray-400 text-xs">Followers</p>
                    </div>
                  </div>

                  {/* Follow Button */}
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle follow logic
                    }}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105"
                  >
                    Follow
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105">
            Load More Artists
          </button>
        </div>
      </div>
    </div>
  );
};

export default Artists;
