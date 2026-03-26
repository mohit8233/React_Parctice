import React from 'react'
import heroImg from '../assets/heroImg.png'
import { Link } from 'react-router-dom'

const HeroSection = () => {

  const hero = [
    {
      title: "DISCOVER LUXURY TIMEPIECES",
      desc: "ELEVATE YOUR STYLE",
      btn: "Shop Now"
    }
  ]

  return (
    <section className='w-full relative'>

      {/* Image */}
      <div className='h-[250px] sm:h-[350px] md:h-[500px] lg:h-[576px] w-full'>
        <img 
          src={heroImg} 
          alt="hero" 
          className='w-full h-full object-cover'
        />
      </div>

      <div className='absolute inset-0 bg-black/50'></div>

      
      <div className='absolute inset-0 flex items-center px-6 md:px-16'>
        
        <div className='text-white max-w-xl'>
          
          <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4'>
            {hero[0].title}
          </h1>

          <p className='text-sm sm:text-base md:text-lg mb-6 text-gray-300'>
            {hero[0].desc}
          </p>

          <Link to='/shop' className='border border-white px-6 py-2 hover:bg-white hover:text-black transition'>
            {hero[0].btn}
          </Link>

        </div>

      </div>

    </section>
  )
}

export default HeroSection