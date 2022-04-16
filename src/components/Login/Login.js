import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';
import './Login.css'

const Login = () => {
    const auth = getAuth(app);
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h2>Please Login !</h2>
            <button className='btn btn-primary my-3' onClick={() => signInWithGoogle()}>Google Sign In</button>
            <form>
                <input className='mb-2' type="email" placeholder='your email' /><br />
                <input className='mb-2' type="password" placeholder='your password' /><br />
                <input type="submit" value='Login' />
            </form>
        </div>
    );
};

export default Login;