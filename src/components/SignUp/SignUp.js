import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/logo.png';

const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('Password should be 6 characters or more.!');
            return;
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
            })
            .catch((error) => {
                console.error(error);
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
                        <input type="password" name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm" required />
                    </div>
                    <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='form-link-title'>Already have an account? <Link className='form-link' to={'/login'}>Login</Link></p>
            </div>
        </section>
    );
};

export default SignUp;