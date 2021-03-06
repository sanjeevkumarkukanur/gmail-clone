import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {
    
    const dispatch = useDispatch();

    const signIn = ()=> {
        auth
        .signInWithPopup(provider)
        .then(({user}) =>{
            dispatch(
                login({
                displayName : user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        })
        .catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <div className="login__container">
            <img src='data:image/png;base64,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' alt=''
                />
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
            </div>        
        </div>
    )
}

export default Login
