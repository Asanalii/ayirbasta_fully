import apiClient from "api/apiClient";
import BarterMenu from "components/BarterMenu";
import Header from "components/Header";
import AddressInput from "components/Map/AddressInput";
import { AuthContext } from "context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProductStyled from "./EditProduct.styled";

const EditProduct = () => {
  const [product, setProduct] = useState({});
  const { products } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [coin, setCoin] = useState(0);
  const [rent, setRent] = useState(false);
  const [trade, setTrade] = useState(false);
  const [file, setFile] = useState(null);
  const [productsTrade, setPRODUCTTrade] = useState("");
  const [serviceTrade, setSERVICETrade] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [lat, setLat] = useState(
    ((coordinates.lat * 10000) / 10000).toString()
  );
  const [lng, setLng] = useState(
    ((coordinates.lng * 10000) / 10000).toString()
  );
  const [categories, setCategories] = useState([]);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const param = useParams();
  console.log(product.product);
  console.log(description);

  useEffect(() => {
    apiClient
      .get(`/product/${param.id}`)
      .then((response) => {
        setProduct(response.data);
        setName(response.data.product.name);
        setCategory(response.data.product.category);
        setAddress(response.data.product.address);
        setLat(response.data.product.coords[0]);
        setLng(response.data.product.coords[1]);
        setTrade(response.data.product.onTrade);
        setRent(response.data.product.onRent);
        setFile(response.data.product.image_path[0]);
        setDescription(response.data.product.description);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    !isLoading && (
      <>
        <EditProductStyled>
          <form className="cont">
            <div className="offer-product">
              <div className="product-info">
                <div>
                  <h4>Product name</h4>
                  <input
                    type="text"
                    placeholder={`${product.product.name}`}
                    readOnly
                    // onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <h4>Category</h4>
                <select
                  name="Category"
                  id="category"
                  placeholder="fesfds"
                  // onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" disabled selected>
                    {product.product.category}
                  </option>
                  {/* {categories.map((ctg) => (
              <option value={ctg.name}>{ctg.name}</option>
            ))} */}
                </select>
                <h4>City</h4>
                <select name="City" id="city" required>
                  <option value="" disabled selected>
                    Choose your city
                  </option>
                  <option value="Vienna">Vienna</option>
                </select>
                <h4>Address</h4>
                <AddressInput
                  setAddress={setAddress}
                  coordinates={coordinates}
                  setCoordinates={setCoordinates}
                  address={product.product.address}
                />
                {/* <h4>Price</h4>
                <input
                  type="text"
                  placeholder="Price of your product"
                  // onChange={(e) => setPrice(e.target.value)}
                  required
                /> */}
                <h4>Description</h4>
                <textarea
                  name="description"
                  id="description"
                  placeholder={`${description}`}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="product-upload">
                <div className="upload-info">
                  <h3>Upload Your File Here</h3>
                  <p>Select the following format</p>
                  <p>PNG,JPEG,MP4</p>
                </div>
                <div className="upload-pic">
                  <input
                    type="file"
                    // onChange={selectFile}
                    id="file"
                    style={{ display: "none" }}
                    accept="image/png, image/jpeg"
                  ></input>

                  <label htmlFor="file">
                    <div className="DragText">
                      <div className="DragText Top">
                        <img src={file} alt="" />

                        <p>
                          <span>Drag drop</span> your file here or{" "}
                          <span>Browse</span>
                        </p>
                      </div>
                    </div>
                  </label>
                </div>

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
              </div>
            </div>

            <button>Edit card</button>
          </form>
        </EditProductStyled>
      </>
    )
  );
};

export default EditProduct;
