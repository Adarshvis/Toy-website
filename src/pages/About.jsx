// src/pages/About.jsx
import React from 'react';
import { ToyBrick, Star, Smile, Rocket, Palette, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-red-600 mb-4 flex items-center justify-center gap-3">
          <ToyBrick className="w-10 h-10 text-blue-500 animate-bounce" />
          About Us
          <ToyBrick className="w-10 h-10 text-green-500 animate-bounce" />
        </h1>
        <p className="text-xl text-gray-700">We bring joy and creativity to kids everywhere!</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-8 h-8 text-yellow-500" />
            <h2 className="text-2xl font-bold text-yellow-700">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We are dedicated to sparking creativity and joy in kids through fun and innovative products.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold text-blue-700">Our Vision</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To inspire the next generation of dreamers, creators, and explorers through playful learning.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-pink-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Palette className="w-8 h-8 text-pink-500" />
            <h2 className="text-2xl font-bold text-pink-700">Our Values</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Creativity, fun, and safety are at the heart of everything we do.
          </p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mt-12 bg-green-100 p-8 rounded-lg shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-8 h-8 text-green-500" />
          <h2 className="text-2xl font-bold text-green-700">What Parents Say</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          "My kids absolutely love the products! They are not only fun but also educational. Highly recommended!"
        </p>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-700 text-lg flex items-center justify-center gap-2">
          <Smile className="w-6 h-6 text-pink-500" />
          Thank you for being part of our journey. Let's create magical moments together!
        </p>
      </div>
    </div>
  );
};

export default About;