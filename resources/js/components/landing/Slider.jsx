import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const images = [
    '/images/thumbnail1.jpg',
    '/images/thumbnail2.jpg',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const previous = () => {
    setCurrentIndex(currentIndex === 1 ? images.length : currentIndex - 1);
  };

  const forward = () => {
    setCurrentIndex(currentIndex === images.length ? 1 : currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      forward();
    }, 2500); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <main className="grid w-full place-content-center">
      <div className="relative">
        <div className="px-2 text-center text-sm text-white">
          {currentIndex}/{images.length}
        </div>
        <div className="relative image-container h-60 md:h-80">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 transition-transform duration-300 ${
                currentIndex === index + 1 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="image-cover">
                <img src={image} alt={`image-${index}`} className="rounded-sm" width={500} />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 bottom-0 left-0 flex items-center">
          <button
            onClick={previous}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100"
            style={{ left: '-20px' }}
          >
            <KeyboardDoubleArrowLeftIcon />
          </button>
        </div>
        <div className="absolute top-0 bottom-0 right-0 flex items-center">
          <button
            onClick={forward}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 shadow-md mt-5"
            style={{ right: '-20px' }}
          >
            <KeyboardDoubleArrowRightIcon />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Slider;
