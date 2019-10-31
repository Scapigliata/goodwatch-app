import React from 'react';

const SignUp = () => {
  return (
    <div>
      <div className="signup__container">
        <div className="signup__box1">
          <div className="signup__logo">
          </div>
          <div className="signup__main-text"> <h1>WHY SIGN UP?</h1></div>
          <div>
            <ul>
              <li>Organise all your API develoment within Postman Workspaces</li>
              <li>Sync your Postman data across devices</li>
              <li>Backup your data to the Postman Cloud </li>
              <li>It's free!</li>
            </ul>
          </div>
          <img alt="astronaut" className="signup__astronaut" src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" />
        </div>
        <div className="signup__box2">
          <div className="signup__boxx">
            <h1>Create Account</h1>
            <form className="signup__form">
              <div className="signup__email-container">
                <div>Email</div>
                <input className="signup__input"/>
              </div>
              <div className="signup__username-container">
                <div>Username</div>
                <input className="signup__input signup__username" />
              </div>
              <div className="signup__password-container">
                <div>Password</div>
                <input className="signup__input"/>
              </div>
              <div className="signup__checkbox-container">
                <input type="checkbox" /> Remember me
              </div>
              <div className="signup__buttons-container">
                <button className="signup__account">Create free account</button>
                <hr />
                <div>
                  <button className="signup__google">Sign up with Google</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
