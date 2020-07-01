import React from 'react';

import './styles.css';

import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import c3 from '../../assets/c3.jpg';

const Categories = () => {
    return (
        <section className="item-category-area" id="categories">
            <div className="container">
                <div className="container-header">
                    <div className="header-text">
                        <h1>Available items category</h1>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>								
                <div className="category-list">
                    <div className="category-item">
                        <div className="single-cat-item">
                            <div className="thumb">
                                <img className="img-fluid" src={c1} alt=""/>
                            </div>	
                            <h4>Bread</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Nullam ultricies ornare<br/> fermentum. Sed non diam.
                            </p>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="single-cat-item">
                            <div className="thumb">
                                <img className="img-fluid" src={c2} alt=""/>
                            </div>	
                            <h4>Pizza</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Nullam ultricies ornare<br/> fermentum. Sed non diam.
                            </p>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="single-cat-item">
                            <div className="thumb">
                                <img className="img-fluid" src={c3} alt=""/>
                            </div>	
                            <h4>Pie</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Nullam ultricies ornare<br/> fermentum. Sed non diam.
                            </p>
                        </div>
                    </div>																		
                </div>
                <div className="container-action">
                    <a className="btn" href="#">All Items</a>
                </div>	
            </div>	
        </section>
    );
}

export default Categories;