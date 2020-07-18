function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
      case "CART_ADD_ITEM":
        const item = action.payload;
        const product = state.cartItems.find(x => x.product == item.product);
        if (product) {
          return {
            cartItems:
              state.cartItems.map(x => x.product == product.product ? item : x)
          };
        }
        return { cartItems: [...state.cartItems, item] };
      case "CART_REMOVE_ITEM":
        return { cartItems: state.cartItems.filter(x => x.product !== action.payload) }
      default:
        return state
    }
  }
  export { cartReducer } 




















// function cartReducer(state = { cart: [] }, action) {
//     // switch (action.type) {
//     //   case CART_ADD_ITEM:
//     //     const item = action.payload;
//     //     const product = state.cartItems.find(x => x.product === item.product);
//     //     if (product) {
//     //       return {
//     //         cartItems:
//     //           state.cartItems.map(x => x.product === product.product ? item : x)
//     //       };
//     //     }
//     //     return { cartItems: [...state.cartItems, item] };
//     switch (action.type) {
//     case "PRODUCT_SELECTED":
//         return {
//           ...state,
//           cart: [...state.cart, action.payload]
//         }
//       case "CART_REMOVE_ITEM":
//         return { cartItems: state.cartItems.filter(x => x.product !== action.payload) }
//       default:
//         return state
//     }
//   }
  
//   export { cartReducer } 