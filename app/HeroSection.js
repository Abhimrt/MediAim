import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='center basis-2 my-10 ' >
      {/* left content */}
      <div className='text-center w-full md:w-1/2'>
        <h1 className="mb-4 text-3xl capitalize font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl ">We believe in you and your abilities.</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">Are you ready to contribute significantly in the area of Education, Health and Environment (EHE)</p>
      </div>
      {/* right image */}
      <Image src={"/images/hero.png"} className='w-1/2 hidden md:block' width={500} height={250} />
    </div>
  )
}

export default HeroSection