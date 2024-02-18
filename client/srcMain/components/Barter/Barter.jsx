import apiClient from "api/apiClient";
import React, { useEffect, useState } from "react";

import BarterStyled from "./Barter.styled";

export const Offer = (props) => {
  const [myBarters, setMyBarters] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiClient.get(`/product/${props.giveProductId}`).then((response) => {
      setMyBarters(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    props.status != "product deleted" &&
    !isLoading && (
      <BarterStyled image={myBarters.product.image_path}>
        <h2></h2>
        <div className="image-cont"></div>
        <div className="info">
          {true ? (
            <div className="barter-product">
              <h3>{myBarters.product.name}</h3>
              <p>Category: {myBarters.product.category}</p>
              {/* <p>City: {props.city}</p> */}
            </div>
          ) : (
            <div className="barter-coins">
              <h2>Coins (1 Coin = 100 Euro)</h2>
              <h4>1500 B</h4>
              {/* <p>City: {props.city}</p> */}
            </div>
          )}
        </div>
      </BarterStyled>
    )
  );
};

export default Offer;
