import React, { useState } from 'react';
import _1 from '../images/carosel/1.jpg'
import _2 from '../images/carosel/2.jpeg'
import _4 from '../images/carosel/4.jpg'
import _5 from '../images/carosel/5.png'
import _6 from '../images/carosel/6.png'
import _7 from '../images/carosel/7.png'
import _9 from '../images/carosel/9.jpg'
import _10 from '../images/carosel/10.jpg'
import _11 from '../images/carosel/11.jpg'

const CallToAction = () => {
  const images = [_1, _2, _4, _9, _10, _11];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative w-full py-5 bg-gradient-to-r from-green-800 via-green-800 to-green-300 text-white overflow-hidden mt-10">

      {/* Carousel container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll space-x-4 hover:[animation-play-state:paused] transition-all duration-300 cursor-pointer">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Carousel ${index + 1}`}
              className="w-[19rem] h-[14rem] object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Popup modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-3xl max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* Carousel animation keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};












export default CallToAction;
