import React from "react";
import { Link } from "react-router-dom";

const image = {
  backgroundImage:
    "url(" +
    "https://lh3.googleusercontent.com/JMLnCpPYwogPZqo3DZXs3b-n4KAQTJjCLIxs6emmrAd5oSiYBilYvvTOxfS4t4xKAEbVWgmHWwUT3GnDzKG533Y=w1351" +
    ")"
};
const button = {
  marginLeft:"25%"
};

export default () => (
  <div>
    <div
      className="position-relative overflow-hidden text-center bg-light"
      style={image}
    >
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">Bienvenido</h1>
        <p className="lead font-weight-normal">
          Una plataforma donde podras cargar tus conocimientos a traves de
          videos, quizes, descripciones, experiencia y mucho mas!
        </p>
        
      </div>
      <div className="product-device shadow-sm d-none d-md-block" />
      <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
    </div>
    <br />
    <br />
    <div className="container">

    </div>
  </div>
);
