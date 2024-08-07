import React from 'react'
import './home.css';

export default function Home({HomeRef}) {
  return (
    <div ref={HomeRef} className='home-wrapper'>
      <div className='home-box-model-wrapper'>
        
        <div class="home-left-wrapper">
            <p>Hello, I'm</p>
            <h2>
              Praneash
            </h2>
            <p>
              Fullstack developer
            </p>
            <a className='hire-me-btn' href="mailto:praneash2@gmail.com">Hire me</a>
            
            <div className='home-contacts-wrapper'> 
              
              <a className='social-media-link' href="https://www.linkedin.com/in/praneash-k-54013121a/" target='_blank' rel="noreferrer">
                <div className='handles'></div> 
              </a>

              <a className='social-media-link' href="https://x.com/praneash_k" target='_blank' rel="noreferrer">
                <div className='handles'></div> 
              </a>
              
              <a className='social-media-link' href="https://x.com/praneash_k" target='_blank' rel="noreferrer">
                <div className='handles'></div> 
              </a>

              <a className='social-media-link' href="https://x.com/praneash_k" target='_blank' rel="noreferrer">
                <div className='handles'></div> 
              </a>
            </div>

        </div>
        <div className='home-right-wrapper'>
            <div className='home-dp'> 

            </div>
        </div>
      </div>
    </div>
  )
}
