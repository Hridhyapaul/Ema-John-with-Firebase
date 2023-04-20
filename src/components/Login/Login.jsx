import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [show, setShow] = useState(false)
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const signedUser = result.user;
            console.log(signedUser);
            form.reset()
            navigate(from, {replace: true})
            setError('')
            setSuccess('Success! You are now logged in to your account.')
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show? "text" : "password"} name="password" id="password" placeholder="Password" required />
                    <p className='show-password' onClick={() => setShow(!show)}>
                        {
                            show ? <span>Hide password</span> : <span>Show password</span>
                        }
                    </p>
                </div>

                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='isAccount'>New to Ema-John? <Link className='login' to="/signUp">Create New Account</Link></p>
            {
                error ? <p className='error'>{error}</p> : <p className='success'>{success}</p>
            }
        </div>
    );
};

export default Login;