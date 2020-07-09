import {combineReducers} from 'redux'

import productReducer from './productData'
import selectedProductReducer from './selectedProduct'


const allReducers = combineReducers({
products: productReducer,
selectedProduct: selectedProductReducer,
removeFromCart: selectedProductReducer
})

export default allReducers;