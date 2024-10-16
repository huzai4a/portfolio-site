import React from 'react'

const Landing = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
          <h1 className="text-5xl sm:text-7xl  font-bold text-gray-100 dark:text-gray-50 font-sans">
            hi, i'm <span className='dark:text-purple-100'>huzaifa</span>.
          </h1>
          <h3 className='text-xl sm:text-2xl font-bold text-gray-100 dark:text-gray-100 py-1'>
            i like to make stuff.
          </h3>
          <p className='text-sm sm:text-base text-gray-100 dark:text-gray-100 flex text-justify max-w-xl px-2'>
          I'm a computer engineer from Toronto, Canada. My passion for web projects has given me hands-on experience contributing to innovative projects. I'm eager to make a difference in the tech industry, so feel free to reach out! 
          </p>
        </div>
  )
}

export default Landing