import apiClient from "api/apiClient";
import { AuthContext } from "context/AuthContext";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

// import { BarterOffers as offers } from "../../assets/data/BarterOffers";
import BarterStyled from "./Offer.styled";

export const Offer = (props) => {
  const { contextData } = useContext(AuthContext);
  const image = props.image;

  const handleDelete = async (e) => {
    e.preventDefault();

    apiClient
      .delete(`/api/product/${props.id}`, {
        headers: {
          Authorization: `Bearer ${contextData.token.access}`,
        },
      })
      .then((response) => {
        window.location.reload();
      });
  };

  return (
    props.status != "product deleted" && (
      <BarterStyled image={props.image}>
        <div className="image-cont"></div>
        <div className="info">
          <div>
            <h3>{props.name}</h3>
            <p>Category: {props.category}</p>
            {/* <p>Address: Vienna, {props.address}</p> */}
            <p>Address: {props.address}</p>
          </div>
          <div>
            <h3>Barter:</h3>
            {props.onRent ? (
              <div>
                <p>Services: {props.services}</p>
                <p>Products: {props.products}</p>
                <p>Coins: {props.coins}</p>
              </div>
            ) : (
              ""
            )}
            {props.onTrade ? (
              <>
                <p>Services: {props.services}</p>
                <p>Products: {props.products}</p>
              </>
            ) : (
              ""
            )}
          </div>

          <Link to={`/product/${props.id}`}>
            <button>Edit Card</button>
          </Link>
          <button
            style={{ backgroundColor: "red", padding: "13px 80px" }}
            onClick={handleDelete}
          >
            Delete card
          </button>
        </div>
      </BarterStyled>
    )
  );
};

export default Offer;
