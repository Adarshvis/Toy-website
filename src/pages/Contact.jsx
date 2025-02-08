// src/pages/Contact.jsx
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Smile } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-red-600 mb-4 flex items-center justify-center gap-3">
          <MessageCircle className="w-10 h-10 text-blue-500 animate-bounce" />
          Contact Us
          <Smile className="w-10 h-10 text-green-500 animate-bounce" />
        </h1>
        <p className="text-xl text-gray-700">We'd love to hear from you! Reach out to us anytime.</p>
      </div>

      {/* Contact Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Email Card */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-8 h-8 text-yellow-500" />
            <h2 className="text-2xl font-bold text-yellow-700">Email Us</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Have questions? Drop us an email at:
            <a href="mailto:info@kidsworld.com" className="text-blue-500 hover:underline block mt-2">
              info@kidsworld.com
            </a>
          </p>
        </div>

        {/* Phone Card */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold text-blue-700">Call Us</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Give us a call for quick assistance:
            <a href="tel:+1234567890" className="text-blue-500 hover:underline block mt-2">
              +1 (234) 567-890
            </a>
          </p>
        </div>

        {/* Address Card */}
        <div className="bg-pink-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-pink-500" />
            <h2 className="text-2xl font-bold text-pink-700">Visit Us</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Come visit our office at:
            <span className="block mt-2 text-blue-500">
              123 Playful Lane, Kidstown, USA
            </span>
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-green-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-3">
          <MessageCircle className="w-8 h-8 text-green-500" />
          Send Us a Message
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">Your Message</label>
            <textarea
              placeholder="Type your message here..."
              rows="4"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-700 text-lg flex items-center justify-center gap-2">
          <Smile className="w-6 h-6 text-pink-500" />
          We can't wait to hear from you! Let's create something amazing together.
        </p>
      </div>
    </div>
  );
};

export default Contact;