import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import {auth, provider} from './Firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from './Reducer';

function Login() {

    const [state,dispatch] = useStateValue();

    const signIn = () => {
        
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);

            dispatch({
                
                    type :actionTypes.SET_USER,
                    user : result.user,
                

            })
        })
        .catch((error) => {
            alert(error.message);
        })
    
    }
    
    return (
        <div className="login">

            <div className="login__container">

                <img
                    src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png"
                    alt=""
                    />

                    <h1>Signin To InfoSnity</h1>
                    <p>Smart Information Sharing Software</p>
                    <Button className="login__button" onClick={signIn}>Signin With Google</Button>
            </div>
            
        </div>
    )
}

export default Login
