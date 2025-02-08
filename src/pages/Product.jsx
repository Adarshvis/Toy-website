// src/pages/Product.jsx
import React from 'react';
import { ChevronRight, ShoppingCart, Star, Tag } from 'lucide-react';

const products = [
  {
    category: 'Metallic Toys',
    images: ['/Toys/metallic1.jpg', '/Toys/metallic2.jpg', '/Toys/metallic3.jpg', '/Toys/metallic4.jpg', '/Toys/metallic5.jpg'],
    description: 'Durable die-cast cars, robots & construction sets made from premium metals.',
    priceRange: '$20 - $150',
  },
  {
    category: 'Wooden Toys',
    images: ['/Toys/wood1.jpg', '/Toys/wood2.jpg', '/Toys/wood3.jpg', '/Toys/wood4.jpg', '/Toys/wood5.jpg'],
    description: 'Eco-friendly blocks, puzzles, and traditional wooden toys.',
    priceRange: '$15 - $100',
  },
  {
    category: 'Plush & Furry',
    images: ['/Toys/furry1.jpg', '/Toys/furry2.jpg', '/Toys/furry3.jpg', '/Toys/furry4.jpg', '/Toys/furry5.jpg'],
    description: 'Soft teddy bears, stuffed animals, and cozy dolls.',
    priceRange: '$10 - $80',
  },
  {
    category: 'Plastic Toys',
    images: ['/Toys/furry1.jpg', '/Toys/furry2.jpg', '/Toys/furry3.jpg', '/Toys/furry4.jpg', '/Toys/furry5.jpg'],
    description: 'Plastic Toys',
    priceRange: '$10 - $80',
  },
  {
    category: 'Rubber Toys',
    images: ['/Toys/furry1.jpg', '/Toys/furry2.jpg', '/Toys/furry3.jpg', '/Toys/furry4.jpg', '/Toys/furry5.jpg'],
    description: 'Soft rubber balls',
    priceRange: '$10 - $80',
  },
  {
    category: 'Fabric &Textile',
    images: ['/Toys/furry1.jpg', '/Toys/furry2.jpg', '/Toys/furry3.jpg', '/Toys/furry4.jpg', '/Toys/furry5.jpg'],
    description: 'Soft teddy bears, stuffed animals, and cozy dolls.',
    priceRange: '$10 - $80',
  },
  {
    category: 'Silicon Toys',
    images: ['/Toys/furry1.jpg', '/Toys/furry2.jpg', '/Toys/furry3.jpg', '/Toys/furry4.jpg', '/Toys/furry5.jpg'],
    description: 'Soft silicon toys.',
    priceRange: '$10 - $80',
  },
  {
    category: 'Eco Friendly Toys',
    images: ['/Toys/furry1.jpg', '/Toys/furry2.jpg', '/Toys/furry3.jpg', '/Toys/furry4.jpg', '/Toys/furry5.jpg'],
    description: 'Nature friendly toys.',
    priceRange: '$10 - $80',
  }
];

const Product = () => {
  return (
    <div className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-10">Our Products</h2>

        {products.map((product, index) => (
          <div key={index} className="mb-12 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Tag className="w-6 h-6 text-pink-500" /> {product.category}
            </h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {product.images.map((image, idx) => (
                <img 
                  key={idx} 
                  src={image} 
                  alt={`${product.category} ${idx + 1}`} 
                  className="w-48 h-48 object-cover rounded-lg shadow-sm hover:shadow-lg transition duration-300" 
                />
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-medium text-gray-900">Price: {product.priceRange}</span>
              <button className="flex items-center gap-1 bg-pink-600 text-white px-4 py-2 rounded-full shadow hover:bg-pink-700 transition">
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
