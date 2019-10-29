import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";

const ErrorPage = () => (
  <div classNam="error-page__container" style={{ padding: "2rem", fontSize: "20px" }}>
    <h3 classNam="error-page__header" style={{ color: "white" }} >Something Went Wrong!</h3>
    <h2 classNam="error-page__icon" className="errorIcons"><FontAwesomeIcon style={{ color: "white" }} icon={faSadCry} /></h2>
  </div>
)


export default ErrorPage;