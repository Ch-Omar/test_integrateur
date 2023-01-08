import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-4">
          <span className="logo">LOGO</span>
        </div>
        <div className="col-md-2">
          <p className="title">À propos</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className="col-md-2">
          <p className="title">Spécialistes</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className="col-md-2">
          <p className="title">Patient</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
        <div className="col-md-2">
          <p className="title">Recherches fréquentes</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between align-items-center copyright">
        <p>
          &copy; {new Date().getFullYear()} - {new Date().getFullYear() + 1} -
          XtendPlex
        </p>

        <p>Informations légales</p>
        <div className="socialMedia">
          <img src="./images/social_media/twitter.svg" alt="twitter" />
          <img src="./images/social_media/facebook.svg" alt="facebook" />
          <img src="./images/social_media/instagram.svg" alt="instagram" />
          <img src="./images/social_media/linkedin.svg" alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
