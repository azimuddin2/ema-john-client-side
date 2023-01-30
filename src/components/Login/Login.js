import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const { signIn } = useContext(AuthContext);
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
                console.error(error);
            })
    }

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
                        <input type="password" name="password" required />
                    </div>
                    {/* <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p> */}
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='form-link-title'>New to Ema-john? <Link className='form-link' to={'/signup'}>Create New Account</Link></p>
            </div>
        </section>
    );
};

export default Login;