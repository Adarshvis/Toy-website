import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/static/toy1.png",
      title: "Discover Amazing Toys!",
      description: "Find the perfect toy for every child and every occasion.",
      buttonText: "Explore Now"
    },
    {
      image: "/static/toy2.png",
      title: "Educational & Fun",
      description: "Engaging toys that make learning an adventure.",
      buttonText: "Learn More"
    },
    {
      image: "/static/toy3.png",
      title: "Safe & Durable",
      description: "Quality toys built to last and certified for safety.",
      buttonText: "Shop Now"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[650px] overflow-hidden">
      {/* Carousel Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Darker Gradient Overlay for Better Text Visibility */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent md:via-transparent">
              {/* Content Container - Right aligned on desktop, center on mobile */}
              <div className="absolute w-full md:w-1/2 px-6 md:px-0 md:right-16 top-1/2 -translate-y-1/2 
                text-center md:text-right">
                <div className="bg-black/40 md:bg-transparent p-6 md:p-0 rounded-lg backdrop-blur-sm md:backdrop-blur-none">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white 
                    drop-shadow-lg animate-fadeSlideIn">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl mb-6 text-white 
                    drop-shadow-lg animate-fadeSlideIn animation-delay-200">
                    {slide.description}
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold 
                    py-3 px-8 rounded-full shadow-lg transition-all duration-300 
                    animate-fadeSlideIn animation-delay-400 hover:scale-105">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${currentSlide === index 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;