import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(result => {})
        .catch(error => console.log(error.message))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order review">Order Review</Link>
                <Link to="/manage inventory ">Manage Inventory</Link>
                <Link to="/signUp">Sign Up</Link>
                {
                    user ? <span className='observer'>{user.email} <button onClick={handleLogOut} className='btn-signOut'>Log Out</button></span> : <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;