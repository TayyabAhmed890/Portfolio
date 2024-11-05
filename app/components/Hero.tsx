import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
    <div className='Hero'>
        <div className='Content'>
            <h2>Tayyab Ahmed</h2>
            <h2>Frontend<span className='span'> Web Developer</span></h2>
            <button className='resume'><Link className='Link' href={"/cv updated.pdf"} target='_blank'>My Resume</Link></button>
            <div className='P-links'>
            <a href="https://github.com/TayyabAhmed890" target='_blank'><Image className='links' src="/github.png" alt="" height={40} width={40}/></a>
            <a href="https://www.linkedin.com/in/tayyab-ahmed-a83700246/" target='_blank'><Image className='links' src="/linkedin.png" alt="" height={40} width={40}/></a>
            </div>
        </div>
        <div className='Image'>
            <Image src="/js.png" alt="" height={300} width={300}/>
        </div>
    </div>
    </>
  )
}

export default Hero