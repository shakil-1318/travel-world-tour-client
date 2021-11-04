import React from 'react';
import Button from 'react-bootstrap/Button'
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })

    }



    return (
        <div className='text-center w-50 mx-auto m-5'>
            <h1>Please Login:  {user.displayName}</h1>
            <Button onClick={handleGoogleLogIn} variant="primary">Google Sign In</Button>
        </div>
    );
};

export default Login;