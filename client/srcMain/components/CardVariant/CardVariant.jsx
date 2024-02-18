import React, { useState } from "react";
import { Link } from "react-router-dom";

// import cards_variant_image_like from "../../assets/img/cards_variant_image_like.svg";
// import cards_variant_image_like_clicked from "../../assets/img/cards_variant_image_like_clicked.svg";

import Button from "../Button/Button";

const CardVariant = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);

  function handleFavourite() {
    setIsFavourite((prevIsFavourite) => !prevIsFavourite);
  }
  return (
    <div className="products-and-service-cards-variant">
      <div className="like-button" onClick={handleFavourite}></div>
      <img
        className="cards-variant-image-product"
        src={props.image[0]}
        alt="cards_variant_image"
      />
      <div className="products-and-service-card-text">
        <div className="products-and-service-card-text-product">
          <p className="product-or-barter-title">{props.serviceName}</p>

          <p className="below-text">Category: {props.category}</p>

          <p className="below-text">City: {props.city}</p>
        </div>

        <div className="products-and-service-card-text-barter">
          <p className="product-or-barter-title">Barter:</p>

          <p className="below-text">Services: {props.services}</p>

          <p className="below-text">Products: {props.products}</p>

          <p className="below-text">Coins: {props.coins}</p>
        </div>
      </div>

      <div className="products-and-service-card-button">
        <Link to={`/product/${props.id}`}>
          <Button style={{ background: "#DE8807", height: 44, width: 253 }}>
            OPEN CARD
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardVariant;
