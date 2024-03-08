import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.png';
import './Home.css';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home');

    return (
        <section className='banner-container'>
            <div className='banner-image'>
                <img src={banner} alt="Banner" />
            </div>
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
        </section>
    );
};

export default Home;