import React, { useContext, useState } from "react";

import icon_search from "../../assets/img/icon-search-normal.svg";
import icon_map from "../../assets/img/icon-map.svg";
import icon_document from "../../assets/img/icon-document.svg";
import icon_clock from "../../assets/img/icon-clock.svg";
import CardVariant from "../CardVariant/CardVariant";
import CardList from "./CardList";
import { useEffect } from "react";
import apiClient from "api/apiClient";
import { AuthContext } from "context/AuthContext";

import image1 from "../../../src/assets/img/01.png";
import Pagination from "components/Pagination";

const ProductsAndService = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const { products } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   apiClient.get("/product/category").then(({ data }) => {
  //     setCategories(data);
  //   });
  // }, []);

  useEffect(() => {
    apiClient.get("/v1/items").then((response) => {
      // setItems(response.data.items);
      products.setproduct(response.data.items);
      setIsLoading(false);
    });
  }, []);

  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams] = useState(["name", "description"]);
  const [q, setQ] = useState("");

  // useEffect(() => {
  //   apiClient.get("/product/available").then((response) => {
  //     products.setproduct(response.data);
  //     setIsLoading(false);
  //     // setFilteredProducts(products);
  //   });
  // }, []);

  // useEffect(() => {
  //   setFilteredProducts(
  //     products.product.filter((product) => {
  //       return searchParams.some((param) => {
  //         return product[param].toLowerCase().includes(q.toLowerCase());
  //       });
  //     })
  //     // (product) => {
  //     //         return searchParams.some((param) => {
  //     //           return product[param].toLowerCase().includes(q.toLowerCase());
  //     //         });
  //     //       }
  //   );
  // }, [q]);

  return (
    !isLoading && (
      <div className="products-and-service">
        <div className="products-and-service-title">
          <p>Products and Service</p>
        </div>

        {/* <div className="products-and-service-filter-container">
          <div className="products-and-service-search-bar">
            <img src={icon_search} alt="icon_search" />
            <input
              type="text"
              name="search-form"
              id="search-form"
              className="search-input"
              value={q}
              placeholder="Search something here"
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          <div className="products-and-service-selecting-button">
            <img src={icon_map} alt="icon_map" />
            <select
              onChange={(e) => {
                setFilterParam1(e.target.value);
              }}
              aria-label="Filter Countries By Region"
            >
              <option value="" disabled selected>
                Choose city
              </option>
              <option value="All">All</option>
              <option value="Vienna">Vienna</option>
            </select>
          </div>

          <div className="products-and-service-selecting-button">
            <img src={icon_document} alt="icon_document" />
            <select
              onChange={(e) => {
                setFilterParam2(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Choose category
              </option>
              <option value="All">All</option>
              {categories.map((ctg) => (
                <option value={`${ctg.name}`}>{ctg.name}</option>
              ))}
            </select>
          </div>
        </div> */}

        <div className="products-and-service-cards-variants-container">
          {products.product &&
            products.product.map((card, i) => (
              <CardVariant
                key={card.id}
                image={card.image}
                serviceName={card.name}
                // category={card.category}
                // city={card.city}
                description={card.description}
                // products={card.products}
                // services={card.services}
                // coins={card.coins}
                id={card.id}
              />
            ))}
        </div>
        {/* <Pagination currentPage={currentPage} onChangePage={setCurrentPage} /> */}
      </div>
    )
  );
};

export default ProductsAndService;
