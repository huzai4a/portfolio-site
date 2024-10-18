import React from 'react'
import { Card, Carousel } from './ui/apple-cards-carousel'
import Image from 'next/image'
import { projects } from '@/data';

const cards = projects.map((item, index) => (
  <Card key={item.src} card ={item} index={index} />
));

const Projects = () => {
  return (
    <div className='min-h-dvh max-w-dvw pb-20' id="projects">
      <div className="container">
        <h1 className="font-bold pl-5 lg:pl-20 text-5xl text-gray-50">
          &lt;projects /&gt;
        </h1>
        <div className="text-gray-50">
          <Carousel items={cards} />
          {/* fix fatness on mobile, click not fitting screen, hover on text not working */}
        </div>
      </div> 
    </div>
  )
}


export default Projects