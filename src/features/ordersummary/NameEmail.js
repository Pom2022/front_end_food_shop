import React from "react";

function NameEmail({ order }) {
  return (
    <div>
      <div className="flex flex-col font-semibold">
        <div className="font-bold">Address</div>
        <div className="flex flex-row justify-between">
          <div>
            <div>{order.Customer?.firstName}</div>
            <div>{order.Customer?.address}</div>
          </div>
          <div className="text-yellow-400">Change</div>
        </div>
      </div>
    </div>
  );
}

export default NameEmail;
