import React from 'react';
import { motion } from 'framer-motion';
import carbonImg from '../images/1.jpeg';
import creditsImg from '../images/2.jpeg';
import stoveImg from '../images/3.jpeg';
import forestImg from '../images/4.jpeg';
import cutTree from '../images/5.jpeg'
import reduction from '../images/6.jpeg'


const CarbonDevelopment = () => {
  return (
    <section className="w-full py-20 bg-gray-100 text-gray-800">
      <div className="max-w-[90rem] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800">
            What is Carbon Development?
          </h2>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600">
            Carbon development is a powerful tool for addressing climate change while fostering economic and social growth in Sierra Leone.
          </p>
        </motion.div>

        {/* Intro Image */}
        <motion.img
          src={carbonImg}
          alt="Carbon Forest"
          className="rounded-xl shadow-lg mb-12 w-full h-80 object-cover"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Key Facts */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-green-900">
              Key Facts About Carbon Development in Sierra Leone:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li><strong>Carbon Credits Explained:</strong> A carbon credit represents one metric ton of CO₂ removed, avoided, or reduced. Governments and companies purchase credits to offset emissions.</li>
              <li><strong>Validation Standards:</strong> All projects are certified by <em>VERRA</em>, a global authority on carbon validation.</li>
              <li><strong>Investment Potential:</strong> With demand outpacing supply, Sierra Leone is poised to attract significant investment via ACCR's transparent framework.</li>
            </ul>
            <img src={creditsImg} alt="Carbon Credits" className="w-full h-60 object-cover rounded-lg shadow-md" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-green-900">
              Nature-Based Carbon Project Types:
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <p className="font-medium text-lg">🌿 Removal (ARR)</p>
                <p className="text-gray-600">Growing trees and vegetation to absorb CO₂. Examples: Rainforest Builder, Rewilding, Freetown the Treetown.</p>
                <img src={forestImg} alt="Tree planting" className="rounded-md mt-2 w-full h-40 object-cover" />
              </div>

              <div className='w-full sm:flex  gap-2'>
                <div>
                  <p className="font-medium text-lg">🌳 Avoidance (REDD+)</p>
                  <p className="text-gray-600">Preventing deforestation in high-risk areas. West Africa Blue leads in this space.</p>
                  <img src={cutTree} alt="Forest protection" className="rounded-md mt-2 w-full h-40 object-cover" />
                </div>
                <div>
                  <p className="font-medium text-lg">🔥 Reduction</p>
                  <p className="text-gray-600">Using efficient cookstoves to reduce emissions. Example: DelAgua’s Livɛ Fyn program.</p>
                  <img src={reduction} alt="Cookstove project" className="rounded-md mt-2 w-full h-40 object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xl text-gray-700 max-w-4xl mx-auto"
          >
            These projects employ over <strong>4,500 people</strong>, mostly in rural areas, delivering improved crop yields, better health, and long-term economic empowerment.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CarbonDevelopment;
