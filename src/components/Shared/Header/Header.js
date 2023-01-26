import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

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
                        {
                            user ?
                                <button onClick={handleSignOut} className='button'>Logout</button>
                                :
                                <Link className='button' to="/login">Login</Link>
                        }
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