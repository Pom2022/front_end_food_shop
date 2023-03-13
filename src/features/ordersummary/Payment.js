import React from "react";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";

function Payment() {
  return (
    <div className="flex flex-col font-semibold">
      <div>Payment</div>

      <div className="flex flex-row justify-between">
        <div className="font-normal flex flex-row ">
          <div>
            <RiVisaFill className="font-normal text-3xl" />
          </div>
          <div>
            <FaCcMastercard className="font-normal text-3xl" />
          </div>
          Credit Card
        </div>
        <div className="text-yellow-400 font-semibold">Change</div>
      </div>
    </div>
  );
}

export default Payment;
