import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample logos - replace these with actual logo paths
import rainforestLogo from '../images/rb_logo.png';
import rewildingLogo from '../images/rewilding_logo.png';
import delaguaLogo from '../images/delagua.png';
import freetownLogo from '../images/fcc.png';
import mangroveLogo from '../images/mangrove.jpg';
import westAfricaLogo from '../images/westafrica.png';



const members = [
  {
    name: 'Rainforest Builder',
    logo: rainforestLogo,
    description:
      "Projects in Sierra Leone’s Upper Guinean Forest employ 2,000 people, focusing on rapid carbon removal, biodiversity, and restoring degraded tropical landscapes.",
  },
  {
    name: 'Rewilding',
    logo: rewildingLogo,
    description:
      'Works with smallholder farmers to restore native forests and ensure reforestation benefits both the environment and communities.',
  },
  {
    name: 'Mangrove Conservation Sierra Leone',
    logo: mangroveLogo,
    description:
      'Restores mangrove ecosystems—critical carbon sinks that protect biodiversity and coastal communities.',
  },
  {
    name: 'West Africa Blue',
    logo: westAfricaLogo,
    description:
      'Specializes in REDD+ projects to avoid deforestation and preserve threatened ecosystems in Sierra Leone.',
  },
  {
    name: 'DelAgua',
    logo: delaguaLogo,
    description:
      'Leads efficient cookstove projects with its Livɛ Fyn program, impacting 850,000 households and pioneering Article 6 carbon credits.',
  },
  {
    name: 'Freetown the Treetown',
    logo: freetownLogo,
    description:
      'Aims to plant 5 million trees by 2028 through community-led climate adaptation and reforestation initiatives.',
  },
];

const MembersCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full flex justify-center items-center py-20">
      <div className="max-w-[90rem] w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800">Our Members</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4">
            ACCR is proud to represent Sierra Leone’s leading carbon developers transforming communities
            and ecosystems through nature-based climate solutions.
          </p>
        </div>

        <div className='w-full px-4'>
          <Slider {...settings}>
          {members.map((member, index) => (
              <motion.div
              key={index}
              className="px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              >
              <div className="bg-white rounded-xl shadow-lg sm:p-6 p-2 text-center h-full w-full
              sm:min-h-[20rem] flex flex-col items-center justify-between">
                  <img
                  src={member.logo}
                  alt={`${member.name} logo`}
                  className="w-24 h-24 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                  {member.description}
                  </p>
              </div>
              </motion.div>
          ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default MembersCarousel;
