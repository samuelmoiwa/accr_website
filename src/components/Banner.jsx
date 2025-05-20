import React from 'react';
import forest from '../images/forest_banner.jpg';

const Banner = () => {
  return (
    <section
      className="relative h-[40rem] w-full max-w-[130rem] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${forest})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Association of Carbon Conservation and Reforestation (ACCR)
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Sierra Leone’s leading voice for private sector carbon developers, driving investment in nature-based solutions that restore ecosystems, create jobs, and combat climate change.
        </p>
        <a
          href="#learn-more"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Banner;
