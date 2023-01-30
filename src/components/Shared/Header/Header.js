import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo.svg';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <ul id='navbar' className={open ? '#navbar active' : '#navbar'}>
                        <li>
                            <CustomLink to="/">Home</CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/shop">Shop</CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/order">Order</CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/inventory">Inventory</CustomLink>
                        </li>
                        {/* {
                            user ?
                                <button onClick={handleSignOut} className='button'>Logout</button>
                                :
                                <Link className='button' to="/login">Login</Link>
                        } */}
                    </ul>
                </div>
                <div id='mobile' onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <FontAwesomeIcon className='fa-bars' icon={faTimes}></FontAwesomeIcon>
                            :
                            <FontAwesomeIcon className='fa-bars' icon={faBars}></FontAwesomeIcon>
                    }
                </div>
            </nav>
        </>
    );
};

export default Header;