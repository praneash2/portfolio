import React from 'react'
import './navbar.css';
export default function Navbar({HomeRef,AboutRef}) {
    

    const clickToScroll = (sectionRef)=>{
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='navbar-wrapper'>
            <div className='navbar-box-wrapper'>
            <h1 className='navbar-name'>Praneash</h1>

            <nav className="navbar-sections">
                <button className="navbar-links" name="home" onClick={()=>{clickToScroll(HomeRef)}}>Home</button>
                <button className="navbar-links" name="about" onClick={()=>{clickToScroll(AboutRef)}}>About</button>
                <button className="navbar-links" name="resume" onClick={()=>{clickToScroll(AboutRef)}}>Resume</button>
                <button className="navbar-links" name="projects" >Projects</button>
                <button className="navbar-links" name="contact" >Contact</button>
                <div className="phone-number">
                    <div className='phone-svg'>
                        call svg
                    </div>
                    <p>
                        +91 6380033567
                    </p>
                </div>
            </nav>
            </div>
           
        </div>
    )
}
