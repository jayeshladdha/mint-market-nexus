
import { Crown, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopArtists = () => {
  const artists = [
    {
      id: '1',
      name: 'ArtisticVision',
      avatar: 'photo-1649972904349-6e44c42644a7',
      totalSales: '147.5',
      works: 23,
      verified: true
    },
    {
      id: '2',
      name: 'CyberCreator',
      avatar: 'photo-1488590528505-98d2b5aba04b',
      totalSales: '92.3',
      works: 18,
      verified: true
    },
    {
      id: '3',
      name: 'FutureArt',
      avatar: 'photo-1461749280684-dccba630e2f6',
      totalSales: '78.9',
      works: 31,
      verified: false
    },
    {
      id: '4',
      name: 'ModernMint',
      avatar: 'photo-1486312338219-ce68d2c6f44d',
      totalSales: '65.2',
      works: 15,
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Top <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Artists</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the most successful creators in our marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
            <Link key={artist.id} to={`/artist/${artist.id}`} className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                {/* Rank Badge */}
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <img
                      src={`https://images.unsplash.com/${artist.avatar}?w=100&h=100&fit=crop&crop=face`}
                      alt={artist.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-purple-500/50 group-hover:border-purple-400 transition-colors"
                    />
                    {index === 0 && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-1">
                        <Crown className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Artist Info */}
                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors">
                    {artist.name}
                  </h3>
                  {artist.verified && (
                    <div className="ml-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-1 text-gray-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">{artist.totalSales} ETH total sales</span>
                  </div>
                  <p className="text-gray-500 text-sm">{artist.works} artworks</p>
                </div>

                {/* Rank */}
                <div className="mt-4 text-center">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    #{index + 1} Artist
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/artists"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105"
          >
            View All Artists
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopArtists;
