import React from "react";
import "./Navbar.scss";

const NavBar = () => {
  return (
    <div>
      <img
        className="doctor"
        src="./images/home_page/Rectangle 119.png"
        alt="doctor"
      />
      <div className="header">
        <div className="logo_buttons">
          <span className="logo">LOGO</span>
          <div className="buttons">
            <button>vous êtes médecin</button>
            <button className="seconde">Se connecter</button>
          </div>
        </div>
        <div className="highLine">
          <div className="col-md-8">
            <h1>
              consultez un
              <div className="words">
                <span>médecin</span>
                <span style={{ color: "#5EBA24" }}>dentiste</span>
                <span>généraliste</span>
                <span style={{ color: "#5EBA24" }}>cardiologue</span>
                <span>opticien</span>
                <span style={{ color: "#5EBA24" }}>psychologue</span>
              </div>
              en qui vous avez confiance.
            </h1>
            <p>
              Nous éliminons les devinettes pour trouver un médecin dans votre
              région pour vous et votre famille.
            </p>
            <button>En savoir plus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
