import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

import './styles.css';

import aboutImg from '../../assets/about-img.png';

const Footer = () => {
    return (
        <section className="footer-area">
            <div class="container">
                <div>
                    <div class="single-footer-widget">
                        <h6>Lorem ipsum</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet arcu non dictum fermentum.
                        </p>							
                    </div>
                </div>					
                <div class="social-widget">
                    <div class="single-footer-widget">
                        <h6>Follow us</h6>
                        <p>Vivamus mollis mollis faucibus. Suspendisse potenti.</p>
                        <div class="footer-social">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>	
                <div>
                    <h6>Credits</h6>
                    <p>
                        Copyright &copy; {new Date().getFullYear()} All rights reserved.
                        <br />
                        <span class="footer-text">By <a href="https://github.com/fvgarcia">Fernando Vedoin Garcia</a>.</span>
                    </p>								
                </div>	
            </div>
        </section>
    );
}

export default Footer;