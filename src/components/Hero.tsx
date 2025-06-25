
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-fade-in">
            Discover, Collect & Trade
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Extraordinary NFTs
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            The world's largest digital marketplace for crypto collectibles and non-fungible tokens
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Link
              to="/explore"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105"
            >
              <span>Explore NFTs</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/create"
              className="flex items-center justify-center space-x-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all transform hover:scale-105"
            >
              <span>Create NFT</span>
              <Zap className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-purple-400 mr-2" />
                <span className="text-3xl font-bold text-white">250K+</span>
              </div>
              <p className="text-gray-400">Total Sales</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-3xl font-bold text-white">50K+</span>
              </div>
              <p className="text-gray-400">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-3xl font-bold text-white">15K+</span>
              </div>
              <p className="text-gray-400">Artists</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
