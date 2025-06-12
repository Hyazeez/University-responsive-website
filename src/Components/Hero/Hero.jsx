import React from 'react'
import './Hero.css';
import heroimage from '../../assets/images/students2.jpg';
import Forwardarrow from '../../assets/next.png';

const Hero = () => {
  return (
        <div className="hero">
            <img src={heroimage} alt="Hero Image" />
            <div className="hero-overlay">
            <div className="hero-text">
                <h1>We ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum shapes future leaders by blending academic excellence with real-world experience. We empower students with critical thinking, innovation, and leadership skills to thrive in a rapidly evolving world</p>
                <button className='btn'>Explore More<img src={Forwardarrow} alt='forward-arrow'/></button>
            </div>
            </div>
    </div>
  )
}

export default Hero;