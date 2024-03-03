import React from 'react';
import './SocialLogin.css';
import google from '../../../images/google.png';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/shop';

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch((error) => {
            toast.error(error.message);
        })
    }

    return (
        <div className='social-login-container'>
            <div className='divider'>
                <div className='divider-left'></div>
                <p className='divider-text'>or</p>
                <div className='divider-right'></div>
            </div>
            <div className='social-login'>
                <button
                    onClick={handleSignInWithGoogle}
                    className='social-btn'
                >
                    <img src={google} alt="" />
                    <span className='social-text'>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;