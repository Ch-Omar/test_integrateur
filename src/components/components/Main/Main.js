import React, { useState } from "react";
import "./Main.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Main = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplayTimeout: 1500,
    smartSpeed: 450,
    autoplay: false,
  };
  const [optionss, setOptionss] = useState(options);

  function ChangePlaces() {
    setOptionss({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplayTimeout: 1500,
      smartSpeed: 450,
      autoplay: true,
    });
  }

  return (
    <div className="container-fluid">
      <div className="blog1">
        <div className="medecinIdeal">
          <h2>comment trouver votre médecin idéal</h2>
          {/* <div className="row steps"> */}
          <OwlCarousel
            id="customer-testimonoals"
            className="owl-carousel owl-theme owl-loaded"
            {...optionss}
          >
            <div>
              <p className="title">Etape 1</p>
              <img src="./images/blog1/search.svg" alt="date" />
              <p className="choosing">
                Choisissez quand souhaitez-vous avoir votre rendez-vous.
              </p>
              <button onClick={() => ChangePlaces()}>Suivant</button>
            </div>
            <div>
              <p className="title">Etape 2</p>
              <img src="./images/blog1/location.svg" alt="date" />
              <p className="choosing">
                Choisissez quand souhaitez-vous avoir votre rendez-vous.
              </p>
              <button onClick={() => ChangePlaces()}>Suivant</button>
            </div>
            <div>
              <p className="title">Etape 3</p>
              <img src="./images/blog1/date.svg" alt="date" />
              <p className="choosing">
                Choisissez quand souhaitez-vous avoir votre rendez-vous.
              </p>
              <button onClick={() => ChangePlaces()}>Suivant</button>
            </div>
          </OwlCarousel>
          {/* </div> */}
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
