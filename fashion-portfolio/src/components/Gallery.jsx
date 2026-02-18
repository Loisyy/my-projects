import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../src/assets/images/LD-logo-dark.jpg';
import { galleryItems } from '../data/portfolioData';




export default function Gallery({ onSelectImage }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = ['back home'];

  const categories = ['All', 'Couture', 'Corsets', 'Patterns', 'Design', 'Sketches'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleClick = (item) => {
    if (item === 'back home') navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 w-full bg-white border-b border-pink-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src={logo} alt="Loisnyks Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-gray-900">Loisnyks</h1>
              <p className="text-xs text-pink-600 font-semibold -mt-1 italic" style={{ transform: 'skewX(-15deg)' }}>
                Designing a sustainable future
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="mb-8 text-left hidden md:block">
            <button
              onClick={() => navigate('/')}
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              ← Back Home
            </button>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-xl font-bold text-gray-900"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-pink-200">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleClick(item)}
                  className="block w-full text-left px-6 py-3 hover:bg-pink-50 capitalize text-gray-700 hover:text-pink-600 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">Full Gallery</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore my complete collection of fashion designs and creative works
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-pink-600 text-white'
                    : 'border-2 border-pink-600 text-pink-600 hover:bg-pink-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <div
                key={item.id}
                onClick={() => onSelectImage(item)}
                className="relative bg-gray-100 aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all border-2 border-pink-200 hover:border-pink-600 group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-center px-4">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images in this category yet</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
