import React, { useContext, useRef } from "react";
import { useState } from "react";
import { AuthContext } from "context/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

import AddressInput from "components/Map/AddressInput";

import BarterMenu from "components/BarterMenu";
import Header from "components/Header";
import AddOfferStyled from "./AddOffer.styled";

import load from "../../assets/img/load.svg";
// import add from "../../assets/img/addCircle.svg";

import apiClient from "api/apiClient";
import { useEffect } from "react";

const AddOffer = () => {
  const { contextData } = useContext(AuthContext);

  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  // const [productsTrade, setPRODUCTTrade] = useState("");

  const selectFile = (e) => {
    setImage(e.target.files[0]);
  };

  const fileRef = useRef();
  const modalContentRef = useRef(null);

  const clearFile = () => {
    fileRef.current.value = "";
  };

  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");
  const [document, setDocument] = useState("");

  const chooseFile = (attach) => {
    setFileName(attach.name);
    if (!["image/png", "image/jpeg"].includes(attach.type)) {
      setError({ status: "error", message: "Неверный формат текста" });
      return;
    }
    if (attach.size > 500000000) {
      setError({
        status: "error",
        message: "Размер файла не должен превышать 5 МБ",
      });
      return;
    }
    const reader = new FileReader();
    reader.onload = (file) => {
      setDocument(`${window.btoa(file.target.result)}`);
      setError({ status: "", message: "" });
    };
    reader.readAsBinaryString(attach);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (anyProduct === true) {
    //   setPRODUCTTrade("Trade for any product");
    // }
    // if (anyService === true) {
    //   setSERVICETrade("Trade for any service");
    // }

    // let formData = new FormData();
    // formData.append("category", category);
    // // formData.append("address", address);

    // formData.append("name", name);
    // formData.append("description", description);

    // formData.append("image", image);

    // formData.append("productsTrade", productsTrade);

    // if (file == null) {
    //   formData.delete("file");
    // }

    apiClient
      .post(
        "/v1/items",
        { name, description, image: document, pic_name: fileName },
        {
          headers: {
            Authorization: `Bearer ${contextData.token.access}`,
          },
        }
      )
      .then((response) => {
        navigate("/items");
      });

    // else if (BarterLink == "PRODUCT" || "SERVICE") {
    //       if (file == null) {
    //         formData2.delete("file");
    //       }
    //       apiClient
    //         .post("/api/product/create", formData2, {
    //           headers: {
    //             Authorization: `Bearer ${contextData.token.access}`,
    //           },
    //         })
    //         .then((response) => {
    //           navigate("/offers");
    //         });
    //     }
    // ТУТ АУКЦИОН ЕЛСЕ
    // else {
    //       apiClient
    //         .post("/api/product/create", formData3, {
    //           headers: {
    //             Authorization: `Bearer ${contextData.token.access}`,
    //           },
    //         })
    //         .then((response) => {
    //           navigate("/offers");
    //         });
    //     }
  };

  return (
    <>
      <Header />
      <AddOfferStyled>
        <BarterMenu linkActive="offers" />

        <form className="cont" onSubmit={handleSubmit}>
          <div className="offer">
            <div className="info">
              <div>
                <h3>Item Info</h3>
                <p>Please enter your item info</p>
              </div>
              {/* <div>
                <ul>
                  <li className={"active"}>Item</li>
                </ul>
              </div> */}
              {/* <h4>Step 1</h4> */}
            </div>
            <div className="offer-product">
              <div className="product-info">
                <div>
                  <h4>Item name</h4>
                  <input
                    type="text"
                    placeholder={"Item name"}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* <h4>Category</h4>
                <select
                  name="Category"
                  id="category"
                  placeholder="fesfds"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" disabled selected>
                    Choose category
                  </option>
                  {categories.map((ctg) => (
                    <option value={ctg.name}>{ctg.name}</option>
                  ))}
                </select> */}

                {/* <h4>City</h4>
                <select name="City" id="city" required>
                  <option value="" disabled selected>
                    Choose your city
                  </option>
                  <option value="Vienna">Vienna</option>
                </select> */}

                {/* <h4>Address</h4>
                <AddressInput
                  setAddress={setAddress}
                  coordinates={coordinates}
                  setCoordinates={setCoordinates}
                /> */}

                {/* <h4>Price</h4>
                <input
                  type="text"
                  placeholder="Price of your product"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                /> */}

                <h4>Description</h4>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
                {/* <h4>Link Image (Временно)</h4>
                <input
                  name="image"
                  id="image"
                  placeholder="Link image"
                  onChange={(e) => setImage(e.target.value)}
                  required
                /> */}

                <h4>Image</h4>
                <input
                  name="image"
                  id="image"
                  placeholder="Link image"
                  type="file"
                  onChange={(event) => chooseFile(event.target.files[0])}
                  required
                />
              </div>

              {/* <div className="product-upload">
                <div className="upload-info">
                  <h3>Upload Your File Here</h3>
                  <p>Select the following format</p>
                  <p>PNG,JPEG,MP4</p>
                </div>
                <div className="upload-pic">
                  <input
                    type="file"
                    onChange={selectFile}
                    id="file"
                    style={{ display: "none" }}
                    accept="image/png, image/jpeg"
                  ></input>

                  <label htmlFor="file">
                    <div className="DragText">
                      <div className="DragText Top">
                        <img src={load} alt="" />

                        <p>
                          <span>Drag drop</span> your file here or{" "}
                          <span>Browse</span>
                        </p>
                      </div>
                    </div>
                  </label>
                </div> */}

              {/* <p>Uploading Files</p>
                <div className="upload-progress">
                  <img src={file} alt="file" />
                  <div>
                    <div>
                      <p>Resume.jpg</p>
                      <p>
                        <img src={retry} alt="retry" />
                        Retry
                      </p>
                    </div>
                    <progress id="progress" max="100" value="0">
                      {" "}
                      70%{" "}
                    </progress>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
          {/*
          <div className="barterTo">
            <div className="info">
              <div>
                <h3>Barter to</h3>
                <p>Please enter what do you want</p>
              </div>
              <div>
                <ul>
                  {bartersType.map((barter) => (
                    <li
                      className={`${BarterLink == barter ? "active" : ""}`}
                      onClick={() => {
                        setBarterLink(barter);
                      }}
                    >
                      {barter}
                    </li>
                  ))}
                </ul>
              </div>
              <h4>Step 2</h4>
            </div>
            {BarterLink === "COINS" && (
              <div>
                <h4>Coins</h4>
                <input
                  type="text"
                  placeholder={`${
                    coinsTrade == "" ? "Coins" : `${coinsTrade}`
                  }`}
                  onChange={(e) => setCoin(e.target.value)}
                  required
                />
              </div>
            )}
            {BarterLink === "PRODUCT" && (
              <div className="barterTo-type">
                <h4>Product name</h4>
                <div>
                  <input
                    type="text"
                    placeholder={`${
                      productsTrade == "" ? "Product name" : `${productsTrade}`
                    }`}
                    onChange={(e) => {
                      setPRODUCTTrade(e.target.value);
                    }}
                  />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="dsdfddsf"
                      id=""
                      style={{ width: "60px" }}
                      onChange={(e) => {
                        setAnyProduct(!anyProduct);
                      }}
                    />
                    <label htmlFor="">Any product</label>
                  </div>
*/}
          {/* <div>
                    <div className="add">
                      <img src={add} alt="add pic"></img>
                      <p>Add product picture </p>
                    </div>
                  </div> */}
          {/*   </div> */}
          {/* <div className="add">
                  <img src={add} alt="add pic"></img>
                  <p> One more Product</p>
                </div> */}

          {/*    </div>
            )}
            {BarterLink === "SERVICE" && (
              <div className="barterTo-type">
                <h4>Service name</h4>
                <div>
                  <input
                    type="text"
                    placeholder={`${
                      serviceTrade == "" ? "Service name" : `${serviceTrade}`
                    }`}
                    onChange={(e) => {
                      setSERVICETrade(e.target.value);
                    }}
                  />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      name="dsdfddsf"
                      id=""
                      style={{ width: "60px" }}
                      onChange={() => {
                        setAnyService(!anyService);
                      }}
                    />
                    <label htmlFor="">Any service</label>
                  </div>
                </div> */}

          {/* <div className="add">
                  <img src={add} alt="add pic"></img>
                  <p> One more Product</p>
                </div> */}

          {/* </div> */}

          {/*
            )}
            {BarterLink === "AUCTION" && (
              <div className="barterTo-type">
                <h4 style={{ color: "red" }}>
                  This function is not available yet
                </h4>
*/}

          {/* <div className="add">
                  <img src={add} alt="add pic"></img>
                  <p> One more Product</p>
                </div> */}

          {/* </div> */}

          {/* )}</div> */}
          {/* <div className="time">
            <div className="info">
              <div>
                <h3>Time</h3>
                <p>Please enter more information</p>
              </div>
              <div>
                <ul>
                  {timeType.map((type) => (
                    <li
                      className={`${TimeLink == type ? "active" : ""}`}
                      onClick={() => {
                        setTimeLink(type);
                      }}
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
              <h4>Step 3 of 3</h4>
            </div>
            {TimeLink.toLocaleLowerCase() == "forever" ? (
              <div></div>
            ) : (
              <div>
                <h4>Date Range</h4>
                <select name="DateRange" id="dateRange">
                  <option value="" disabled selected>
                    Date range
                  </option>
                  <option value="New York">New York</option>
                </select>

                <h4>Select Time</h4>
                <select name="Select Time" id="time">
                  <option value="" disabled selected>
                    Select time
                  </option>
                  <option value="New York">New York</option>
                </select>
              </div>
            )}
          </div> */}

          {/* <div className="offersType">
            <div className="info">
              <div>
                <h3>Offer Type</h3>
                <p>Please choose your offer type</p>
              </div>

              <h4>Step 3 of 3</h4>
            </div>
            <div className="offersType-cont">
              <div className="offersType-choice">
                <label htmlFor="contactChoice1">Rent</label>
                <input
                  type="radio"
                  id="contactChoice1"
                  name="type"
                  onClick={() => {
                    setRent(true);
                    setTrade(false);
                  }}
                  required
                />
              </div>
              <div className="offersType-choice">
                {" "}
                <label htmlFor="contactChoice2">Trade</label>
                <input
                  type="radio"
                  id="contactChoice2"
                  name="type"
                  onClick={() => {
                    setRent(false);
                    setTrade(true);
                  }}
                  required
                />
              </div>
            </div>
          </div> */}
          <button>ADD OFFER</button>
        </form>
      </AddOfferStyled>
    </>
  );
};

export default AddOffer;
