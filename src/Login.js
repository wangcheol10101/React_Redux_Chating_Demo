import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

const Login = () => {
  const signin = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <video autoPlay muted loop className="login__video">
        <source
          src={require('./images/The_big.mp4').default}
          type="video/mp4"
        />
      </video>
      <div className="login__logo">
        <img src={require('./images/undraw_ideas.svg').default} alt="" />
        <h1>Message</h1>
      </div>
      <Button onClick={signin}>Sign in</Button>
    </div>
  );
};

export default Login;
