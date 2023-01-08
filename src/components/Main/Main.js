import React from "react";
import "./Main.scss";

const Main = () => {
  function ChangePlaces() {
    console.log("test");
  }

  return (
    <div className="container-fluid">
      <div className="blog1">
        <div className="rendezVous">
          <p>Trouvez un rendez-vous</p>
          <div className="inputs">
            <div className="row">
              <div className="col">
                <div className="input">
                  <img
                    className="icon_input"
                    src="./images/icons/loop.svg"
                    alt=""
                  />
                  <input placeholder="Nom médecin,spécialité..." />
                </div>
              </div>
              <div className="col">
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
              <div className="col">
                <button>rechercher</button>
              </div>
            </div>
          </div>
        </div>
        <div className="medecinIdeal">
          <h2>comment trouver votre médecin idéal</h2>
          <div className="row steps">
            <div className="col-md-4 step3 hide">
              <p className="title">Etape 3</p>
              <img src="./images/blog1/date.svg" alt="date" />
              <p className="choosing">
                Choisissez quand souhaitez-vous avoir votre rendez-vous.
              </p>
              <button>Suivant</button>
            </div>
            <div className="col-md-4 step1">
              <p className="title">Etape 1</p>
              <img src="./images/blog1/search.svg" alt="date" />
              <p className="choosing">
                Choisissez quand souhaitez-vous avoir votre rendez-vous.
              </p>
              <button onClick={() => ChangePlaces()}>Suivant</button>
            </div>
            <div className="col-md-4 step2 hide">
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
      <div className="blog2">
        <div className="questions">
          <p>Questions médicale fréquemment posées</p>
          <div>
            <button className="button_question">
              <img src="./images/icons/question.svg" alt="question" />
              Poser un question
            </button>
            <button>Rechercher</button>
          </div>
        </div>
        <div className="row selectOption">
          <div className="col-md-4">
            <select>
              <option>Lorem Ipsum</option>
            </select>
            <select>
              <option>Lorem Ipsum</option>
            </select>
            <select>
              <option>Lorem Ipsum</option>
            </select>
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
          <div className="col-md-4">
            <select>
              <option>Lorem Ipsum</option>
            </select>
            <select>
              <option>Lorem Ipsum</option>
            </select>
            <select>
              <option>Lorem Ipsum</option>
            </select>
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
          <div className="col-md-4">
            <select>
              <option>Lorem Ipsum</option>
            </select>
            <select>
              <option>Lorem Ipsum</option>
            </select>
            <select>
              <option>Lorem Ipsum</option>
            </select>
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
        </div>
      </div>
      <div className="blog3 row">
        <div className="col-md-8">
          <p className="title">Vous êtes un médecin ?</p>
          <p className="subTitle">
            contactez-nous et nous nous occuperons de la création de votre
            compte.
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
      <div className="blog4 row">
        <div className="col-md-4">
          <img src="./images/blog4/Group 30.svg" alt="" />
        </div>
        <div className="col-md-8 protection">
          <p className="title">
            Nous vous protégeons, votre santé et vos données
          </p>
          <p>
            la sécurisation de vos données est notre priorité absolue, nous
            faisons ce qu'il faut pour protéger vos données personnelles et
            celles de vos patients.
          </p>
          <button>Savoir plus</button>
        </div>
      </div>
      <div className="blog5">
        <div className="row">
          <div className="col-md-6 d-flex">
            <p className="title">Vous avez une question ou une demande ?</p>
            <p>N'hésitez pas à nous contacter.</p>
          </div>
          <div className="col-md-6 button_contactez">
            <button>Contactez-nous</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
