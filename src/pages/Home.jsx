import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Banner from '../components/Banner'


const Home = () => {
  return (
    <div className='w-screen h-full flex justify-center items-center flex-col'>
      <Banner/>

    <div className='bg-green-100 w-10/12 py-14 flex justify-center
      items-center justify-self-center rounded-md mt-52 mb-10'>
      <h1 className='font-bold text-lg text-teal-500'>
        Home 2
      </h1>
    </div>
    </div>

  )
}

export default Home
