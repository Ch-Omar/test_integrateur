import React from "react";
import "./CréationCompte.scss";

const CréationCompte = () => {
  return (
    <div className="blog3 row">
      <div className="col-md-8">
        <p className="title">Vous êtes un médecin ?</p>
        <p className="subTitle">
          contactez-nous et nous nous occuperons de la création de votre compte.
        </p>
        <ul className="listOfLorem">
          <li>
            <img src="./images/icons/user.svg" alt="" />
            Lorem ipsum dolor sit amet consectetur. Vulputate platea platea
            facilisis.
          </li>
          <li>
            <img src="./images/icons/user.svg" alt="" />
            Lorem ipsum dolor sit amet consectetur. Vulputate platea platea
            facilisis.
          </li>
          <li>
            <img src="./images/icons/user.svg" alt="" />
            Lorem ipsum dolor sit amet consectetur. Vulputate platea platea
            facilisis.
          </li>
          <li>
            <img src="./images/icons/user.svg" alt="" />
            Lorem ipsum dolor sit amet consectetur. Vulputate platea platea
            facilisis.
          </li>
        </ul>
        <button>Contacter-nous</button>
      </div>
      <div className="col-md-4">
        <img src="./images/blog3/Group 29.svg" alt="" />
      </div>
    </div>
  );
};

export default CréationCompte;
