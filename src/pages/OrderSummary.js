import { React, useState, useEffect } from "react";
import HeaderOrderSummary from "../features/ordersummary/HeaderOrderSummary";
import NameEmail from "../features/ordersummary/NameEmail";
import OrderCalculation from "../features/ordersummary/OrderCalculation";
import Payment from "../features/ordersummary/Payment";
import ShowOrder from "../features/ordersummary/ShowOrder";
import SubmitOrderButton from "../features/ordersummary/SubmitOrderButton";
import TitleOrderSummary from "../features/ordersummary/TitleOrderSummary";
import * as OrderApi from "../apis/order-api";

function OrderSummary() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await OrderApi.getAllOrder();
      setOrder(res.data[res.data.length - 1]);
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
        <ShowOrder order={order} />
      </div>
      <div className="ml-7 mr-4 px-1">
        <OrderCalculation order={order} />
      </div>
      <div className=" p-8">
        <NameEmail order={order} />
      </div>
      <div className=" px-8 pt-6 pb-2">
        <Payment />
      </div>
      <div>
        <SubmitOrderButton />
      </div>
    </div>
  );
}

export default OrderSummary;
