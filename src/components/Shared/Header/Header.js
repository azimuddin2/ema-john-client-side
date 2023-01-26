import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='menu'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/shop">Shop</CustomLink>
                <CustomLink to="/order">Order</CustomLink>
                <CustomLink to="/inventory">Inventory</CustomLink>
                {
                    user ?
                        <button onClick={handleSignOut} className='button'>Logout</button>
                        :
                        <Link className='button' to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;