import React from 'react'
import './about.css';

export default function About({AboutRef}) {
  return (
    <div  ref={AboutRef} className='about-wrapper'>
      <div className='about-box-model-wrapper'>
        <h6 className='about-me'> About Me </h6>
        <div className='about-me-description-wrapper'> 
            <p className='about-me-description'>
              I’m a Full Stack Software Developer with expertise in both 
              frontend and backend technologies. I build efficient, scalable 
              web applications using modern frameworks and tools. Passionate 
              about solving problems and delivering high-quality solutions.
            </p>
            
        </div>
      </div>
    </div>
  )
}
