import Cookie from 'js-cookie'
import {combineReducers} from 'redux'
// import productDetailReducer from './selectedProduct'
import productReducer from './productData'
import {selectedProductReducer, productDetailReducer} from './selectedProduct'
import {cartReducer} from './cartReducer'


const initialState = {userSignin : {userInfo}}
const allReducers = combineReducers({
products: productReducer,
selectedProduct: selectedProductReducer,
removeFromCart: selectedProductReducer,
productDetail :productDetailReducer,
cart: cartReducer
})

export default allReducers;