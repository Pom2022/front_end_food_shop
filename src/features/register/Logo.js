import React from "react";
import logo from "../../assets/images/png-clipart-fast-food-restaurant-hamburger-burger-king-logo-burger-king-food-text.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Logo() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <img src={logo} className="w-25 h-25" />
    </div>
  );
}

export default Logo;
