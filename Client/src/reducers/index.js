import {combineReducers} from 'redux'

import productReducer from './productData'
import selectedProductReducer from './selectedProduct'
import {
    userSigninReducer,
    userRegisterReducer,
    userUpdateReducer,
  } from './user';

const allReducers = combineReducers({
products: productReducer,
selectedProduct: selectedProductReducer,
removeFromCart: selectedProductReducer,
userSignin: userSigninReducer,
userRegister: userRegisterReducer,
userUpdate: userUpdateReducer,
})

export default allReducers;