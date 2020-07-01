import React from 'react';

import './styles.css';

import About from '../../components/About';
import Categories from '../../components/Categories';
import Local from '../../components/Local';
import Footer from '../../components/Footer/indes';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';

const Home = () => {
    return (
        <>
			<Navbar />
            <Banner />
			<About />
			<Categories />
			<Local />
			<Footer />
        </>
    );
};

export default Home;