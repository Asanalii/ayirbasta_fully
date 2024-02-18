import React, { useContext } from "react";
import Header from "../../components/Header";
import OffersNearby from "../../components/OffersNearby/OffersNearby";
import ProductsAndService from "../../components/ProductsAndService/ProductsAndService";
import Footer from "../../components/Footer";
import { AuthContext } from "context/AuthContext";

function Products() {
  return (
    <div className="Products">
      <Header />
      <OffersNearby />
      <ProductsAndService />
      <Footer />
    </div>
  );
}

export default Products;
