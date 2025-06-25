
import { useState } from 'react';
import { Upload, Image, Music, Video, FileText, Plus, X } from 'lucide-react';
import Header from '../components/Header';

const Create = () => {
  const [activeTab, setActiveTab] = useState('single');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    royalties: '10',
    category: 'art',
    collection: '',
    properties: [{ trait: '', value: '' }]
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const addProperty = () => {
    setFormData({
      ...formData,
      properties: [...formData.properties, { trait: '', value: '' }]
    });
  };

  const removeProperty = (index: number) => {
    const newProperties = formData.properties.filter((_, i) => i !== index);
    setFormData({ ...formData, properties: newProperties });
  };

  const updateProperty = (index: number, field: 'trait' | 'value', value: string) => {
    const newProperties = [...formData.properties];
    newProperties[index][field] = value;
    setFormData({ ...formData, properties: newProperties });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Create <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">NFT</span>
          </h1>
          <p className="text-gray-400 text-lg">Turn your digital creations into unique collectibles</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1 mb-8 w-fit">
          <button
            onClick={() => setActiveTab('single')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'single'
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Single NFT
          </button>
          <button
            onClick={() => setActiveTab('collection')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'collection'
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Collection
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Upload */}
          <div className="space-y-6">
            {/* File Upload */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-white font-semibold text-lg mb-4">Upload File</h3>
              
              {!uploadedFile ? (
                <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-purple-500 transition-colors">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept="image/*,video/*,audio/*"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-white font-medium mb-2">Choose file to upload</p>
                    <p className="text-gray-400 text-sm mb-4">
                      Drag and drop or click to browse
                    </p>
                    <p className="text-gray-500 text-xs">
                      Supported formats: JPG, PNG, GIF, SVG, MP4, WEBM (Max 100MB)
                    </p>
                  </label>
                </div>
              ) : (
                <div className="relative">
                  <div className="bg-gray-700 rounded-xl p-4 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Image className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{uploadedFile.name}</p>
                      <p className="text-gray-400 text-sm">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <button
                      onClick={() => setUploadedFile(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* File Type Icons */}
              <div className="flex justify-center space-x-6 mt-6">
                <div className="text-center">
                  <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-xs">Image</p>
                </div>
                <div className="text-center">
                  <Video className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-xs">Video</p>
                </div>
                <div className="text-center">
                  <Music className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-xs">Audio</p>
                </div>
                <div className="text-center">
                  <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-xs">Document</p>
                </div>
              </div>
            </div>

            {/* Preview */}
            {uploadedFile && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-white font-semibold text-lg mb-4">Preview</h3>
                <div className="aspect-square bg-gray-700 rounded-xl flex items-center justify-center">
                  <p className="text-gray-400">File preview will appear here</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-white font-semibold text-lg mb-4">Details</h3>
              
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter NFT name"
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-500 outline-none"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your NFT"
                    rows={4}
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-500 outline-none resize-none"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-500 outline-none"
                  >
                    <option value="art">Art</option>
                    <option value="gaming">Gaming</option>
                    <option value="photography">Photography</option>
                    <option value="music">Music</option>
                    <option value="sports">Sports</option>
                    <option value="virtual-worlds">Virtual Worlds</option>
                  </select>
                </div>

                {/* Collection */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Collection (Optional)</label>
                  <input
                    type="text"
                    value={formData.collection}
                    onChange={(e) => setFormData({ ...formData, collection: e.target.value })}
                    placeholder="Add to existing collection or create new"
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-white font-semibold text-lg mb-4">Pricing</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Price (ETH)</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0.00"
                    step="0.01"
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Royalties (%)</label>
                  <input
                    type="number"
                    value={formData.royalties}
                    onChange={(e) => setFormData({ ...formData, royalties: e.target.value })}
                    placeholder="10"
                    min="0"
                    max="50"
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-500 outline-none"
                  />
                  <p className="text-gray-500 text-xs mt-1">
                    Suggested: 0%, 2.5%, 5%, 10%. Maximum is 50%
                  </p>
                </div>
              </div>
            </div>

            {/* Properties */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Properties</h3>
                <button
                  onClick={addProperty}
                  className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Property</span>
                </button>
              </div>

              <div className="space-y-3">
                {formData.properties.map((property, index) => (
                  <div key={index} className="flex space-x-3">
                    <input
                      type="text"
                      value={property.trait}
                      onChange={(e) => updateProperty(index, 'trait', e.target.value)}
                      placeholder="Trait type (e.g., Color)"
                      className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-purple-500 outline-none"
                    />
                    <input
                      type="text"
                      value={property.value}
                      onChange={(e) => updateProperty(index, 'value', e.target.value)}
                      placeholder="Value (e.g., Blue)"
                      className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-purple-500 outline-none"
                    />
                    {formData.properties.length > 1 && (
                      <button
                        onClick={() => removeProperty(index)}
                        className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Create Button */}
            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105">
              Create NFT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
