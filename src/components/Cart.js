import { connect } from 'react-redux'
import './Products.css'
import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import { bindActionCreators } from 'redux'
import { removeFromCart } from '../actions/removeFromCart';
import { cartItemQty } from '../actions/cartItemQty';
import { subQuantity } from '../actions/SubQuantity'
import './Cart.css'
import { FaCheckCircle, FaArrowDown, FaTrashAlt, FaArrowUp, FaChevronCircleLeft } from 'react-icons/fa'



class Cart extends Component {
    render() {
        return (
            <div>
                <h1 id='header'>Your selected Items</h1>
                <Link to='products' id='back'>
                    <FaChevronCircleLeft color='black' size={22} />
                 Back To Products</Link>

                <ul className="card-deck">
                    {
                        this.props.cart.map((product, index) =>

                            <li key={index}>
                                <div className='card'>
                                    <Link to={`product/${product.id}`}><img className="card-img-top" id='image' src={product.picture} /></Link>

                                    <div className='card-bod'>
                                        <p className="card-text">{product.type}</p>
                                        <p className="card-text">${product.price}</p>

                                    </div>

                                    <span>Qnty: {product.count}</span>
                                    <div className="buttons">
                                        <button id="dec" className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => this.props.cartItemQty(product.id)} value="">
                                            <FaArrowUp color='rgb(255, 215, 0' size={22} />
                                    Inc Qnty</button>
                                        <button id="inc" className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => this.props.subQuantity(product.id)} value="">Dec Qnty
                                    <FaArrowDown color='rgb(255, 215, 0' size={22} />
                                        </button>
                                    </div>
                                    <div className="buttons">
                                        <button id="remove" className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => this.props.removeFromCart(product)}>Remove
                                    <FaTrashAlt color='red' size={22} />
                                        </button>
                                        
                                        <Link to= {'/checkout'}  button to= {'/checkout'} id="checkout" className="btn btn-outline-success my-2 my-sm-0" type="submit" >
                                
                                            Checkout
                                       <FaCheckCircle color='green' size={22} />
                                        </Link>
                                        
                                    </div>
                                    </div>


                            </li>

                        )}
                </ul>
            </div>

        )
    }
}


function mapStateToProps(state) {
    return {
        cart: state.selectedProduct.cart
    };

}

// const matchDispatchToProps = {
//     removeFromCart,
//      cartItemQty
// }
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ removeFromCart, cartItemQty, subQuantity }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Cart)