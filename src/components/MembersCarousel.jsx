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
import mangroveLogo from '../images/mangrove.png';
import westAfricaLogo from '../images/westafrica.png';



const members = [
  {
    name: 'Rainforest Builder',
    logo: rainforestLogo,
    description:
      ` Africa’s forests are among the world’s most important ‘carbon sinks’ mitigating climate change today. But with 
        more degraded tropical forest land  than any other continent, their restoration represents the  single most
        powerful tool  the world has to draw down carbon in pursuit of net zero. Africa’s  most degraded rainforest
        landscape  is the Upper Guinean Forest, where our first two projects are located, employing 2,000 people.`,
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
      `West Africa Blue is a community-centric developer of blue carbon projects in West Africa. Blue’s mission is to
      work hand-in-hand with local communities to preserve, restore, and sustainably manage coastal ecosystems across
      West Africa, financed through the issuance of high-quality carbon credits. Our project activities will help build
      resilience to climate change, limit greenhouse gas emissions from deforestation, protect endangered species,
      and support new economic opportunities – especially for women.`,
  },
  {
    name: 'DelAgua',
    logo: delaguaLogo,
    description:
      `With over 12 years’ experience, DelAgua is the leading cookstove carbon project developer across Africa and to
      date has provided 1.6 million stoves benefiting 7 million people. Trusted partnerships with governments, a
      high-performance stove integrated with education, delivered by local community workers and powered by technology
      to track stove usage ensures exceptional project impact and integrity. DelAgua has led the way with the very
      first Article 6 credits and has signed LoAs with all partner Governments.   `,
  },
  {
    name: 'Freetown the Treetown',
    logo: freetownLogo,
    description:
      `#FreetownTheTreetown is a climate adaptation initiative designed to restore and enhance Freetown’s ecological
      infrastructure in response to the growing climate crisis. Supported by the World Bank and Bloomberg Philanthropies,
      the program aims to plant 5 million trees by 2028 while creating sustainable, green jobs. A key feature of the
      initiative is its innovative community-led tree-growing model, which provides monetary incentives for residents
      to plant, track, and protect trees in climate-vulnerable areas.`,
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
              sm:min-h-[25rem] flex flex-col items-center justify-between my-3">
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
