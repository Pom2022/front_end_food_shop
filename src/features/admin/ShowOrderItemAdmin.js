import React from "react";

function ShowOrderItemAdmin(props) {
  console.log(props);
  return (
    <div className="flex flex-col justify-between ">
      <div>
        <div className="flex flex-row  justify-between">
          <div className="flex flex-row justify-row">
            <div className="flex flex-row justify-row">
              <div className=" px-2 py-2 ml-5 mr-3 mt-3.5 font-normal text-lg ">
                {props.order.quantity} X
              </div>
              <div className="mt-3  mr-20 font-normal text-normal">
                <div>{props.order.FoodProduct.name}</div>
                <div className="font-normal text-xs">
                  Food_id || {props.order.FoodProduct.id}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 mr-5">
            ฿{props.order.FoodProduct.price * props.order.quantity}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowOrderItemAdmin;
