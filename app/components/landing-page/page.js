import React from 'react'
import Image from 'next/image'
import Nav from '../nav/page'

import img_1 from "../images/AdobeStock_400053098 1.png";
import img_2 from "../images/AdobeStock_362497671 1.png";
import img_3 from "../images/woman-using-smartphone-technology 2.png";
import dot from "../images/dot.svg"
import circleSvg from "../images/record-circle.svg"
import send from "../images/send-2.svg"
import square from "../images/refresh-square-2.svg"
import video_repo from "../images/Video Repository.png"
import demo_vid from "../images/Screenshot 2023-10-01 220003.png"
import Footer from '../footer/page';

export default function LandingPage() {
  return (
    <>
      {/* BANNER */}
      <section className='relative'>
        <div className='w-screen h-screen '>
         <div className='absolute top-0'>
         <Nav  />
         </div>
          <div className='flex items-center justify-between w-full h-full px-[100px]'>
              <div className='w-[548px]'>
                  <h1 className='sora text-[64px] mb-[20px] leading-[64px]'>Show Them Don&quot;t Just Tell</h1>
                  <h4 className='inter text-[20px] mb-[48px] leading-[28px]'>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</h4>
                  <button className='px-[24px] py-[22px] rounded-[8px] bg-primary text-white'>Install HelpMeOut <span className='text-lg'>&rarr;</span></button>
              </div>
              <div className='w-[50%] flex gap-5 relative'>

                {/* DOT SVG RIGHT TOP */}
              <div className='absolute gap-4 -top-[50px] -right-[50px] w-[300px] h-[300px] -z-20 flex justify-between flex-wrap opacity-40'>
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
              </div>

              {/* DOT SVG LEFT BOTTOM */}
              <div className='absolute gap-4 -bottom-[50px] -left-[50px] w-[300px] h-[300px] -z-20 flex justify-between flex-wrap opacity-10'>
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
                <Image src={dot} alt='dot' className='opacity-50 ' />
              </div>
              


                <div className='flex flex-col gap-5'>
                      <Image src={img_1} alt='Banner image one' className='rounded-[8px]'  />
                      <Image src={img_2} alt='Banner image two' className='rounded-[8px]'  />
                </div>
                <div className=''>
                  <Image src={img_3} alt='Banner image two'  className='rounded-[8px]'  />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section id='feature' className='flex items-center w-screen h-screen bg-[#F4F6F8] '>
          <div className='w-full bg-white px-[100px] py-[80px]'>
              <div className='text-center mb-[64px]'>
                <h1 className='sora text-[40px]'>Features</h1>
                <h4 className='work-sans text-[20px] text-[#616163] leading-[38.6px] tracking-wide'>Key Highlights of Our Extension</h4>
              </div>

              <div className='flex'>
                <div className='w-[50%] flex flex-col gap-[48px] '>
                    <div className='flex gap-3 w-[80%]'>
                      <span className='bg-primary min-w-[45px] h-[45px] rounded-full flex items-center justify-center mt-2'> 
                        <Image src={circleSvg} alt='circle svg' />
                      </span>
                      <span>
                          <h1 className='text-[28px] inter font-semibold'>Simple Screen Recording</h1>
                          <h4 className='work-sans text-[20px]'>Effortless screen recording for everyone. Record with ease, no tech expertise required.</h4>
                      </span>
                    </div>

                    <div className='flex gap-3 w-[80%]'>
                      <span className='bg-primary min-w-[42px] h-[42px] rounded-full flex items-center justify-center mt-2'> 
                        <Image src={send} alt='circle svg' />
                      </span>
                      <span>
                          <h1 className='text-[28px] inter font-semibold'>Easy-to-Share URL</h1>
                          <h4 className='work-sans text-[20px]'>Share your recordings instantly with a single link. No attachments, no downloads.</h4>
                      </span>
                    </div>

                    <div className='flex gap-3 w-[80%]'>
                      <span className='bg-primary min-w-[42px] h-[42px] rounded-full flex items-center justify-center mt-2'> 
                        <Image src={square} alt='circle svg' />
                      </span>
                      <span>
                          <h1 className='text-[28px] inter font-semibold'>Revisit Recordings</h1>
                          <h4 className='work-sans text-[20px]'>Access and review your past content effortlessly. Your recordings, always at your fingertips.</h4>
                      </span>
                    </div>
                </div>

                <div>
                      <Image src={video_repo} alt='Video repo' />
                </div>
              </div>
          </div>
      </section>

      {/* HOW IT WORKS */}
      <section className='flex items-center justify-center w-screen h-screen mb-16'>
        <div className='w-full text-center mt-[103px]'>
            <h1 className='text-[40px] sora'>How it works</h1>

            <div className='px-[100px] flex gap-[83px] mt-[59px] justify-center'>
                <div className='w-[358px] gap-[32px]  flex flex-col items-center' >
                  <span className='bg-primary min-w-[45px] max-w-[45px] h-[45px] rounded-full flex items-center justify-center mt-2 text-white text-[32px]'>1</span>

                  <div className='flex flex-col gap-[16px]'>
                    <h1 className="inter text-[28px] text-primary font-semibold">Record Screen</h1>
                    <span className='work-sans text-[20px] leading-[30.26px]'>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</span>
                    <div className='w-full'>
                      <Image src={demo_vid} width={0} height={0} alt="demo vid" className='w-full h-[250px]' />
                    </div>
                  </div>

                  
                </div>
                <div className='w-[358px] gap-[32px]  flex flex-col items-center' >
                  <span className='bg-primary min-w-[45px] max-w-[45px] h-[45px] rounded-full flex items-center justify-center mt-2 text-white text-[32px]'>2</span>

                  <div className='flex flex-col gap-[16px]'>
                    <h1 className="inter text-[28px] text-primary font-semibold">Share Your Recording</h1>
                    <span className='work-sans text-[20px] leading-[30.26px]'>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</span>
                    <div className='w-full'>
                      <Image src={demo_vid} width={0} height={0} alt="demo vid" className='w-full h-[250px]' />
                    </div>
                  </div>

                  
                </div>
                
                
                <div className='w-[358px] gap-[32px]  flex flex-col items-center' >
                  <span className='bg-primary min-w-[45px] max-w-[45px] h-[45px] rounded-full flex items-center justify-center mt-2 text-white text-[32px]'>3</span>

                  <div className='flex flex-col gap-[16px]'>
                    <h1 className="inter text-[28px] text-primary font-semibold">Learn Effortlessly</h1>
                    <span className='work-sans text-[20px] leading-[30.26px]'>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</span>
                    <div className='w-full'>
                      <Image src={demo_vid} width={0} height={0} alt="demo vid" className='w-full h-[250px]' />
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
