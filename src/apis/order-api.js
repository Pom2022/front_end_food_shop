import axios from "../config/axios";

export const createOrder = (input) => axios.post("/order", input);
export const getAllOrder = () => axios.get("/order/getAllFoodProduct");
