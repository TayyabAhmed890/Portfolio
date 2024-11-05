import React from 'react'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Services from './Services/page'

const page = () => {
  return (
    <>
    <section>
    <Hero/>
    <Services/>
    <Projects/>
    <Skills/>
    <Contact/>
    </section>
    </>
  )
}

export default page