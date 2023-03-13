const initialState = [];

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("localCart")) || initialValue;

// export const initializer = () => {
//   return initialState;
// };

export const cartReducer = (state, action) => {
  switch (action.type) {
    // ระบบคำนวณราคา

    // ระบบเพิ่มลดสินค้า
    case "ADD_TO_CART": {
      const product = action.payload;
      let index = state.findIndex((item) => product.name === item.name);
      if (index >= 0) {
        const newState = [...state];
        newState.splice(index, 1, {
          ...state[index],
          quantity: state[index].quantity + 1,
        });
        return newState;
      } else {
        return [...state, { ...product, quantity: 1 }];
      }
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.name !== action.item.name);

    case "DECREMENT_QUANTITY":
      // if quantity is 1 remove from cart, otherwise decrement quantity
      return state.find((item) => item.name === action.item.name)?.quantity ===
        1
        ? state.filter((item) => item.name !== action.item.name)
        : state.map((item) =>
            item.name === action.item.name
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          );

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  item,
});

export const decrementItemQuantity = (item) => ({
  type: "DECREMENT_QUANTITY",
  item,
});

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  item,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

// อันเก่า

// const initialState = [];

// export const initializer = (initialValue = initialState) =>
//   JSON.parse(localStorage.getItem("localCart")) || initialValue;

// // export const initializer = () => {
// //   return initialState;
// // };

// export const cartReducer = (state, action) => {
//   switch (action.type) {
//     // ระบบคำนวณราคา

//     // ระบบเพิ่มลดสินค้า
//     case "ADD_TO_CART": {
//       const product = action.payload;
//       let index = state.findIndex((item) => product.name === item.name);
//       if (index >= 0) {
//         const newState = [...state];
//         newState.splice(index, 1, {
//           ...state[index],
//           quantity: state[index].quantity + 1,
//         });
//         return newState;
//       } else {
//         return [...state, { ...product, quantity: 1 }];
//       }
//     }

//     case "REMOVE_FROM_CART":
//       return state.filter((item) => item.name !== action.item.name);

//     case "DECREMENT_QUANTITY":
//       // if quantity is 1 remove from cart, otherwise decrement quantity
//       return state.find((item) => item.name === action.item.name)?.quantity ===
//         1
//         ? state.filter((item) => item.name !== action.item.name)
//         : state.map((item) =>
//             item.name === action.item.name
//               ? {
//                   ...item,
//                   quantity: item.quantity - 1,
//                 }
//               : item
//           );

//     case "CLEAR_CART":
//       return initialState;

//     default:
//       return state;
//   }
// };

// export const addToCart = (item) => ({
//   type: "ADD_TO_CART",
//   item,
// });

// export const decrementItemQuantity = (item) => ({
//   type: "DECREMENT_QUANTITY",
//   item,
// });

// export const removeFromCart = (item) => ({
//   type: "REMOVE_FROM_CART",
//   item,
// });

// export const clearCart = () => ({
//   type: "CLEAR_CART",
// });
