import React, { useState, useEffect } from 'react';

const AutoImageSlider = ({ images, interval = 2000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images, interval]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out transform"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentImageIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-center"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className=" h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoImageSlider;
