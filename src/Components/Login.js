import React from 'react';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
const FB_ID = process.env.REACT_APP_FB_APP_ID
const GOOGLE_ID = process.env.REACT_APP_GOOOGLE_ID

const Login = (props) => {
  const responseFacebook = (response) => {
    console.log('Facebook: ', response);
    console.log(FB_ID, GOOGLE_ID)
  }

  const responseGoogle = (response) => props.history.replace("/")
  
  const responseFail = (response) => {
    console.log('no')
  }

  return (
    <div>
      <div style={{ marginTop: "20px" }} className="">
        <FacebookLogin
          appId='531314270986867'
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <br />
        <br />
        <GoogleLogin
          clientId={GOOGLE_ID}
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseFail}
        />
      </div>
    </div>
  );
}

export default Login;
