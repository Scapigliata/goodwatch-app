import React from 'react';

const Ratings = () => {
  const addStars = () => {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += `<svg height="25" width="25" class="star" onclick="rate(this);" data-stars="${i}">
      <polygon points="9.9,1.1 3.3,21.78 19.8,8.58 0,8.58 16.5,21.78" />
      </svg>`;
    }
    return stars;
  };
  
  return (
    addStars()
  )
}

export default Ratings;
