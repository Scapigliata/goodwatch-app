import React from 'react';
const user = require('../assets/user.webp')

const Profile = () => (
  <div className="profile__container">
    <img src={user} alt="profile__img" className="profile__user"/> 
    <div className="profile__abstract">
    <h3>Name: Otter Beaverton</h3>
    <h3>Reviews: 10</h3>
    </div>
  </div>
)

export default Profile;
