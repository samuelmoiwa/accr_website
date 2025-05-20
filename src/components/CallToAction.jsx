import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import partner from '../lottie/partner.json';

const CallToAction = () => {
  return (
    <section className="relative w-full py-5 bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white overflow-hidden mt-10">
      <div className="max-w-[90rem] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Right Column: Text + Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[70%] text-center lg:text-left"
        >

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Be Part of the Climate Solution
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/80">
            Whether you're an investor, community leader, or environmental advocate, there's a place for you in
            Sierra Leone's carbon transformation. Let’s restore ecosystems, empower livelihoods,
            and build a climate-resilient future together.
          </p>

          <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-6">
            <Link
              to="/join"
              className="bg-white text-green-800 hover:bg-green-100 font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            >
              Join ACCR
            </Link>

          </div>
        </motion.div>

        {/* Left Column: Lottie Animation */}
        <div className="w-full lg:w-[30%]">
          <Lottie animationData={partner} loop={true} className="w-full max-w-md mx-auto" />
        </div>
      </div>

      {/* Decorative radial glow */}
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-green-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};

export default CallToAction;
