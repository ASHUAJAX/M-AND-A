import ButtonComp from '@/app/components/ButtonComp'
import React from 'react'

function HeroSec() {
  return (
    <div className='h-screen flex justify-between  bg-[#F5F5F0]'>
        <div className='flex-1 pl-5 mt-28 '>
            <h1 className='text-7xl font-extrabold  mb-3'>Make your own shirt​</h1>
            <p>&bull;&nbsp;  Beginner-friendly design methods</p>
            <p>&bull;&nbsp; Premium print-on-demand t-shirts</p>
            <p className='mb-7'>&bull;&nbsp; Fast shipping</p>
            <div>
                <ButtonComp classname='py-5' type={'button'} text='Browse our t-shirts'  />
            </div>
        </div>
        <div className='flex-1'>
            <img className='w-full h-full object-cover'  src="/home/heroImg.jpg" alt="" />
        </div>
    </div>
  )
}

export default HeroSec