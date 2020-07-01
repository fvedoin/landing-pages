import React from 'react';
import {Map, TileLayer, Marker} from 'react-leaflet';
import {FiHome, FiPhone, FiMail} from 'react-icons/fi';

import './styles.css';

const Local = () => {
    return (
        <section id="map-area">
            <div className="container">
                <div className="contact-container">
                    <h6 className="text-uppercase">Neque porro quisquam est qui</h6>
                    <h1>
                        Contact
                    </h1>
                    <div className="single-contact-address">
                        <div className="icon">
                            <FiHome color="#d1ab7f" size="40"/>
                        </div>
                        <div className="contact-details">
                            <h5>Santa Maria - RS/Brazil</h5>
                            <p>
                                Example street, 1000
                            </p>
                        </div>
                    </div>
                    <div className="single-contact-address">
                        <div className="icon">
                            <FiPhone color="#d1ab7f" size="40"/>
                        </div>
                        <div className="contact-details">
                            <h5>(99) 99999-9999</h5>
                            <p>All day 24/7</p>
                        </div>
                    </div>
                    <div className="single-contact-address">
                        <div className="icon">
                            <FiMail color="#d1ab7f" size="40"/>
                        </div>
                        <div className="contact-details">
                            <h5>example@yourdomain.com</h5>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>					
                </div>
                <div>
                    <Map
                        center={[-29.711596, -53.7186837]}
                        zoom={12}
                    >
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-29.711596, -53.7186837]} title="I'm a marker!"/>
                    </Map>
                </div>
            </div>
        </section>
    );
};

export default Local;