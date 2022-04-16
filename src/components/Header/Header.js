import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css'


const auth = getAuth(app);
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='header bg-secondary ' style={{ height: 50 }}>
            <nav className='' >
                <Link className='me-4 text-light text-decoration-none' to={'/'}>Home</Link>
                <Link className='me-4 text-light text-decoration-none' to={'/products'}>Products</Link>
                <Link className='me-4 text-light text-decoration-none' to={'/orders'}>Orders</Link>
                <Link className='me-4 text-light text-decoration-none' to={'/register'}>Register</Link>
                {
                    user && <>
                        <Link className='me-4 text-light text-decoration-none' to={'/vip'}>VIP</Link>
                    </>
                }
                <span className='me-2'>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                        ?
                        <button className='btn btn-primary' onClick={() => signOut(auth)}>Sign Out</button>
                        :
                        <Link className='text-light text-decoration-none' to={'/login'}>Login</Link>}
            </nav>
        </div>
    );
};

export default Header;