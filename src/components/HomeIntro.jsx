import React from 'react';
import { motion } from 'framer-motion';
import storyImage from '../images/3.jpeg'; // Replace with an ACCR-related banner if available

const HomeIntro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="w-full py-20 ">
      <div className="max-w-[85rem] w-full mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Text Block */}
          <motion.div variants={textVariants} className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800  font-Poppins mb-6 leading-tight">
              Association of Carbon Conservation and Reforestation (ACCR)
            </h2>

            <p className="text-lg text-gray-700  leading-relaxed mb-4">
              The Association of Carbon Conservation and Reforestation (ACCR) is Sierra Leone’s leading voice for private sector carbon developers, uniting to foster sustainable climate solutions.
            </p>

            <p className="text-lg text-gray-700  leading-relaxed mb-4">
              Established in 2024, ACCR collaborates with the Government of Sierra Leone and stakeholders to create a fair and equitable environment for carbon development projects.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our mission is to drive investment in nature-based solutions that restore ecosystems, create jobs, and improve livelihoods across Sierra Leone.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Join us in building a greener, more sustainable future for Sierra Leone, where economic growth and environmental restoration go hand in hand. Explore our work, meet our members, and learn how carbon development is transforming communities and combating climate change.
            </p>

            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
          </motion.div>

          {/* Image Block */}
          <motion.div variants={imageVariants}>
            <img
              src={storyImage}
              alt="ACCR Impact"
              className="w-full h-[520px] object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeIntro;
