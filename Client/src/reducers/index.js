import Cookie from 'js-cookie'
import {combineReducers} from 'redux'
import productDetailReducer from './'
import productReducer from './productData'
import selectedProductReducer from './selectedProduct'
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
userSignin: userSigninReducer,
userRegister: userRegisterReducer,
userUpdate: userUpdateReducer,
// productDetail :productDetailReducer

})

export default allReducers;