import { createContext, useEffect, useReducer, useState } from "react";
import {
  // calculateTotal,
  cartReducer,
  decrementItemQuantity,
  initializer,
} from "../reducer/CartReducer";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, [], initializer);
  const [sendTopOnPage, setSendTopOnPage] = useState(false);

  const addToTopAddonPage = (topAddOnProduct) =>
    setSendTopOnPage(topAddOnProduct);

  console.log(state);

  console.log(sendTopOnPage);

  // const calculatePriceTotal = (item) => dispatch(calculateTotal(item));

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(state));
  }, [state]);

  // useEffect(() => {
  //   dispatch({ type: "CALCULATE_TOTAL" });
  // }, [state]);

  const addToCartHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const decrementQuantity = (item) => dispatch(decrementItemQuantity(item));

  return (
    <CartContext.Provider
      value={{
        ...state,

        decrementQuantity,
        addToCartHandler,
        addToTopAddonPage,
        sendTopOnPage,
        // calculatePriceTotal,

        state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
