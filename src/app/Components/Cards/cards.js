import React from "react";
import "../../ComponentsStyle/cards.css";
import cardData from "./cardsData";
function cards() {
  return (
    <div className="cardsParent">
      <div className="cardsFirstChild">
        {cardData.map((card) => (
          <div key={card.id} className="cardsHolder">
            <div className="cardsPreview">
              <img className="previewImage" src={card.previewImage}></img>
            </div>
            <div className="cardBottom">
              <div className="cardLogoHolder">
                <div className="cardLogo">
                  <img className="cardLogoImg" src={card.cardLogoImg} />
                </div>
              </div>
              <div className="cardsDesc">
                <p>{card.cardsDesc}</p>
                <div className="channel">
                  <p>{card.channel}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default cards;
