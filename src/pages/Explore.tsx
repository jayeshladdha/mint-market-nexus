
import { useState } from 'react';
import { Filter, Grid, List, Search, SlidersHorizontal } from 'lucide-react';
import Header from '../components/Header';
import NFTCard from '../components/NFTCard';

const Explore = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('trending');
  const [category, setCategory] = useState('all');

  const nfts = [
    {
      id: '1',
      title: 'Cosmic Dreams #001',
      artist: 'ArtisticVision',
      price: '2.5',
      image: 'photo-1649972904349-6e44c42644a7',
      likes: 234,
      views: 1200,
      trending: true
    },
    {
      id: '2',
      title: 'Digital Harmony',
      artist: 'CyberCreator',
      price: '1.8',
      image: 'photo-1488590528505-98d2b5aba04b',
      likes: 189,
      views: 890,
    },
    {
      id: '3',
      title: 'Neon Genesis',
      artist: 'FutureArt',
      price: '3.2',
      image: 'photo-1461749280684-dccba630e2f6',
      likes: 312,
      views: 1500,
      trending: true
    },
    {
      id: '4',
      title: 'Abstract Reality',
      artist: 'ModernMint',
      price: '0.9',
      image: 'photo-1486312338219-ce68d2c6f44d',
      likes: 156,
      views: 720,
    },
    {
      id: '5',
      title: 'Quantum Leap',
      artist: 'TechnoArt',
      price: '4.1',
      image: 'photo-1581091226825-a6a2a5aee158',
      likes: 445,
      views: 2100,
      trending: true
    },
    {
      id: '6',
      title: 'Electric Dreams',
      artist: 'DigitalPioneer',
      price: '2.7',
      image: 'photo-1531297484001-80022131f5a1',
      likes: 278,
      views: 1350,
    },
    {
      id: '7',
      title: 'Cyber Punk City',
      artist: 'NeonArtist',
      price: '1.5',
      image: 'photo-1487058792275-0ad4aaf24ca7',
      likes: 203,
      views: 950,
    },
    {
      id: '8',
      title: 'Virtual Landscape',
      artist: 'DigitalNature',
      price: '3.8',
      image: 'photo-1498050108023-c5249f4df085',
      likes: 367,
      views: 1680,
      trending: true
    }
  ];

  const categories = ['All', 'Art', 'Gaming', 'Photography', 'Music', 'Sports', 'Virtual Worlds'];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">NFTs</span>
          </h1>
          <p className="text-gray-400 text-lg">Discover amazing digital art from creators worldwide</p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    category === cat.toLowerCase()
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-purple-500 outline-none"
              >
                <option value="trending">Trending</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Filter Button */}
              <button className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">Showing {nfts.length} results</p>
        </div>

        {/* NFT Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {nfts.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105">
            Load More NFTs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
