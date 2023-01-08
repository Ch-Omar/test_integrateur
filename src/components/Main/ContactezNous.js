import React from "react";
import "./ContactezNous.scss";

const ContactezNous = () => {
  return (
    <div className="blog5 row justify-content-between">
      <div className="row col-md-8 col-12">
        <p className="title col-xxl-8 col-12">
          Vous avez une question ou une demande ?
        </p>
        <p className="col-xxl-4 col-12" style={{ paddingTop: "3px" }}>
          N'hésitez pas à nous contacter.
        </p>
      </div>
      <div className="button_contactez col-md-4 col-12">
        <button>
          <img src="./images/icons/i.svg" alt="i" />
          Contactez-nous
        </button>
      </div>
    </div>
  );
};

export default ContactezNous;
