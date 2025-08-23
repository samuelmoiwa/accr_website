import React from 'react'
import Banner from '../components/Banner'
import HomeIntro from '../components/HomeIntro'
import AboutUs from '../components/AboutUs'
import CallToAction from '../components/CallToAction'
import CarbonDevelopment from '../components/CarbonDevelopment'
import MembersCarousel from '../components/MembersCarousel'
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full h-full max-w-[130rem] flex justify-center items-center flex-col'>

        <div id="home" className="w-full">
          <Banner />
        </div>

        <div className='bg-gradient-to-b from-teal-100 via-white to-blue-100 w-full pt-14 flex flex-col justify-center items-center'>
          <div id="home-info" className="w-full">
            <HomeIntro />
          </div>
          <div id="about-us" className="w-full">
            <AboutUs />
          </div>
          <CallToAction />
        </div>

        <div id="what-is-carbon-development" className="w-full">
          <CarbonDevelopment />
        </div>
        <div id="our-members" className="w-full">
          <MembersCarousel />
        </div>
        <div id="contact-us" className="w-full">
          <ContactUs />
        </div>
      </div>
    </div>
  )
}

export default Home
