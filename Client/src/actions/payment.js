import axios from "axios";
import Cookie from "js-cookie";
import {useHistory} from 'react-router-dom';


const onSuccessBuy = (productId) => (dispatch, getState) => {
 dispatch({ type: "ON_SUCCESS_BUY", payload: productId });
    const { cart: { cartItems } } = getState();
     Cookie.set("cartItems", JSON.stringify(cartItems));
     setTimeout(() => {
        dispatch({ type: "REMOVE_SUCCESS_MESSAGE" });

     }, 3000);

    
 
  }
 export  {onSuccessBuy}



 