import React, {useState} from 'react';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

import useDocumentScrollThrottled from '../../utils/UseDocumentScrollThrottled';

import './styles.css';

import logo from '../../assets/logo.png';

const Navbar = () => {

    const [attachedClass, setAttachedClass] = useState('header-static');

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        //alert(previousScrollTop + ' - ' + currentScrollTop);

        if(currentScrollTop > previousScrollTop) {
            setAttachedClass('header-scrolled');
        }        

        if(currentScrollTop <= 30){
            setAttachedClass('header-static');
        }
    });

    return (
        <header id="header" className={attachedClass}>
            <div className="header-top">
                <div className="container">
                    <div className="header-top-left">
                        <div className="menu-social-icons">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>	    				  					
                    </div>
                    <div className="header-top-right">
                        <a className="btns" href="tel:+99 9999999999">(99) 99999-9999</a>
                        <a className="btns" href="mailto:example@yourdomain.com">example@yourdomain.com</a>		
                    </div>			  					
                </div>
            </div>
            <div className="container main-menu">
                <a href="#"><img src={logo} alt="Bakery" title="" /></a>		
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#categories">Categories</a></li>			  			          	          
                        <li><a href="#map-area">Contact</a></li>
                    </ul>
                </nav>	
            </div>
        </header>
    );
}

export default Navbar;