import React from "react";
import "./Questions.scss";

const Questions = () => {
  return (
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
      <div className="row selectOptions">
        <div className="col-md-4">
          <div className="selectOption">
            <img src="./images/icons/Icon Artwork2.svg" alt="question" />
            <select>
              <option>Lorem Ipsum</option>
              <option>Lorem Ipsum</option>
              <option>Lorem Ipsum</option>
              <option>Lorem Ipsum</option>
            </select>
          </div>
          <div className="selectOption">
            <img src="./images/icons/Icon Artwork2.svg" alt="question" />
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
          <div className="selectOption">
            <img src="./images/icons/Icon Artwork2.svg" alt="question" />
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
          <div className="selectOption">
            <img src="./images/icons/Icon Artwork2.svg" alt="question" />
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="selectOption">
            <img src="./images/icons/Icon Artwork2.svg" alt="question" />
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
          <div className="selectOption">
            <img src="./images/icons/Icon Artwork2.svg" alt="question" />
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
          <div className="selectOption">
            <img src="./images/icons/Icon Artwork2.svg" alt="question" />
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
          <div className="selectOption">
            <img src="./images/icons/Icon Artwork2.svg" alt="question" />
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="selectOption">
            <img src="./images/icons/Icon Artwork2.svg" alt="question" />
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
          <div className="selectOption">
            <img src="./images/icons/Icon Artwork2.svg" alt="question" />
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
          <div className="selectOption">
            <img src="./images/icons/Icon Artwork2.svg" alt="question" />
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
          <div className="selectOption">
            <img src="./images/icons/Icon Artwork2.svg" alt="question" />
            <select>
              <option>Lorem Ipsum</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
