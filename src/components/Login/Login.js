import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import './Login.css'

const Login = () => {
    const auth = getAuth(app);
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <h2>Please Login !</h2>
            <button className='btn btn-primary my-3' onClick={handleGoogleSignIn}>Google Sign In</button>
            <form>
                <input className='mb-2' type="email" placeholder='your email' /><br />
                <input className='mb-2' type="password" placeholder='your password' /><br />
                <input type="submit" value='Login' />
            </form>
        </div>
    );
};

export default Login;