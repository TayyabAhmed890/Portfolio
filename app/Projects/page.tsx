import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <>
      <h1 className='skillheading'><span className='cspan'>My </span>Projects</h1>
    <div className='Projects'>
        <div className='p-child'>
          <h3>Project <span>1</span></h3>
          <Link className='para' href="https://fabricon-clothes.vercel.app/" target='_blank'><p>Fabricon Clothes</p></Link>
        </div>
        <div className='p-child'>
          <h3>Project <span>2</span></h3>
          <Link className='para' href="https://github.com/TayyabAhmed890/Node_Project00_Cli_Calculator_Typescript" target='_blank'><p>Cli-Calculator</p></Link>
        </div>
        <div className='p-child'>
          <h3>Project <span>3</span></h3>
          <Link className='para' href="https://milestone-final-resume-builder.vercel.app/" target='_blank'><p>Resume Builder</p></Link>
        </div>
        <div className='p-child'>
          <h3>Project <span>4</span></h3>
          <Link className='para' href="https://figma-css-seven.vercel.app/" target='_blank'><p>Figma Site</p></Link>
        </div>
    </div>
    </>
  )
}

export default Projects;