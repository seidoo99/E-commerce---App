import {combineReducers} from 'redux'

import productReducer from './productData'
import {selectedProductReducer, productDetailReducer} from './selectedProduct'


const allReducers = combineReducers({
products: productReducer,
selectedProduct: selectedProductReducer,
removeFromCart: selectedProductReducer,
productDetail :productDetailReducer
})

export default allReducers;