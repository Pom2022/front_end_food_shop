import React from "react";
import ShowOrderItemAdmin from "./ShowOrderItemAdmin";

function ShowOrderAdmin(props) {
  console.log(props.order);
  return (
    <div>
      {props.order.OrderDetails?.map((el) => (
        // console.log(el)
        <ShowOrderItemAdmin key={el.id} order={el} />
      ))}
    </div>
  );
}

export default ShowOrderAdmin;
