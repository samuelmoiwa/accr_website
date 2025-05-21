import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import forest from '../images/forest_banner.jpg';

const Banner = () => {

const scrollToHomeInfo = () => {
  const target = document.getElementById('home-info');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <section
      className="relative h-[40rem] w-full  mx-auto bg-cover bg-center flex items-center justify-center overflow-hidden  shadow-xl"
      style={{ backgroundImage: `url(${forest})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />

      {/* Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-black/80 opacity-20" />

      {/* Content with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center text-white max-w-4xl px-4"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Association of Carbon Conservation and Reforestation (ACCR)
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Sierra Leone’s leading voice for private sector carbon developers restoring ecosystems, creating jobs, and driving climate action through nature-based solutions.
        </motion.p>

        <motion.button
          onClick={scrollToHomeInfo}
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-400/50"
          whileHover={{ scale: 1.05 }}
        >
          Learn More <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.button>


      </motion.div>
    </section>
  );
};

export default Banner;
