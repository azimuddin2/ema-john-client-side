import React from 'react';
import './SocialLogin.css';
import google from '../../images/google.png';

const SocialLogin = () => {
    return (
        <div className='social-login-container'>
            <div className='divider'>
                <div className='divider-left'></div>
                <p className='divider-text'>or</p>
                <div className='divider-right'></div>
            </div>
            <div className='social-login'>
                <button className='social-btn'>
                    <img src={google} alt="" />
                    <span className='social-text'>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;