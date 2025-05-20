import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHandshake, faSeedling } from '@fortawesome/free-solid-svg-icons';
import back_1 from '../asset/back_1.png';

const Card = ({ icon, heading, details }) => (
  <div className="flex flex-col items-center text-center p-6 shadow-xl shadow-blue-300  rounded-br-[5rem] bg-white m-4">
    {icon}
    <h2 className="text-xl font-bold text-green-900 mt-2">{heading}</h2>
    <p className="text-gray-700  mt-2">{details}</p>
  </div>
);

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex lg:flex-row flex-col lg:mt-10 mt-0 max-w-[80rem]">
        <div className="lg:w-1/2 w-full grid sm:grid-cols-2 sm:grid-rows-2 lg:px-0 px-4">
          <div className="flex flex-col justify-start">
            <h1 className="text-start text-green-900 sm:pt-[10rem] font-poppins font-bold sm:text-3xl text-xl">
              About Us
            </h1>
            <p className="text-gray-700  lg:text-base text-sm text-start sm:py-0 py-6">
              The Association of Carbon Conservation and Reforestation (ACCR) was founded in 2024 to unite
              Sierra Leone’s major private sector carbon developers under one voice. Representing the private sector,
              ACCR engages in discussions and consultations with stakeholders to shape the future of carbon
              finance in Sierra Leone.
            </p>
          </div>

          <Card
            icon={<FontAwesomeIcon icon={faLeaf} className="text-5xl text-green-600 mb-4" />}
            heading="Sustainability"
            details="We drive nature-based solutions that restore ecosystems while securing long-term economic benefits."
          />
          <Card
            icon={<FontAwesomeIcon icon={faHandshake} className="text-5xl text-blue-600 mb-4" />}
            heading="Collaboration"
            details="By partnering with government and stakeholders, we aim for fairness, transparency, and inclusion in carbon development."
          />
          <Card
            icon={<FontAwesomeIcon icon={faSeedling} className="text-5xl text-yellow-400 mb-4" />}
            heading="Growth & Equity"
            details="Our vision is a greener Sierra Leone where communities thrive through job creation, restored livelihoods, and global climate impact."
          />
        </div>

        <div
          className="lg:w-1/2 bg-cover bg-center bg-no-repeat sm:px-0 px-3 lg:py-0 py-10"
          style={{ backgroundImage: `url(${back_1})` }}
        >
          <h1 className="text-center text-green-900  py-10 font-poppins font-bold sm:text-3xl text-xl">
            Our Commitment
          </h1>
          <p className="sm:px-10 text-gray-600 font-Poppins text-xl">
            ACCR is committed to ensuring that Sierra Leone maximizes its potential as a global leader in climate
            finance, driving sustainable growth while preserving its rich natural heritage.
          </p>

          {[
            {
              title: 'Transparent Framework',
              description: 'We advocate for an equitable structure for carbon development projects that benefits all stakeholders.',
            },
            {
              title: 'Government Partnership',
              description: 'ACCR collaborates with national institutions to shape impactful climate policy and project execution.',
            },
            {
              title: 'Global Climate Role',
              description: 'We position Sierra Leone as a climate finance frontrunner while protecting biodiversity and local communities.',
            },
          ].map((item, index) => (
            <p key={index} className="flex flex-row mt-5 ml-7">
              <svg
                className="w-14 h-14 text-green-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm13.7-1.3a1 1 0 0 0-1.4-1.4L11 12.6l-1.8-1.8a1 1 0 0 0-1.4 1.4l2.5 2.5c.4.4 1 .4 1.4 0l4-4Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="sm:px-5 text-gray-500 font-Poppins text-lg">
                <span className="text-blue-950 font-medium">{item.title}</span> <br />
                {item.description}
              </p>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
