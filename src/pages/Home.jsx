import React from 'react'
import Banner from '../components/Banner'
import HomeIntro from '../components/HomeIntro'
import AboutUs from '../components/AboutUs'
import CallToAction from '../components/CallToAction'
import CarbonDevelopment from '../components/CarbonDevelopment'
import MembersCarousel from '../components/MembersCarousel'

const Home = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-screen h-full max-w-[130rem] flex justify-center items-center flex-col'>
        <Banner/>

        <div className='bg-gradient-to-b from-teal-100 via-white to-blue-100 w-full pt-14 flex flex-col justify-center
          items-center justify-self-center'>
          <HomeIntro />
          <AboutUs/>
          <CallToAction/>
        </div>

        <CarbonDevelopment/>
        <MembersCarousel />
      </div>

    </div>
  )
}

export default Home
