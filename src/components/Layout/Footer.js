import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row  hide">
        <div className="col-xl-4 col-12">
          <span className="logo">LOGO</span>
        </div>
        <div className="col-xl-8 col-12 row">
        <div className="col-md-3">
          <p className="title">À propos</p>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div className="col-md-3">
          <p className="title">Spécialistes</p>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div className="col-md-3">
          <p className="title">Patient</p>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div className="col-md-3">
          <p className="title">Recherches fréquentes</p>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        </div>
      </div>
      <div className="mobile">
        <span className="logo">LOGO</span>
        <div className="socialMedia">
          <img src="./images/social_media/twitter.svg" alt="twitter" />
          <img src="./images/social_media/facebook.svg" alt="facebook" />
          <img src="./images/social_media/instagram.svg" alt="instagram" />
          <img src="./images/social_media/linkedin.svg" alt="linkedin" />
        </div>
        <div className="row">
          <div className="col-6">
            <p className="title">À propos</p>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div className="col-6">
            <p className="title">Patient</p>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div className="col-6">
            <p className="title">Recherches fréquentes</p>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div className="col-6">
            <p className="title">Spécialistes</p>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <p>
          &copy; {new Date().getFullYear()} - {new Date().getFullYear() + 1} -
          XtendPlex
        </p>

        <p>Informations légales</p>
        <div className="socialMedia hide">
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
