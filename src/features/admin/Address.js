import React from "react";

function Address(props) {
  return (
    <div>
      <div className="flex flex-col font-semibold">
        <div className="font-bold">Address</div>
        <div className="flex flex-row justify-between">
          <div>
            <div>{props.order.Customer?.firstName}</div>
            <div>{props.order.Customer?.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
