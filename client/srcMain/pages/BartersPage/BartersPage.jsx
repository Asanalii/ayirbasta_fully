import React from "react";

import BarterMenu from "components/BarterMenu";
import Header from "components/Header";

import profileImage from "../../assets/img/Profill.png";
import productImage from "../../assets/img/image.png";
import swapIcon from "../../assets/img/swapBarter.svg";
import BartersPageStyled from "./BartersPage.styled";
import card from "../../assets/img/shoppingCartBig.svg";

import { useEffect } from "react";
import apiClient from "api/apiClient";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import MyBarter from "components/Barter";
import { Link } from "react-router-dom";
import SecondBarter from "components/SecondBarter";

function BartersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { contextData } = useContext(AuthContext);
  const [tradesFromMe, setTradesFromMe] = useState([]);
  const [tradesToMe, setTradesToMe] = useState([]);
  const [barters, setBarters] = useState([]);

  const [myBarters, setMyBarters] = useState([]);
  const [toMeBarters, setToMeBarters] = useState({});
  const [checkTrades, setCheckTrades] = useState(false);
  useEffect(() => {
    apiClient
      .get("/api/user/offers", {
        headers: {
          Authorization: `Bearer ${contextData.token.access}`,
        },
      })
      .then(({ data }) => {
        setTradesFromMe(data.trades_from_me);
        setTradesToMe(data.trades_to_me);
        setIsLoading(false);
      });
  }, []);

  return (
    !isLoading && (
      <div>
        <Header />
        <BartersPageStyled>
          <BarterMenu linkActive={"barters"} />
          <div className="barters">
            <h3>Active Barters</h3>

            {tradesFromMe || tradesToMe ? (
              <div></div>
            ) : (
              <div className="empty">
                <img src={card} alt="" />
                <p>You still haven't added a product/service to exchange.</p>
              </div>
            )}

            {tradesFromMe && (
              <div className="cont">
                <h3>Trades from you</h3>
                <div>
                  {tradesFromMe.map((barter) => (
                    <div style={{ backgroundColor: "#ffffff" }}>
                      <MyBarter
                        key={barter.id}
                        giveProductId={barter.giveProductId}
                      />
                      <button>Open</button>
                      <div className="swap">
                        <img src={swapIcon} alt="" style={{ width: "40px" }} />
                      </div>
                      <SecondBarter
                        key={barter.id}
                        wantProductId={barter.wantProductId}
                      />
                      <Link to={`/barters/${barter.id}`}>
                        <button>Barter info</button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tradesToMe && (
              <div className="cont">
                <h3>Trades to you</h3>
                <div>
                  {tradesToMe.map((barter) => (
                    <div style={{ backgroundColor: "#ffffff" }}>
                      <MyBarter
                        key={barter.id}
                        giveProductId={barter.giveProductId}
                      />
                      <button>Open</button>
                      <div className="swap">
                        <img src={swapIcon} alt="" style={{ width: "40px" }} />
                      </div>
                      <SecondBarter
                        key={barter.id}
                        wantProductId={barter.wantProductId}
                      />
                      <Link to={`/barters/${barter.id}`}>
                        <button>Barter info</button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </BartersPageStyled>
      </div>
    )
  );
}

export default BartersPage;
