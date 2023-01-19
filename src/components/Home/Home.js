import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/banner.png';
import './Home.css';

const Home = () => {
    return (
        <section className='banner-container'>
            <div className='banner-info'>
                <p className='sale-up'><small>Sale up to 70% off</small></p>
                <h1 className='banner-tittle'>New Collection For Fall</h1>
                <p className='banner-detail'>Discover all the new arrivals of ready-to-wear collection.</p>
                <Link to={'/shop'}>
                    <button className='shop-btn'>
                    <span className='btn-name'>SHOP NOW</span>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </Link>
            </div>
            <div className='banner-image'>
                <img src={image} alt="Banner" />
            </div>
        </section>
    );
};

export default Home;