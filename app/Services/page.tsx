import React from 'react'
import Image from 'next/image';

const Services = () => {
  return (
    <>
    <h2 className='skillheading'><span className='cspan'>Our</span> Services</h2>
    <div className='services'>
    <div className='sr-child'>
        <Image src="/code.png" alt="" height={70} width={70} />
        <h2>Web Development</h2>
        <p>We Offer full Stack and Responsive Websites Projects Services</p>
    </div>
    <div className='sr-child'>
        <Image src="/ux-design.png" alt="" height={70} width={70} />
        <h2>UX/UI Designing</h2>
        <p>We Offer Attractive and Modern User Interface Services</p>

    </div>
    <div className='sr-child'>
        <Image src="/layers.png" alt="" height={70} width={70} />
        <h2>Graphic Designing</h2>
        <p>We Offer Creative Visuals with the help of Designing Services</p>

    </div>
    <div className='sr-child'>
        <Image src="/video-editing-app.png" alt="" height={70} width={70} />
        <h2>Video Editing</h2>
        <p>We Offer Production Level Video Editing Services</p>

    </div>
    </div>
    </>
  )
}

export default Services;