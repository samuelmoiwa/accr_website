import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Banner from '../components/Banner'
import HomeIntro from '../components/HomeIntro'
import AboutUs from '../components/AboutUs'


const Home = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-screen h-full max-w-[130rem] flex justify-center items-center flex-col'>
        <Banner/>

        <div className='bg-gradient-to-b from-teal-100 via-white to-blue-100  w-full py-14 flex flex-col justify-center
          items-center justify-self-center'>
          <HomeIntro />
          <AboutUs/>
        </div>
      </div>
    </div>
  )
}

export default Home
