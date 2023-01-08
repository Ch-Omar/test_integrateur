import React from "react";
import "./RendezVous.scss";

const RendezVous = () => {
  return (
    <div className="blog1">
      <div className="rendezVous">
        <p className="title">Trouvez un rendez-vous</p>
        <div className="inputs row">
          <div className="col-xxl-4 col-12">
            <div className="input">
              <img
                className="icon_input"
                src="./images/icons/loop.svg"
                alt=""
              />
              <input placeholder="Nom médecin,spécialité..." />
            </div>
          </div>
          <div className="col-xxl-4 col-12">
            <div className="input">
              <img
                className="icon_input"
                src="./images/icons/location.svg"
                alt=""
              />
              <input placeholder="Adresse" />
              <img
                className="icon_input icon_input_seconde"
                src="./images/icons/target.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-xxl-4 col-12">
            <button>rechercher</button>
          </div>
        </div>
      </div>
      <div className="medecinIdeal">
        <h2>comment trouver votre médecin idéal</h2>
        <div className="row steps">
          <div className="col-4 step3 hide">
            <p className="title">Etape 3</p>
            <img src="./images/blog1/date.svg" alt="date" />
            <p className="choosing">
              Choisissez quand souhaitez-vous avoir votre rendez-vous.
            </p>
            <button>Suivant</button>
          </div>
          <div className="col-4 step1">
            <p className="title">Etape 1</p>
            <img src="./images/blog1/search.svg" alt="date" />
            <p className="choosing">
              Choisissez quand souhaitez-vous avoir votre rendez-vous.
            </p>
            <button>Suivant</button>
          </div>
          <div className="col-4 step2 hide">
            <p className="title">Etape 2</p>
            <img src="./images/blog1/location.svg" alt="date" />
            <p className="choosing">
              Choisissez quand souhaitez-vous avoir votre rendez-vous.
            </p>
            <button>Suivant</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RendezVous;
