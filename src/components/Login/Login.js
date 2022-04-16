import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login !</h2>
            <button className='btn btn-primary my-3' onClick={signInWithGoogle}>Google Sign In</button>
            <form>
                <input className='mb-2' type="email" placeholder='your email' /><br />
                <input className='mb-2' type="password" placeholder='your password' /><br />
                <input type="submit" value='Login' />
            </form>
        </div>
    );
};

export default Login;