import { aboutItems } from '@/data'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="border-2 border-yellow-400 border-solid grid grid-cols-1 sm:grid-cols-2 gap-4 text-white-50" id="about">
  {/* Title Row (Spans Full Width) */}
  <div className="col-span-2 border-2 border-green-500 border-solid">
    <h1 className="border-2 border-red-500 border-solid font-bold px-20 text-5xl">
      {aboutItems.header}
    </h1>
  </div>

  {/* First Column with Text */}
  <div className="flex flex-col justify-center m-10 border-2 border-blue-500 border-solid">
    <p className="text-lg text-gray-100">
      {aboutItems.desc}
    </p>
  </div>

  {/* Second Column with Image */}
  <div className="sm:flex hidden justify-center border-2 border-yellow-900 border-solid my-10 mx-2">
    <Image 
      src="/assets/me.jpg" 
      alt="Your description" 
      width={300} 
      height={200}
      className="object-cover rounded-lg shadow-lg drop-shadow-2xl"
    />
  </div>
</div>

  )
}

export default About