import React from "react";
import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

export const initialState = {
  foodItems: null,
};
