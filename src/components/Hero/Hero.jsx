import React from 'react';
import Profile from './me.png';
import tech1 from './html-icon.svg';
import tech2 from './react-js-icon.svg';
import './Hero.css'
const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>All our dreams can come true, if we have the courage to pursue them</h2>
            <p>
                FullStack Developer | AI  Enthusiast | Coder | Influencer<br/>
                
                
            </p>
            </div>

            <div className="hero-img">
                <div>
                <div className="tech-icon">
                    <img src={Profile} width={400} height={400} alt="" />
                </div>
                </div>
                
            </div>
    </section>
  )
}

export default Hero
