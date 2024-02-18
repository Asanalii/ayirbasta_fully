import React, { useState } from "react";

// import Barters from "components/Barters";
import BarterMenu from "components/BarterMenu";
import Header from "components/Header";
import SettingsStyled from "./Settings.styled";

import profileImg from "../../assets/img/button.png";
import imageArrow from "../../assets/img/imageArrow.svg";
import apiClient from "api/apiClient";

function BartersPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    apiClient
      .patch(
        "/api/user/update",
        {
          firstName: firstName,
          lastname: lastName,
          email: email,
          city: city,
          picture: file,
        },
        {
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
        }
      )
      .then((response) => {});
  };

  return (
    <div>
      <Header />
      <SettingsStyled>
        <BarterMenu linkActive={"settings"} />
        <form className="cont" onSubmit={handleSubmit}>
          <div>
            <div className="info">
              <div>
                <h3>Profile settings</h3>
                <p>Here you can change profile inforamtion</p>
              </div>
            </div>
            <div className="settings">
              <div className="settings-main">
                <h4>First name</h4>
                <input
                  type="text"
                  placeholder={"First name"}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <h4>Last Name</h4>
                <input
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <h4>Email</h4>
                <input
                  type="text"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <h4>City</h4>
                <select
                  name="City"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="" disabled selected>
                    Choose your city
                  </option>
                  <option value="New York">New York</option>
                  <option value="Pavlodar">Pavlodar</option>
                  <option value="Astana">Astana</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="London">London</option>
                  <option value="Aktau">Aktau</option>
                  <option value="Alma-Ata">Alma-Ata</option>
                  <option value="Vienna">Vienna</option>
                </select>
              </div>
              <div className="upload-pic">
                <input
                  type="file"
                  onChange={() => setFile(e.target.files[0])}
                  id="file"
                  style={{ display: "none" }}
                ></input>

                <label htmlFor="file">
                  <div className="DragText">
                    <div className="DragText Top">
                      <h3>Upload your photo</h3>
                      <img src={profileImg} alt="" />

                      <div className="dragdrop">
                        <p>
                          <span>Drag drop</span> your file here or{" "}
                          <span>Browse</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <button>SAVE</button>
        </form>
      </SettingsStyled>
    </div>
  );
}

export default BartersPage;
