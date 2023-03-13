import React from "react";

function OrderCalculationAdmin(props) {
  return (
    <div>
      <div className="flex flex-row justify-between my-1.5">
        <div className="font-semibold">Sub Total</div>
        <div className="font-semibold">${props.order.totalPrice - 30}</div>
      </div>
      <div className="flex flex-row justify-between my-1.5 ">
        <div className="font-semibold">delivery</div>
        <div className="font-semibold">฿30</div>
      </div>
      <div className="flex flex-row justify-between my-1.5">
        <div className="text-xl font-bold">Total</div>
        <div className="text-3xl font-semibold">฿{props.order.totalPrice}</div>
      </div>
    </div>
  );
}

export default OrderCalculationAdmin;
