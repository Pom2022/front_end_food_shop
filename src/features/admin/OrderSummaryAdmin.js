import { React, useState, useEffect } from "react";

import HeaderOrderSummary from "../ordersummary/HeaderOrderSummary";
import TitleOrderSummary from "../ordersummary/TitleOrderSummary";

import * as OrderApi from "../../apis/order-api";
import ShowOrderAdmin from "./ShowOrderAdmin";
import OrderCalculationAdmin from "./OrderCalculationAdmin";
import Address from "./Address";
import OrderInformation from "./OrderInformation";

function OrderSummaryAdmin() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await OrderApi.getAllOrder();
      setOrder(res.data);
      // console.log(res.data[14].OrderDetails);
      // console.log(res.data[res.data.length - 1]);
      console.log(res.data);
    };
    fetchPost();
  }, []);
  console.log(order);

  return (
    <div>
      <div className=" pt-6 pb-2 ">
        <HeaderOrderSummary />
      </div>
      <div className=" p-6">
        <TitleOrderSummary />
      </div>
      <div className="mb-3">
        {order?.map((el) => (
          <div key={el.id}>
            <div>
              <OrderInformation key={el.id} order={el} />
            </div>
            <div>
              <ShowOrderAdmin key={el.id} order={el} />
            </div>
            <div className="ml-7 mr-4 px-1">
              <OrderCalculationAdmin key={el.id} order={el} />
            </div>
            <div className=" p-8">
              <Address key={el.id} order={el} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderSummaryAdmin;
