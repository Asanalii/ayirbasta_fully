import React, { useEffect } from "react";
import Popup from "reactjs-popup";

import ItemStyled, { StyledPopup } from "./Item.styled";

import like from "../../assets/img/heart.svg";
import login from "../../assets/img/loginPopup.svg";

import pic from "assets/img/pic.png";
import smallPic from "assets/img/picSmall.png";
import apiClient from "api/apiClient";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Item({ product }) {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [giveProductId, setGiveProductId] = useState(-5);
  const { contextData } = useContext(AuthContext);
  const days = 0;
  const wantProductId = product.id;

  console.log(product);

  useEffect(() => {
    contextData.token
      ? apiClient
          .get("/api/user/products", {
            headers: {
              Authorization: `Bearer ${contextData.token.access}`,
            },
          })
          .then((response) => {
            setOffers(response.data);
            setIsLoading(false);
          })
      : setIsLoading(false);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    apiClient
      .post(
        "/api/trade/make",
        {
          days,
          giveProductId,
          wantProductId,
        },
        {
          headers: {
            Authorization: `Bearer ${contextData.token.access}`,
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          navigate("/barters");
        }
      });
  };

  return (
    !isLoading && (
      <ItemStyled>
        <div className="item">
          <div className="item__cont">
            <div className="item__cont-pics">
              <div>
                <div className="item__pic">
                  <img alt="" src={product.image_path[0]} />
                </div>
                {/* <div className="item__smallPics">
              {item.smallPics.map((pic) => (
                <img alt="" src={pic} />
              ))}
            </div> */}
              </div>
              <div className="item__right">
                <div className="item__cont-main">
                  <div className="item__info">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h1>{product.name}</h1>
                      <h1>User: {product.username}</h1>
                    </div>
                    <p>Category: {product.category}</p>
                    <p>
                      Address: {"  "}
                      {product.address}
                    </p>
                  </div>
                  <div className="item__barter">
                    <p style={{ fontWeight: "700" }}>Barter:</p>

                    {product.coinsTrade == 0 ? (
                      <>
                        {product.productsTrade != "" && (
                          <p>Products: {product.productsTrade}</p>
                        )}
                        {product.serviceTrade != "" && (
                          <p>Services: {product.serviceTrade}</p>
                        )}
                      </>
                    ) : (
                      <>
                        {product.productsTrade != "" && (
                          <p>Products: {product.productsTrade}</p>
                        )}
                        {product.serviceTrade != "" && (
                          <p>Services: {product.serviceTrade}</p>
                        )}
                        <p>Coins: {product.coinsTrade}</p>
                      </>
                    )}
                  </div>
                  <div className="item__barter-btn">
                    <StyledPopup trigger={<button> Offer Barter </button>}>
                      {(close) =>
                        contextData.token ? (
                          <div className="modal">
                            <button
                              className="close"
                              onClick={close}
                              style={{ color: "black" }}
                            >
                              x
                            </button>
                            <div className="content">
                              {offers ? (
                                <div>
                                  <h3>Active offers</h3>
                                  <form onSubmit={handleSubmit}>
                                    {offers.map((offer) =>
                                      offer.status == "product deleted" ? (
                                        ""
                                      ) : (
                                        <div
                                          style={{
                                            display: "flex",
                                            gap: "20px",
                                            marginTop: "20px",
                                          }}
                                        >
                                          <input
                                            type="radio"
                                            name="offers"
                                            id=""
                                            onChange={() =>
                                              setGiveProductId(offer.id)
                                            }
                                            className="popup-input"
                                          />
                                          <label htmlFor="">
                                            <div
                                              style={{
                                                display: "flex",
                                                gap: "10px",
                                                alignItems: "center",
                                              }}
                                            >
                                              <img
                                                src={offer.image_path[0]}
                                                alt=""
                                              />
                                              <div>
                                                <h3>{offer.name}</h3>
                                                <p>{offer.category}</p>
                                              </div>
                                            </div>
                                          </label>
                                        </div>
                                      )
                                    )}
                                    <button>Offer barter</button>
                                  </form>
                                </div>
                              ) : (
                                <div>
                                  <h3>You don't have any offers</h3>
                                  <Link to={"/offers/add-offer"}>
                                    {" "}
                                    <button>ADD OFFER</button>
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="modal">
                            <button className="close" onClick={close}>
                              x
                            </button>
                            <div className="content">
                              <img src={login} alt="" />
                              <p>You need to be logged in to offer barter.</p>
                              <Link to={"/login"}>
                                <button>Login</button>
                              </Link>
                            </div>
                          </div>
                        )
                      }
                    </StyledPopup>
                    <div className="button">
                      <img src={like} alt="" />
                    </div>
                    <a href={`mailto:${product.user_email}`}>Mail to owner</a>
                  </div>
                </div>
                {/* <div className="item__cont-temp">
              <h3>Temporarily:</h3>
              <p>{item.time}</p>
              <p>Pick up: {item.pickUp}</p>
            </div> */}
              </div>
            </div>
            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </ItemStyled>
    )
  );
}

export default Item;
