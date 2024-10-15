import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { TbFileCv } from 'react-icons/tb'

const Header = () => {
  return (
    // icons: 
    // git: FaGithub
    // linkedin:FaLinkedin 
    // mail: IoMdMail 
    // resume: TbFileCv  
    <div className="flex justify-end items-center pt-5 pr-5">
        <div className="flex text-gray-50 z-10">
            <a href="mailto:huzaifa_syed78@hotmail.com" data-rb-event-key="mailto:huzaifa_syed78@hotmail.com" className="px-2 hover:text-purple-100" title='email'>
                <IoMdMail size={'25px'} />
            </a>
            <a href="https://github.com/huzai4a" className="px-2 hover:text-purple-100" target='_blank' title='github'>
                <FaGithub size={'25px'} />
            </a>
            <a href="https://www.linkedin.com/in/hs2005/" className="px-2 hover:text-purple-100" target='_blank' title='linkedin'>
                <FaLinkedin size={'25px'} />
            </a>
            <a href="/assets/Huzaifa-Syed-Resume-2024.pdf" className="px-2 hover:text-purple-100" target='_blank' title='resume'>
                <TbFileCv size={'25px'} />
            </a>
        </div>
      </div>
  )
}

export default Header