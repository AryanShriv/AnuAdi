import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-body">
      <div class="loader-container">
        <div class="loader"></div>
        <div class="loader"></div>
        <div class="loader"></div>
      </div>
    </div>
  );
};

export default Loader;
