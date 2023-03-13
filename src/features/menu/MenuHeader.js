import React from "react";
import { BsPersonCircle } from "react-icons/bs";

function MenuHeader() {
  return (
    <div className="bg-white-300 py-8  flex flex-row-reverse justify-between ">
      <div>
        <BsPersonCircle className="text-6xl mr-4 text-gray-400" />
      </div>

      <div>
        <p className="text-4xl ml-4 font-bold text-gray-600">Menu</p>
      </div>
    </div>
  );
}

export default MenuHeader;
