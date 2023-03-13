import React from "react";
import ShowOrderItem from "./ShowOrderItem";

function ShowOrder({ order }) {
  console.log(order.OrderDetails);

  return (
    <div>
      {order.OrderDetails?.map((el) => (
        <ShowOrderItem key={el.id} order={el} />
      ))}
    </div>
  );
}

export default ShowOrder;
