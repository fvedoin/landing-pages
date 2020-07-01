import React from 'react';

import './styles.css';

const Banner = () => {
    return (
        <section className="banner-area relative" id="home">
            <div className="overlay overlay-bg"></div>
            <div className="container">
                <div className="">
                    <div className="banner-content">
                        <h6 className="text-uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                        <h1>
                            Brand new template<br/> for you			
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis mi,<br/>
                            luctus vitae fringilla eget, aliquam ut mi.
                        </p>
                        <a href="#categories" className="btn text-uppercase">Explore our menu</a>
                    </div>											
                </div>
            </div>
        </section>
    );
};

export default Banner;