import axios from "../config/axios";

export const createProduct = (input) => axios.post("/food_product", input);
export const getAllFoodProduct = () =>
  axios.get("/food_product/getAllFoodProduct");
export const updateProduct = (input, id) =>
  axios.patch(`/food_product/${id}`, input);
export const deleteFoodProduct = (foodProductId) =>
  axios.delete(`/food_product/deleteFoodProduct/${foodProductId}`);
