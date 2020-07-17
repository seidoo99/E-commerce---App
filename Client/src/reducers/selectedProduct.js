
function selectedProductReducer(state = { products: [] }, action) {
  console.log(action)

  switch (action.type) {
    case "PRODUCTS_REQUEST":
      return { loading: true };
    case "PRODUCTS_SUCESS":
      return { loading: false, products: action.payload };
    case "PRODUCTS_FAIL":
      return { loading: false, error: action.payload };
    
    
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
            ? { ...product, count: product.count + 1 }
            : product,
        ),
      };
 
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
};


function productDetailReducer (state = {product: {} }, action){
  console.log(action)

  switch (action.type) {
    case "FETCH_PRODUCTDETAIL":
      return { loading: true };
    case "FETCH_PRODUCTDETAIL_SUCESS":
      console.log(action)

      return { loading: false, product: action.payload };
    case "FETCH_PRODUCTDETAIL_FAIL":
      return { loading: false, error: action.payload };
      default:
        return state;
    };
   
  
}

export default {selectedProductReducer, productDetailReducer};


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
