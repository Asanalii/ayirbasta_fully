import apiClient from "api/apiClient";
import React, { useEffect, useState } from "react";

import BarterStyled from "./SecondBarter.styled";

export const Offer = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const [toMeBarters, setToMeBarters] = useState({});

  useEffect(() => {
    apiClient.get(`/product/${props.wantProductId}`).then((response) => {
      setToMeBarters(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    props.status != "product deleted" &&
    !isLoading && (
      <BarterStyled image={toMeBarters.product.image_path}>
        <div className="image-cont"></div>
        <div className="info">
          {true ? (
            <div className="barter-product">
              <h3>{toMeBarters.product.name}</h3>
              <p>Category: {toMeBarters.product.category}</p>
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
