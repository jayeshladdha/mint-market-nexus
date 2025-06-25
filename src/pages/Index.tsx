
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedCollections from '../components/FeaturedCollections';
import TopArtists from '../components/TopArtists';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <FeaturedCollections />
      <TopArtists />
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay in the <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Loop</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest updates on new collections, trending artists, and exclusive drops
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-full border border-gray-700 focus:border-purple-500 outline-none"
            />
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/50 backdrop-blur-sm border-t border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                NFTMarket
              </h3>
              <p className="text-gray-400 text-sm">
                The world's largest digital marketplace for crypto collectibles and non-fungible tokens.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Explore</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Create</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Artists</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Platform Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 NFTMarket. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
