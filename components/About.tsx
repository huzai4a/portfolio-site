import { aboutItems } from "@/data"
import Image from "next/image"
import React from "react"
import { TbPointFilled } from "react-icons/tb"

const About = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 text-gray-50 h-full" id="about">
  {/* Title Row (Spans Full Width) */}
  <div className="col-span-12">
    <h1 className="font-bold pl-5 lg:pl-20 text-5xl">
      {aboutItems.header}
    </h1> 
  </div>

  {/* First Column with Text */}
<div className="flex flex-col justify-center align-middle m-5 sm:my-14 sm:ml-5 lg:ml-20 col-span-12 sm:col-span-7">
  <p className="text-base sm:text-lg text-justify text-gray-100">
    Currently, I&apos;m going through my second year of computer engineering at <a target="_blank" href="https://www.eng.mcmaster.ca/ece/degree-options/computer-engineering/" className="text-purple-100 font-medium underline decoration-navy-50 hover:decoration-purple-100 hover:decoration-solid">McMaster University</a>. A couple courses that I find really helpful in projects include data structures & algorithms and object oriented programming.
    <br /> <br />
    In terms of code, some of the technologies I&apos;ve used so far include:
    <br />
  </p>

  <ul className="tech-stack list-none flex flex-wrap justify-start m-5 text-gray-100">
    <div className="mr-5 mb-3">
      {/* could add to each li: hover:decoration-purple-150 hover:underline hover:cursor-default */}
      <li className="flex items-center">
        <TbPointFilled className="mr-2 text-purple-100 " /> React.js
      </li>
      <li className="flex items-center">
        <TbPointFilled className="mr-2 text-purple-100 " /> Python
      </li>
      <li className="flex items-center">
        <TbPointFilled className="mr-2 text-purple-100 " /> TypeScript
      </li>
      <li className="flex items-center">
        <TbPointFilled className="mr-2 text-purple-100 " /> JavaScript
      </li>
      <li className="flex items-center">
        <TbPointFilled className="mr-2 text-purple-100 " /> Next.js
      </li>
    </div>
    <div className="mr-5 mb-3">
      <li className="flex items-center">
        <TbPointFilled className="mr-2 text-purple-100 " /> Java
      </li>
      <li className="flex items-center">
        <TbPointFilled className="mr-2 text-purple-100 " /> SQL
      </li>
      <li className="flex items-center">
        <TbPointFilled className="mr-2 text-purple-100 " /> C++
      </li>
      <li className="flex items-center">
        <TbPointFilled className="mr-2 text-purple-100 " /> TensorFlow
      </li>
      <li className="flex items-center">
        <TbPointFilled className="mr-2 text-purple-100 " /> Flask
      </li>
    </div>
  </ul>

  <p className="text-base sm:text-lg text-justify text-gray-100">
    {aboutItems.desc2}
  </p>
</div>


  {/* Second Column with Image */}
  <div className="sm:flex hidden justify-center col-span-5 my-14 mx-2">
    <Image 
      src={aboutItems.img} 
      alt={aboutItems.alt} 
      width={aboutItems.width} 
      height={aboutItems.height}
      className="object-cover rounded-lg shadow-lg drop-shadow-2xl"
    />
  </div>
</div>

  )
}

export default About