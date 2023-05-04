import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/logo.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('Signup')
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/shop';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        // validate password
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Please provide at least two uppercase latter');
            return;
        }
        else if (password.length < 6) {
            setError('Password should be 6 characters or more.!');
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please add at least one special character');
            return
        }
        else if (password !== confirm) {
            setError('Your Password did not match.!');
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                toast.success('SignUp Successful')
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
                toast.error(error.message)
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
                <h1 className='form-title'>Sign Up</h1>
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
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type={showPassword ? "text" : "password"} name="confirm" required />
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
                    <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='form-link-title'>Already have an account? <Link className='form-link' to={'/login'}>Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default SignUp;