import React from 'react'
import Image from 'next/image'
import logo from "../images/iCON 7 1 (1).svg"


export default function Footer() {
  return (
    <>
        <section className='px-[130px] py-[98px] bg-primary'>
            <div className='flex gap-[243px] text-[16px]'>
                <div className='flex gap-2 items-center h-fit'>
                    <span>
                        <Image src={logo} width={0} height={0} alt='HelpMeOut logo' className='w-[40px] h-[40px]' />
                    </span>
                    <span className='sora text-white font-semibold'>
                        HelpMeOut
                    </span>
                </div>
                <div className='flex gap-[220px] text-white'>
                    <div className='flex flex-col gap-[24px]'>
                       <span className='sora font-semibold '>Menu</span>
                       <span><a href="#">Home</a></span>
                       <span><a href="#">Converter</a></span>
                       <span><a href="#">How it works</a></span>
                    </div>

                    <div className='flex flex-col gap-[24px]'>
                       <span className='sora font-semibold '>About Us</span>
                       <span><a href="#">About</a></span>
                       <span><a href="#">Contact us</a></span>
                       <span><a href="#">Privacy Policy</a></span>
                    </div>

                    <div className='flex flex-col gap-[24px]'>
                       <span className='sora font-semibold '>Screen Recorder</span>
                       <span><a href="#">Browser Window</a></span>
                       <span><a href="#">Desktop</a></span>
                       <span><a href="#">Application</a></span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
