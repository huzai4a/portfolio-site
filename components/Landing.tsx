import React from 'react'

const Landing = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center flex-col z-0">
          <h1 className="lg:text-7xl  font-bold text-gray-900 dark:text-white-50">
            hi, i'm <span className='dark:text-purple-100'>huzaifa</span>.
          </h1>
          <h3 className='lg:text-xl font-bold text-gray-500 dark:text-white-50'>
            I like to make stuff.
          </h3>
          <p className='lg:text-md font-bold text-gray-500 dark:text-white-200 flex text-center max-w-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur asperiores itaque fugit natus quia, quis incidunt quas iusto quod velit, ut facilis accusamus eum officiis minus modi maxime saepe exercitationem?
          </p>
        </div>
  )
}

export default Landing