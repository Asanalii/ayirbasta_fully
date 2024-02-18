import React, { useEffect } from "react";

import cart from "../../assets/img/shoppingCartSmall.svg";
import credit from "../../assets/img/card.svg";
import barters from "../../assets/img/arrows.svg";
import settings from "../../assets/img/settings.svg";
import info from "../../assets/img/info.svg";
import exit from "../../assets/img/logout.svg";

import BarterMenuStyled from "./BarterMenu.styled";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";

const BarterMenu = ({ linkActive }) => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AuthContext);

  // useContext(Context);

  const links = [
    {
      name: "items",
      pic: cart,
    },

    {
      name: "trades",
      pic: barters,
    },
  ];

  const [activeLink, setActiveLink] = React.useState("offers");

  return (
    <BarterMenuStyled>
      <div className="barterMenu">
        <div className="barterMenu-main">
          <ul>
            MENU
            {links.map((link) => (
              <Link to={`/${link.name}`}>
                <li
                  key={link.name}
                  className={`${linkActive == link.name ? "active" : ""}`}
                  onClick={() => {
                    setActiveLink(link.name);
                  }}
                >
                  <img src={link.pic} alt="" />
                  <p>{link.name}</p>
                </li>
              </Link>
            ))}
          </ul>

          <ul style={{ marginTop: "60px" }}>
            PREFERENCES
            <Link to={"/settings"}>
              <li className={`${linkActive == "settings" ? "active" : ""}`}>
                <img src={settings} alt="" />
                <p>SETTINGS</p>
              </li>
            </Link>
            {/* <Link>
              <li>
                <img src={info} alt="" />
                <p>HELP CENTER</p>
              </li>
            </Link> */}
          </ul>

          <ul style={{ marginTop: "360px" }}>
            <li
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              <img src={exit} alt="" />
              <p>LOG OUT</p>
            </li>
          </ul>
        </div>
      </div>
    </BarterMenuStyled>
  );
};

export default BarterMenu;
