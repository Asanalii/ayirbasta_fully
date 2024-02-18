import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";

import hands from "assets/img/hands.png";
import Action from "components/Action/Action";
import RegistrationStyled from "./Registration.styled";
import apiClient from "api/apiClient";

function Registration() {
  const navigate = useNavigate();

  const { token, setToken } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [home_index, setHomeIndex] = useState("");
  const [home_number, setHomeNumber] = useState("");
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    apiClient
      .post("/auth/sign-up", {
        city,
        home_index,
        home_number,
        name,
        password,
        street,
        email,
        username,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (token) {
    navigate("/offers");
  }

  return (
    <RegistrationStyled>
      <div className="main-pic">
        <img alt="" src={hands} />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h1>Registration form</h1>
        <p>To continue using our platform, you need to register an account.</p>

        <div className="form__main-info">
          <p>Name</p>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__main-info">
          <p>Username</p>
          <input
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form__main-info">
          <p>Email</p>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__main-info">
          <p>City</p>
          <input
            type="text"
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="form__main-info">
          <p>Home Index </p>
          <input
            type="text"
            required
            onChange={(e) => setHomeIndex(e.target.value)}
          />
        </div>

        <div className="form__main-info">
          <p>Home Number</p>
          <input
            type="text"
            required
            onChange={(e) => setHomeNumber(e.target.value)}
          />
        </div>
        <div className="form__main-info">
          <p>Street</p>
          <input
            type="text"
            required
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>

        <div className="form__main-info">
          <p>Password</p>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link>
          <span>Forgot password?</span>
        </Link>

        <Action action="REGISTRATION" nextAction="Login" width={"200px"} />
      </form>
    </RegistrationStyled>
  );
}

export default Registration;
