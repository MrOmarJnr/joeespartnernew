"use client"

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const housePromo = {
  title: "Two Bedroom Apartments",
  price: "$90,000",
  location: "Addogono-Nungua, off the Spintex Road",
  images: [
    "/promo/slide1.jpg",
    "/promo/slide2.jpg",
    "/promo/slide3.jpg",
    "/promo/slide4.jpg",
    "/promo/slide5.jpg",
  ],
  status: "On Sale Now",
};

const PromoSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide photos every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % housePromo.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f8f9fa] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Off Plan Sales
            <span className="block w-12 sm:w-16 h-1 sm:h-2 bg-[#ff0000] mx-auto mt-3 sm:mt-4 rounded-full"></span>
          </h2>
          <p className="text-base sm:text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Discover our exclusive pre-construction properties available now
          </p>
        </div>

        {/* Separate Image and Text Containers */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          
          {/* Image Section */}
          <div className="w-full h-[750px] sm:h-[200px] sm:w-[200px] md:h-[600px] md:w-[600px] relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={housePromo.images[currentImage]}
                alt={`${housePromo.title} - Image ${currentImage + 1}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className=" object-cover"
              />
            </AnimatePresence>
            <div className="absolute top-4 right-4 bg-[#ff0000] text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full">
              {housePromo.status}
            </div>
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {housePromo.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                    index === currentImage ? "bg-[#ff0000]" : "bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full px-6 sm:px-10 py-8 sm:py-12 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2 sm:mb-4">
              {housePromo.title}
            </h3>
            <p className="text-lg sm:text-xl text-[#ff0000] font-semibold mb-2 sm:mb-3">
              {housePromo.price}
            </p>
            <p className="text-sm sm:text-base text-[#4a4a4a] mb-4 sm:mb-6">
              <span className="font-medium">Location:</span> {housePromo.location}
            </p>
            
            <button className="w-fit bg-[#ff0000] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#e60000] transition-colors duration-300 text-sm sm:text-base">
              <Link href='/contact-us'>Learn More</Link>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoSection;
