import React from "react";
import "./Protégé.scss";

const Protégé = () => {
  return (
    <div className="blog4 row">
      <div className="col-md-4 col-12">
        <img src="./images/blog4/Group 30.svg" alt="" />
      </div>
      <div className="col-md-8 col-12 protection">
        <p className="title">
          Nous vous protégeons, votre santé et vos données
        </p>
        <p>
          la sécurisation de vos données est notre priorité absolue, nous
          faisons ce qu'il faut pour protéger vos données personnelles et celles
          de vos patients.
        </p>
        <button>Savoir plus</button>
      </div>
    </div>
  );
};

export default Protégé;
