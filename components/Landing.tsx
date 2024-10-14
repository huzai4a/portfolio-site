import React from 'react'

const Landing = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-full">
          <h1 className="text-5xl sm:text-7xl  font-bold text-gray-900 dark:text-white-50">
            hi, i'm <span className='dark:text-purple-100'>huzaifa</span>.
          </h1>
          <h3 className='text-xl sm:text-2xl font-bold text-gray-500 dark:text-gray py-1'>
            i like to make stuff.
          </h3>
          <p className='text-sm sm:text-base text-gray-500 dark:text-gray flex text-center max-w-xl px-2'>
          I'm a computer engineer from Toronto, Canada, currently studying at McMaster University with a passion for scaling impactful products. I have hands-on experience contributing to innovative projects and am eager to make a difference in the tech industry. 
          </p>
        </div>
  )
}

export default Landing