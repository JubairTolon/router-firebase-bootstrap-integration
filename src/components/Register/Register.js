import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Reister !!!</h3>
            <form>
                <input className='mb-2' type="text" placeholder='your name' /><br />
                <input type="email" className='mb-2' placeholder='your email' /><br />
                <input type="password" className='mb-2' placeholder='your password' /><br />
                <input type="submit" value='Register' />
            </form>
        </div>
    );
};

export default Register;