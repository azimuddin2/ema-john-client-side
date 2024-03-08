import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo.svg';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { toast } from 'react-toastify';

const Header = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                toast.error(error.message);
            })
    };

    return (
        <>
            <nav className='header'>
                <Link to='/'>
                    <img src={logo} alt="Logo" />
                </Link>
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
                        {
                            user?.uid ?
                                (
                                    <button
                                        onClick={handleLogout}
                                        className='button'
                                    >
                                        Logout
                                    </button>
                                )
                                :
                                (
                                    <Link className='button' to="/login">Login</Link>
                                )
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