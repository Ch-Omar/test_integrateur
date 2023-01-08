import React from "react";
import "./Main.scss";
import RendezVous from "./RendezVous";
import Questions from "./Questions";
import ContactezNous from "./ContactezNous";
import Protégé from "./Protégé";
import CréationCompte from "./CréationCompte";

const Main = () => {
  return (
    <div className="container-fluid">
      <RendezVous />
      <Questions />
      <CréationCompte />
      <Protégé />
      <ContactezNous />
    </div>
  );
};

export default Main;
