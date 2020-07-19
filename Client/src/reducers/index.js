import Cookie from 'js-cookie'
import {combineReducers} from 'redux'
// import productDetailReducer from './selectedProduct'
import productReducer from './productData'
import {selectedProductReducer, productDetailReducer} from './selectedProduct'
import {cartReducer} from './cartReducer'
import {
    userSigninReducer,
    userRegisterReducer,
    userUpdateReducer,
  } from './user';
  const userInfo = Cookie.getJSON('userInfo') || null;
  const initialState = {userSignin : {userInfo}}
const allReducers = combineReducers({
products: productReducer,
selectedProduct: selectedProductReducer,
removeFromCart: selectedProductReducer,
productDetail :productDetailReducer,
cart: cartReducer,
onSuccessBuy: cartReducer,
userSignin: userSigninReducer,
userRegister: userRegisterReducer,
userUpdate: userUpdateReducer,
})

export default allReducers;
