import React from 'react';
import { Button } from 'antd';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
const FB_ID = process.env.REACT_APP_FB_APP_ID
const GOOGLE_ID = process.env.REACT_APP_GOOOGLE_ID

const Login = props => {
  const responseFacebook = (response) => {
    console.log('Facebook: ', response.name);
    console.log(FB_ID, GOOGLE_ID)
    props.history.replace("/profile")
    localStorage.setItem('name', response.name)
  }

  const responseGoogle = response => {
    console.log('Google response: ', response.profileObj.name)
    const name = response.profileObj.name
    props.history.replace("/profile")
    localStorage.setItem('name', name)
  }
  
  const responseFail = response => {
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
      <div className="login__button" style={{margin: "2rem", border: "none" }}>
      <Button href="/signup" type="danger" >Create free account</Button>
      </div>
    </div>
  );
}

export default Login;
