import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";

const ErrorPage = () => {
  return (
    <div>
    <h3>Something Went Wrong!</h3>
    <h2 className="errorIcons"><FontAwesomeIcon icon={faSadCry} /></h2>
    </div>
  )
}

export default ErrorPage;