
import NFTCard from './NFTCard';

const FeaturedCollections = () => {
  const featuredNFTs = [
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
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Collections</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the most sought-after digital art pieces from renowned creators around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredNFTs.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
