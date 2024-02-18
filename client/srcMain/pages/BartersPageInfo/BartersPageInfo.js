import React, { useContext, useEffect, useState } from "react";

import BarterMenu from "components/BarterMenu";
import Header from "components/Header";

import profileImage from "../../assets/img/Profill.png";
import productImage from "../../assets/img/image.png";
import swapIcon from "../../assets/img/swapBarter.svg";

import "./_barters.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiClient from "api/apiClient";
import { AuthContext } from "context/AuthContext";
function BartersPage(props) {
  const navigate = useNavigate();
  const { contextData } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);
  const [myProfile, setMyProfile] = useState({});
  const [yourProfile, setYourProfile] = useState({});
  const [wantProduct, setWantProduct] = useState({});
  const [giveProduct, setGiveProduct] = useState({});
  const [trade, setTrade] = useState({});

  const param = useParams();
  useEffect(() => {
    apiClient
      .get(`/api/trade/${param.id}`, {
        headers: {
          Authorization: `Bearer ${contextData.token.access}`,
        },
      })
      .then((response) => {
        setGiveProduct(response.data.giveProduct);
        setWantProduct(response.data.wantProduct);
        setTrade(response.data.trade);
        setIsLoading(false);
      });
  }, []);

  const handleConfirm = async (e) => {
    e.preventDefault();

    apiClient
      .patch(
        `/api/trade/confirm/${param.id}`,
        { id: param.id },
        {
          headers: {
            Authorization: `Bearer ${contextData.token.access}`,
          },
        }
      )
      .then((response) => {
        window.location.reload();
      });
  };
  useEffect(() => {
    handleConfirm;
  }, []);

  const handleDecline = async (e) => {
    e.preventDefault();

    apiClient
      .patch(
        `/api/trade/cancel/${param.id}`,
        { id: param.id },
        {
          headers: {
            Authorization: `Bearer ${contextData.token.access}`,
          },
        }
      )
      .then((response) => {
        window.location.reload();
      });
  };

  const handleSuccess = async (e) => {
    e.preventDefault();

    apiClient
      .patch(
        `/api/trade/success/${param.id}`,
        { id: param.id },
        {
          headers: {
            Authorization: `Bearer ${contextData.token.access}`,
          },
        }
      )
      .then((response) => {
        window.location.reload();
      });
  };

  return (
    !isLoading && (
      <div>
        <Header />
        <div className="settings-page">
          <BarterMenu linkActive={"barters"} />
          <div className="barters-card">
            <div className="barters-card-content">
              <div className="barters-card-one">
                <div className="barters-card-profile">
                  <img
                    src={trade.fromUser.profile_image}
                    className="barters-card-photo"
                    style={{ width: "100px" }}
                  />
                  <div className="barters-card-profile-text-section">
                    <p className="barters-card-name">{trade.toUser.name}</p>
                    <p className="barters-card-profile-text">
                      {trade.toUser.city}, {trade.toUser.street}
                    </p>
                    {/* <p className="barters-card-proflie-text">Online</p> */}
                  </div>
                </div>
                <div className="barters-card-cart">
                  <img
                    style={{ width: "315px", height: "150px" }}
                    src={giveProduct.image_path[0]}
                    className="barters-card-cart-image"
                  />
                  <div className="barters-card-cart-text-section">
                    <p className="barters-card-cart-name">{giveProduct.name}</p>
                    <p className="barters-card-cart-name">
                      {giveProduct.description}
                    </p>
                    <p className="barters-card-cart-category">
                      Category: {giveProduct.category}
                    </p>
                    {/* <p className="barters-card-cart-category">
                      City: New York, USA
                    </p> */}
                  </div>
                  <Link
                    to={`/product/${giveProduct.id}`}
                    className="barters-card-cart-link"
                  >
                    <button className="barters-card-cart-button">
                      OPEN CARD
                    </button>
                  </Link>
                </div>
                <div className="barters-card-info">
                  <p className="barters-card-info-title margin20">Address</p>
                  <p className="barters-card-info-text">
                    {giveProduct.address}
                  </p>
                  <p className="barters-card-info-title">Barter type:</p>
                  <p className="barters-card-info-text">Forever</p>
                  <p
                    className={`barters-card-info-status ${
                      trade.toUserStatus == "trade canceled"
                        ? " decline"
                        : "accepted"
                    }`}
                  >
                    {trade.fromUserStatus.toLocaleUpperCase()}
                  </p>
                </div>
              </div>
              <div className="barters-card-one"></div>

              <button className="barters-card-switch">
                <img src={swapIcon} />
              </button>

              <div className="barters-card-two">
                <div className="barters-card-profile">
                  <img
                    src={trade.toUser.profile_image}
                    className="barters-card-photo"
                    style={{ width: "100px" }}
                  />
                  <div className="barters-card-profile-text-section">
                    <p className="barters-card-name">{trade.fromUser.name}</p>
                    <p className="barters-card-profile-text">
                      {trade.fromUser.city}, {trade.fromUser.street}
                    </p>
                    {/* <p className="barters-card-proflie-text">Online</p> */}
                  </div>
                </div>
                <div className="barters-card-cart ">
                  <img
                    src={productImage}
                    style={{ width: "315px", height: "150px" }}
                    className="barters-card-cart-image"
                  />
                  <div className="barters-card-cart-text-section">
                    <p className="barters-card-cart-name">{wantProduct.name}</p>
                    <p className="barters-card-cart-name">
                      {wantProduct.description}
                    </p>
                    <p className="barters-card-cart-category">
                      Category: {wantProduct.category}
                    </p>
                    {/* <p className="barters-card-cart-category">
                      City: New York, USA
                    </p> */}
                  </div>
                  <Link
                    to={`/product/${wantProduct.id}`}
                    className="barters-card-cart-link"
                  >
                    <button className="barters-card-cart-button margin-button">
                      OPEN CARD
                    </button>
                  </Link>
                </div>

                <div className="barters-card-info">
                  <p className="barters-card-info-title margin10">Address</p>
                  <p className="barters-card-info-text">
                    {wantProduct.address}
                  </p>
                  <p className="barters-card-info-title">Barter type:</p>
                  <p className="barters-card-info-text">Forever</p>
                  <p
                    className={`barters-card-info-status ${
                      trade.toUserStatus == "trade canceled"
                        ? " decline"
                        : "accepted"
                    }`}
                  >
                    {trade.toUserStatus.toLocaleUpperCase()}
                  </p>
                </div>
              </div>
            </div>
            <div className="barters-buttons-row">
              <button className="barters-card-cart-button green-button">
                OPEN CHAT
              </button>

              {(() => {
                if (trade.status == "trade created") {
                  return (
                    <>
                      <button
                        className="barters-card-cart-button green-button"
                        onClick={handleConfirm}
                      >
                        ACCEPT BARTER
                      </button>
                      <button
                        className="barters-card-cart-button red-button"
                        onClick={handleDecline}
                      >
                        DECLINE BARTER
                      </button>
                    </>
                  );
                } else if (trade.status == "trade confirmed") {
                  return (
                    <>
                      <button
                        className="barters-card-cart-button green-button"
                        onClick={handleSuccess}
                      >
                        SUCCESS BARTER
                      </button>
                      <button className="barters-card-cart-button red-button">
                        REPORT BARTER
                      </button>
                    </>
                  );
                } else if (trade.status == "trade success") {
                  return (
                    <>
                      <button className="barters-card-cart-button red-button">
                        REPORT BARTER
                      </button>
                    </>
                  );
                } else {
                  return <></>;
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default BartersPage;
