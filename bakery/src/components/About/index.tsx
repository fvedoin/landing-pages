import React from 'react';

import './styles.css';

import aboutImg from '../../assets/about-img.png';

const About = () => {
    return (
        <section className="about-area">
            <div className="container">			
                <div className="about-text-left">
                    <h6 className="text-uppercase">Neque porro quisquam est qui</h6>
                    <h1>
                        All you need<br/>
                        about this bakery
                    </h1>
                    <p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut fringilla mi, sed molestie mauris. 
                        Sed dictum urna a elementum posuere. Nulla viverra rutrum augue, at vestibulum neque sollicitudin sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <a className="btn" href="#">Get Started Now</a>
                </div>
                <div className="about-image">
                    <img className="img-fluid" src={aboutImg} alt="" />
                </div>
            </div>	
        </section>
    );
}

export default About;