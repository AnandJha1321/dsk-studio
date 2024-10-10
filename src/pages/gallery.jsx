// Gallery.js
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import importAll from '@/components/Gallery/Images';

// Import images dynamically using require.context
const allImages = importAll(require.context('../assets/gallery', false, /\.(png|PNG|JPG|jpe?g|jpg|svg)$/));

// Convert the imported images object to an array
const images = Object.values(allImages);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <Header />
      <MenuComponent />
      <div className='w-full bg-[#F0EDE3] h-[150px] text-[#BFA534] flex items-center justify-center'>
        <p className='font-jacques text-[40px] tracking-widest'>The Galleries</p>
      </div>
      <div className="px-4 pb-10 bg-[#F0EDE3]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-60 md:h-80 cursor-pointer"
              onClick={() => openImage(index)}
            >
              <Image
                src={img}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative w-4/5 h-4/5">
              <Image src={selectedImage} alt="Selected Image" fill className="object-contain" />

              {/* Close Button */}
              <button
                className="absolute top-[-5%] right-4 text-white"
                onClick={closeImage}
              >
                X
              </button>

              {/* Next and Previous Controls */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1/4 cursor-pointer flex items-center justify-start"
                onClick={showPrevImage}
              >
                <ChevronLeftIcon className="w-10 h-10 text-white" />
              </div>
              <div
                className="absolute right-0 top-0 bottom-0 w-1/4 cursor-pointer flex items-center justify-end"
                onClick={showNextImage}
              >
                <ChevronRightIcon className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
