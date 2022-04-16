import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header bg-secondary' style={{ height: 30 }}>
            <nav className='' >
                <Link className='me-4 text-light text-decoration-none' to={'/'}>Home</Link>
                <Link className='text-light text-decoration-none' to={'/login'}>Login</Link>
            </nav>
        </div>
    );
};

export default Header;