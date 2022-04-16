import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header bg-secondary ' style={{ height: 50 }}>
            <nav className='' >
                <Link className='me-4 text-light text-decoration-none' to={'/'}>Home</Link>
                <Link className='me-4 text-light text-decoration-none' to={'/products'}>Products</Link>
                <Link className='me-4 text-light text-decoration-none' to={'/orders'}>Orders</Link>
                <Link className='me-4 text-light text-decoration-none' to={'/register'}>Register</Link>
                <span className='me-2'>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                        ?
                        <button className='btn btn-primary' onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link className='text-light text-decoration-none' to={'/login'}>Login</Link>}
            </nav>
        </div>
    );
};

export default Header;