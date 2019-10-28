import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
const FB_ID = process.env.REACT_APP_FB_APP_ID
const GOOGLE_ID = process.env.REACT_APP_GOOOGLE_ID

const Login = () => {
  const responseFacebook = (response) => {
    console.log('Facebook: ', response);
    console.log(FB_ID, GOOGLE_ID)
  }

  const responseGoogle = (response) => {
    return (
      <div>
        <h2>`Welcome ${response.name}`</h2>
        <img alt="profile-pic" src={response.picture}/>
      </div>
    )
  }
  return (
    <div>
      <div style={{marginTop:"20px"}} className="">
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
          onFailure={responseGoogle}
        />
      </div>
    </div>
  );
}

export default Login;
