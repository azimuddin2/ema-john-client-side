import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.png';

const Login = () => {
   

    return (
        <section className='container'>
            <div className='nav-logo'>
                <Link to='/'>
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className='form-container'>
                <h1 className='form-title'>Login</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    {/* <p style={{ color: 'red', textAlign: 'center' }}>{error?.message}</p> */}
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='form-link-title'>New to Ema-john? <Link className='form-link' to={'/signup'}>Create New Account</Link></p>
            </div>
        </section>
    );
};

export default Login;