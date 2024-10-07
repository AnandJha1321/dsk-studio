import React, { useState } from 'react';
import Image from 'next/image';
import image1 from '@/assets/gallery/image1.png';
import image2 from '@/assets/gallery/image2.png';
import image3 from '@/assets/gallery/image3.png';
import image4 from '@/assets/gallery/image4.png';
import image5 from '@/assets/gallery/image5.png';
import image6 from '@/assets/gallery/image6.png';
import image7 from '@/assets/gallery/image7.png';
import image8 from '@/assets/gallery/image8.png';
import image9 from '@/assets/gallery/image9.png';
import IMG_9922 from '@/assets/gallery/IMG_9922.PNG';
import IMG_9927 from '@/assets/gallery/IMG_9927.JPG';
import IMG_9928 from '@/assets/gallery/IMG_9928.PNG';
import IMG_9930 from '@/assets/gallery/IMG_9930.PNG';
import IMG_9965 from '@/assets/gallery/IMG_9965.PNG';
import IMG_9969 from '@/assets/gallery/IMG_9969.PNG';
import IMG_9973 from '@/assets/gallery/IMG_9973.PNG';
import IMG_9976 from '@/assets/gallery/IMG_9976.PNG';
import IMG_6288 from '@/assets/gallery/IMG_6288.JPG';
import IMG_8574 from '@/assets/gallery/IMG_8574.JPG';
import IMG_3707 from '@/assets/gallery/IMG_3707.PNG'
import Header from '@/components/Header';




const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  IMG_9922,
  image8,
  image9,
  image7,
  IMG_9927,
  IMG_9928,
  IMG_9930,
  IMG_9965,
  IMG_9969,
  IMG_9973,
  IMG_9976,
  IMG_6288,
  IMG_8574,
  IMG_3707
];

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
    <div className="px-4 py-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
        {images.map((img, index) => (
          <div
            key={index} className="relative w-full h-60 md:h-80 cursor-pointer"
            onClick={() => openImage(index)

            }
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
              className="absolute top-[-10%] right-2 text-white"
              onClick={closeImage}
            >
              X
            </button>

            {/* Next and Previous Controls */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1/4 cursor-pointer"
              onClick={showPrevImage}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-1/4 cursor-pointer"
              onClick={showNextImage}
            />
          </div>
        </div>
      )}
    </div>
    </>
    
  );
};

export default Gallery;