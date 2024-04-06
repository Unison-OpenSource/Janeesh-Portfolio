import React from 'react';
import Profile from './me.jpg';
import tech1 from './html-icon.svg';
import tech2 from './react-js-icon.svg';
import './Hero.css'
const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Work On Progress Will End Before April 10</h2>
            <p>
                FullStack Developer | Enthusiast
            </p>
            </div>

            <div className="hero-img">
                <div>
                <div className="tech-icon">
                    <img src={Profile} width={300} height={300} alt="" />
                </div>
                </div>
                <div className="tech1-icon">
                        <img src={tech1} width={40} height={40} alt="" />
                    </div>
                <div className="tech1-icon">
                    <img src={tech1}  width={40} height={40} alt="" />
                </div>
                <div className="tech2-icon">
                    <img src={tech2}  width={40} height={40} alt="" />
                </div>
                <div className="tech2-icon">
                    <img src={tech2}  width={40} height={40} alt="" />
                </div>
            </div>
    </section>
  )
}

export default Hero
