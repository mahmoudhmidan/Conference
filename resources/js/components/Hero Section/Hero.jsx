import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/hero_logo.png';
import img1 from '../../assets/hero_img1.jpg';
import img2 from '../../assets/hero_img2.jpg';
import img3 from '../../assets/hero_img3.jpg';



const images = [img1, img2, img3];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] mt-6 rounded shadow-md overflow-hidden flex items-center justify-center">
      {/* slider */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="Slider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/*logo*/}
      <div className="absolute z-10 flex items-center justify-center flex-col">
       <motion.img src={logo} alt="Logo" className="lg:w-[30%] md:w-52 drop-shadow-lg"
       initial={{ opacity: 0, scale: 0.8 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 3 }}
  />
      </div>

     
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
    </div>
  );
}