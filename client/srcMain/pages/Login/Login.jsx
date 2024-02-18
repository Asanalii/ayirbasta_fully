import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

import hands from "assets/img/hands.png";
import Action from "components/Action/Action";

import LoginStyled from "./Login.styled";

import { AuthContext } from "../../context/AuthContext";

import apiClient from "api/apiClient";

export default function Login() {
  const { contextData } = useContext(AuthContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (contextData.token) {
    navigate("/");
    return "";
  }

  const enter = (e) => {
    e.preventDefault();

    apiClient
      .post("/auth/sign-in", {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem(
          "token",
          JSON.stringify({
            access: response.data.access_token,
            refresh: response.data.refresh_token,
          })
        );

        contextData.setToken({
          access: response.data.access_token,
          refresh: response.data.refresh_token,
        });

        navigate("/offers");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <LoginStyled>
      <div className="main-pic">
        <img alt="" src={hands} />
      </div>

      <form className="form" onSubmit={enter}>
        <h1>Login</h1>
        <p>To continue using our platform, you need to login an account.</p>

        <div className="form__main">
          <div className="form__main-info">
            <p>Username</p>
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className="form__main-info">
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <span>Forgot password?</span>

        <Action nextAction="Registration" action="LOGIN" width={"248px"} />
      </form>
    </LoginStyled>
  );
}
