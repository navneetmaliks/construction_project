import React from 'react'
import Header from '../commonlayout/Header'
import Footer from '../commonlayout/Footer'
import Aboutcomon from '../commonlayout/Aboutcomon'

import Team from '../commonlayout/Team';
import Hero from '../commonlayout/Hero';

const About = () => {
  return (
    <>
    <Header/>
    <main>
      <Hero preHeading='Quality. Intigrity. Value' heading='About Us' text='We excel at transforming vision into reality through outstanding craftmanship and precise <br></br>attention to details. With years of experience and a dedication to quality ' />
        <Aboutcomon/>

        {/* ourteam */}

        <Team/>

    </main>
    <Footer/>
    </>
    
  )
}

export default About