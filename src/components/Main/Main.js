import React from "react";
import "./Main.scss";
import RendezVous from "./RendezVous";
import Questions from "./Questions";
import ContactezNous from "./ContactezNous";
import Protége from "./Protége";
import CréationCompte from "./CréationCompte";

const Main = () => {
  return (
    <div className="container-fluid">
      <RendezVous />
      <Questions />
      <CréationCompte />
      <Protége />
      <ContactezNous />
    </div>
  );
};

export default Main;
