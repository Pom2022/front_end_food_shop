import React from "react";

function OrderInformation(props) {
  return (
    <div>
      <div className="flex flex-row ">
        <div className="font-bold ml-6"> Costomer Id </div>
        <div className="ml-6"> {props.order.Customer?.id}</div>
      </div>

      <div className="flex flex-row ">
        <div className="font-bold ml-6">Order Id</div>
        <div className="ml-5">{props.order.id}</div>
      </div>
    </div>
  );
}

export default OrderInformation;
