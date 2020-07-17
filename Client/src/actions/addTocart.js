import axios from 'axios'
import Cookie from "js-cookie";


const addToCart = (productId, qut) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get("/api/products/" + productId);
      dispatch({
        type: "CART_ADD_ITEM",payload: {
            product: data._id,
            brand: data.brand,
            picture: data.picture,
            price: data.price,
            countInStock: data.countInStock,
            qut
          }
      });
      const { cart: { cartItems } } = getState();
      Cookie.set("cartItems", JSON.stringify(cartItems));
  
    } catch (error) {
  
    }
  }

  const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: productId });
  
    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  }
  export { addToCart, removeFromCart }

