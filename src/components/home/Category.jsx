import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { 
    name: 'Metallic Toys', 
    image: '/Toys/metallic.jpg',
    description: 'Durable die-cast cars, robots & construction sets',
    itemCount: '124 items'
  },
  { 
    name: 'Wooden Toys', 
    image: '/Toys/wood.jpg',
    description: 'Eco-friendly blocks, puzzles & traditional toys',
    itemCount: '156 items'
  },
  { 
    name: 'Plush & Furry', 
    image: '/Toys/furry.jpg',
    description: 'Soft teddy bears, stuffed animals & dolls',
    itemCount: '198 items'
  },
  { 
    name: 'Plastic Toys', 
    image: '/Toys/plastic.jpg',
    description: 'Action figures, building blocks & playsets',
    itemCount: '245 items'
  },
  { 
    name: 'Rubber Toys', 
    image: '/Toys/rubber.jpg',
    description: 'Squeezable, flexible & water-safe toys',
    itemCount: '112 items'
  },
  { 
    name: 'Fabric & Textile', 
    image: '/Toys/plastic.jpg',
    description: 'Soft books, dolls & educational toys',
    itemCount: '167 items'
  },
  { 
    name: 'Silicon Toys', 
    image: '/Toys/silicon.jpg',
    description: 'Safe, durable & easy-to-clean toys',
    itemCount: '89 items'
  },
  { 
    name: 'Eco-Materials', 
    image: '/Toys/plastic.jpg',
    description: 'Sustainable bamboo, cork & recycled toys',
    itemCount: '134 items'
  }
];

const Category = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Material
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of toys crafted from different materials, each chosen for quality and safety
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="aspect-w-3 aspect-h-2 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.itemCount}
                  </span>
                  <button className="flex items-center text-red-600 hover:text-red-700 font-medium text-sm group">
                    Shop Now 
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/product">
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-200">
            View All Products
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;