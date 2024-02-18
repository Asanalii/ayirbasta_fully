import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Offers from "../pages/Offers";
import Login from "../pages/Login";
// import Products from './pages/Products'
import Registration from "../pages/Registration";

import "../scss/app.scss";

import AddOffer from "pages/AddOffer";
import Chat from "pages/Chat";
import Coins from "pages/Coins";

import { AuthProvider } from "../context/AuthContext";

import PrivateRoute from "../utils/PrivateRoute";
import Products from "pages/Products/Product";
import Settings from "pages/Settings/Settings";
import BartersPageInfo from "pages/BartersPageInfo/BartersPageInfo";
import ProductPage from "../pages/ProductPage";
import BartersPage from "pages/BartersPage";
import EditProduct from "pages/EditProduct";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <div className="info-about-mvp">Site in MVP</div>

          <Routes>
            <Route path="/" element={<Products />} />
            <Route
              path="/offers"
              element={
                <PrivateRoute>
                  <Offers />
                </PrivateRoute>
              }
            />
            <Route
              path="/coins"
              element={
                <PrivateRoute>
                  <Coins />
                </PrivateRoute>
              }
            />
            <Route
              path="/offers/add-offer"
              element={
                <PrivateRoute>
                  <AddOffer />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/chat"
              element={
                <PrivateRoute>
                  <Chat />
                </PrivateRoute>
              }
            />
            <Route path="/registration" element={<Registration />} />
            <Route path={`/product/:id`} element={<ProductPage />} />
            <Route path={`/product/edit/:id`} element={<EditProduct />} />

            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route
              path="/barters/:id"
              element={
                <PrivateRoute>
                  <BartersPageInfo />
                </PrivateRoute>
              }
            />
            <Route
              path="/barters"
              element={
                <PrivateRoute>
                  <BartersPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
