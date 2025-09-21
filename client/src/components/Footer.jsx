import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      
      {/* Logo / Text */}
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 cursor-pointer'>
        PixelPrompt
      </h1>

      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
        Copyright @PixelPrompt | All right reserved.
      </p>

      <div className='flex gap-2.5'>
        {/* Facebook */}
        <a 
          href="https://www.facebook.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition transform hover:scale-110 hover:brightness-125"
        >
          <img 
            className='cursor-pointer' 
            src={assets.facebook_icon} 
            width={35} 
            alt="Facebook" 
          />
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/shami_1105/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition transform hover:scale-110 hover:brightness-125"
        >
          <img 
            className='cursor-pointer' 
            src={assets.instagram_icon} 
            width={35} 
            alt="Instagram" 
          />
        </a>

        {/* Twitter (X) */}
        <a 
          href="https://x.com/shami_70044" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition transform hover:scale-110 hover:brightness-125"
        >
          <img 
            className='cursor-pointer' 
            src={assets.twitter_icon} 
            width={35} 
            alt="Twitter" 
          />
        </a>

        {/* LinkedIn (SVG) */}
        <a 
          href="https://www.linkedin.com/in/md-shami-arzoo-4799a6295/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition transform hover:scale-110 hover:brightness-125"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="35" 
            height="35" 
            viewBox="0 0 24 24" 
            fill="#0A66C2" 
            className="cursor-pointer rounded"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
            2.761 2.239 5 5 5h14c2.761 0 5-2.239 
            5-5v-14c0-2.761-2.239-5-5-5zm-11 
            19h-3v-10h3v10zm-1.5-11.268c-.966 
            0-1.75-.784-1.75-1.75s.784-1.75 
            1.75-1.75 1.75.784 
            1.75 1.75-.784 1.75-1.75 
            1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 
            0-2.154 1.459-2.154 
            2.965v5.698h-3v-10h2.885v1.367h.041c.402-.762 
            1.381-1.563 2.843-1.563 
            3.041 0 3.6 2.002 3.6 4.604v5.592z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Footer
