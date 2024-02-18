import apiClient from "api/apiClient";
import BarterMenu from "components/BarterMenu";
import Header from "components/Header";
import AddressInput from "components/Map/AddressInput";
import { AuthContext } from "context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditProductStyled from "./EditProduct.styled";

const EditProduct = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { contextData } = useContext(AuthContext);

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    apiClient
      .get(`/v1/item/${param.id}`)
      .then((response) => {
        setProduct(response.data.item);
        setName(response.data.item.name);
        setDescription(response.data.item.description);
        setImage(response.data.item.image);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    apiClient
      .patch(
        `/v1/item/${param.id}`,
        {
          name,
          description,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${contextData.token.access}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          navigate("/items");
        }
      });
  };
  return (
    !isLoading && (
      <>
        <EditProductStyled>
          <form className="cont" onSubmit={handleSubmit}>
            <div className="offer-product">
              <div className="product-pic">
                <img alt="" src={product.image} />
              </div>
              <div className="product-info">
                <div>
                  <h4>Product name</h4>
                  <input
                    type="text"
                    placeholder={`${product.name}`}
                    readOnly
                    // onChange={(e) => setName(e.target.value)}
                  />
                  <h4>Description</h4>
                  <textarea
                    name="description"
                    id="description"
                    placeholder={`${product.description}`}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>

                  <div style={{ display: "flex", gap: "20px" }}>
                    <img
                      src={`http://localhost:8080/${product.image}`}
                      alt=""
                      style={{ height: "300px" }}
                    />
                    {/* <h4>Link for pic (Временно)</h4>
                    <input
                      type="text"
                      placeholder={`If you want to change picture of item`}
                      onChange={(e) => setImage(e.target.value)}
                    /> */}
                  </div>
                </div>
                <button type="submit" style={{ marginTop: "20px" }}>
                  Edit card
                </button>
              </div>
            </div>
          </form>
        </EditProductStyled>
      </>
    )
  );
};

export default EditProduct;
