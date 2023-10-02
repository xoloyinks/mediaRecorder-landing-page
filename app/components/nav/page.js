import React from 'react'
import Image from 'next/image'
import logo from "../images/logo.svg"

export default function Nav() {
  return (
    <>
        <section className='w-screen items-center flex justify-between px-[100px] py-[24px] nav'>
            <div className='flex gap-2 items-center'>
                <span>
                    <Image src={logo} width={0} height={0} alt='HelpMeOut logo' className='w-[40px] h-[40px]' />
                </span>
                <span className='sora text-primary font-semibold'>
                    HelpMeOut
                </span>
            </div>
            <div className='px-[20px] py-[10px] flex gap-[40px] tracking-wider'>
                <span className='text-[16px] font-semibold'><a href="#">Features</a></span>
                <span className='text-[16px] font-semibold'><a href="#">How it Works</a></span>
            </div>
            <div className='text-[16px] text-[#120B48] font-semibold px-[40px] py-[16px]'>
                Get Started
            </div>
        </section>
    </>
  )
}
