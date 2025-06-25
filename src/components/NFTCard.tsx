
import { Heart, Eye, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NFTCardProps {
  id: string;
  title: string;
  artist: string;
  price: string;
  image: string;
  likes: number;
  views: number;
  trending?: boolean;
}

const NFTCard = ({ id, title, artist, price, image, likes, views, trending }: NFTCardProps) => {
  return (
    <Link to={`/nft/${id}`} className="group">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={`https://images.unsplash.com/${image}?w=400&h=400&fit=crop`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Trending Badge */}
          {trending && (
            <div className="absolute top-3 left-3 flex items-center space-x-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              <Zap className="w-3 h-3" />
              <span>Trending</span>
            </div>
          )}

          {/* Stats Overlay */}
          <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
              <Heart className="w-3 h-3" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
              <Eye className="w-3 h-3" />
              <span>{views}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-3">by {artist}</p>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-xs">Current Bid</p>
              <p className="text-white font-bold text-lg">{price} ETH</p>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105">
              Place Bid
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
