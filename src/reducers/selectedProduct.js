
export default function (state = { cart: []}, action) {
  console.log(action)
  switch (action.type) {

    case "PRODUCT_SELECTED":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    case "REMOVE_SELECTED":
      console.log(action)
      
      return {
        ...state,
        cart: state.cart.filter(cart => action.payload.id !== cart.id)
      }

    case "ADD_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === action.id
            ? {...product, count: product.count + 1}
            : product,
        ),
      };
      // console.log(action)
      // return {
      //   ...state,
      //   cart: [...state.cart.filter(cart => action.id !== cart.id), 
      //     increamentQuantity(state.cart, action) ]
      // }

      case "SUB_QUANTITY":
        return {
          ...state,
          cart: state.cart.map(product =>
            product.id === action.id
              ? {
                  ...product,
                  count: product.count !== 1 ? product.count - 1 : 1,
                }
              : product,
          ),
        };
        default:
          return state;
      }
      // console.log(action)
      // return {
      //   ...state,
      //   cart: [...state.cart.filter(cart => action.id !== cart.id), 
      //     decreamentQuantity(state.cart, action) ]
      // }

  //   default:
  //     return state;
  // }

};

// function increamentQuantity(cart, action){
//   let cart1 = cart.filter(cart => action.id === cart.id)[0]
//    cart1.count = cart1.count + 1
//    return cart1

     
// }


// function decreamentQuantity(cart, action){
//   let cart1 = cart.filter(cart => action.id === cart.id)[0]
//    cart1.count = cart1.count - 1
//     return cart1
     
// }
