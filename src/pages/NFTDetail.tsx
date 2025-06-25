
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Flag, Clock, TrendingUp, Eye, User } from 'lucide-react';
import Header from '../components/Header';

const NFTDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [bidAmount, setBidAmount] = useState('');

  // Mock data - in a real app, this would come from an API
  const nft = {
    id: id || '1',
    title: 'Cosmic Dreams #001',
    description: 'A stunning digital artwork that captures the essence of cosmic exploration and dreams. This piece represents the infinite possibilities that exist in the digital realm, combining vibrant colors with abstract forms to create a truly unique visual experience.',
    artist: 'ArtisticVision',
    artistAvatar: 'photo-1649972904349-6e44c42644a7',
    artistVerified: true,
    price: '2.5',
    image: 'photo-1649972904349-6e44c42644a7',
    likes: 234,
    views: 1200,
    created: '2024-01-15',
    collection: 'Cosmic Collection',
    category: 'Digital Art',
    blockchain: 'Ethereum',
    tokenId: '#7832',
    contractAddress: '0x742d35...7f3c',
    properties: [
      { trait: 'Background', value: 'Cosmic', rarity: '12%' },
      { trait: 'Style', value: 'Abstract', rarity: '8%' },
      { trait: 'Color Scheme', value: 'Vibrant', rarity: '15%' },
      { trait: 'Composition', value: 'Dynamic', rarity: '6%' }
    ]
  };

  const bids = [
    { bidder: 'CryptoCollector', amount: '2.3', time: '2 hours ago', avatar: 'photo-1488590528505-98d2b5aba04b' },
    { bidder: 'ArtLover123', amount: '2.1', time: '5 hours ago', avatar: 'photo-1461749280684-dccba630e2f6' },
    { bidder: 'DigitalEnthusiast', amount: '1.8', time: '1 day ago', avatar: 'photo-1486312338219-ce68d2c6f44d' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
              <img
                src={`https://images.unsplash.com/${nft.image}?w=600&h=600&fit=crop`}
                alt={nft.title}
                className="w-full h-full object-cover"
              />
              
              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-full backdrop-blur-sm border transition-all ${
                    isLiked 
                      ? 'bg-red-500 border-red-500 text-white' 
                      : 'bg-black/50 border-gray-600 text-gray-300 hover:border-gray-400'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                <button className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-gray-600 text-gray-300 hover:border-gray-400 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-gray-600 text-gray-300 hover:border-gray-400 transition-colors">
                  <Flag className="w-5 h-5" />
                </button>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 flex space-x-3">
                <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white">
                  <Heart className="w-4 h-4" />
                  <span>{nft.likes}</span>
                </div>
                <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white">
                  <Eye className="w-4 h-4" />
                  <span>{nft.views}</span>
                </div>
              </div>
            </div>

            {/* Properties */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-white font-semibold text-lg mb-4">Properties</h3>
              <div className="grid grid-cols-2 gap-3">
                {nft.properties.map((property, index) => (
                  <div key={index} className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <p className="text-gray-400 text-sm">{property.trait}</p>
                    <p className="text-white font-medium">{property.value}</p>
                    <p className="text-purple-400 text-xs">{property.rarity} have this trait</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Link to={`/collection/${nft.collection}`} className="text-purple-400 hover:text-purple-300 text-sm">
                  {nft.collection}
                </Link>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400 text-sm">{nft.category}</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{nft.title}</h1>
              
              {/* Artist Info */}
              <Link to={`/artist/${nft.artist}`} className="flex items-center space-x-3 group">
                <img
                  src={`https://images.unsplash.com/${nft.artistAvatar}?w=50&h=50&fit=crop&crop=face`}
                  alt={nft.artist}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-400 text-sm">Created by</p>
                  <div className="flex items-center space-x-1">
                    <p className="text-white font-medium group-hover:text-purple-400 transition-colors">{nft.artist}</p>
                    {nft.artistVerified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>

            {/* Current Price */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">Sale ends in 2 days, 14 hours</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">Current bid</p>
              <p className="text-4xl font-bold text-white mb-4">{nft.price} ETH</p>
              <p className="text-gray-400 text-sm">≈ $4,250.00</p>
            </div>

            {/* Bidding */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-white font-semibold text-lg mb-4">Place a Bid</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Your bid (ETH)</label>
                  <input
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="Enter bid amount"
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-500 outline-none"
                  />
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all">
                    Place Bid
                  </button>
                  <button className="px-6 py-3 border-2 border-purple-500 text-purple-500 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Bid History */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <h3 className="text-white font-semibold text-lg">Bid History</h3>
              </div>
              <div className="space-y-3">
                {bids.map((bid, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <img
                        src={`https://images.unsplash.com/${bid.avatar}?w=40&h=40&fit=crop&crop=face`}
                        alt={bid.bidder}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-white font-medium">{bid.bidder}</p>
                        <p className="text-gray-400 text-sm">{bid.time}</p>
                      </div>
                    </div>
                    <p className="text-white font-semibold">{bid.amount} ETH</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-white font-semibold text-lg mb-4">Description</h3>
              <p className="text-gray-300 leading-relaxed">{nft.description}</p>
            </div>

            {/* Details */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-white font-semibold text-lg mb-4">Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Contract Address</span>
                  <span className="text-white font-mono text-sm">{nft.contractAddress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Token ID</span>
                  <span className="text-white">{nft.tokenId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Blockchain</span>
                  <span className="text-white">{nft.blockchain}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Created</span>
                  <span className="text-white">{nft.created}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;
