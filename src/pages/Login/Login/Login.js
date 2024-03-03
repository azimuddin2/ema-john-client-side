import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const { signIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/shop';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message);
            })
    };

    return (
        <section className='container'>
            <div className='nav-logo'>
                <Link to='/'>
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className='form-container'>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type={showPassword ? "text" : "password"} name="password" required />
                        <p
                            className='show-password'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {
                                showPassword ?
                                    <FontAwesomeIcon className='text-gray-400' icon={faEyeSlash}></FontAwesomeIcon>
                                    :
                                    <FontAwesomeIcon className='text-gray-400' icon={faEye}></FontAwesomeIcon>
                            }
                        </p>
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='form-link-title'>New to Ema-john? <Link className='form-link' to={'/signup'}>Create New Account</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default Login;