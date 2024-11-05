import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <>
    <h2 className='skillheading'><span className='cspan'>My</span> Skills</h2>
      <div className='Skills'>
        <div className='s-child'>
            <Image className='s-image' src="/htmllang.png" alt='' height={100} width={100}/>
          <h3>HTML</h3>
            <p>100%</p>
        </div>
        <div className='s-child'>
            <Image className='s-image' src="/csslang.png" alt='' height={100} width={100}/>
          <h3>CSS</h3>
            <p>100%</p>
        </div>
        <div className='s-child'>
        <Image className='s-image' src="/js.png" alt='' height={100} width={100}/>
          <h3>JavaScript</h3>
        <p>90%</p>
        </div>
        <div className='s-child'>
        <Image className='s-image' src="/ts.png" alt='' height={100} width={100}/>
          <h3>TypeScript</h3>
        <p>80%</p>
        </div>
        
    </div>
    </>
  )
}

export default Skills