// import { connect } from 'react-redux'
// import './Products.css'
// import {
//     Link
// } from "react-router-dom";
// import { bindActionCreators } from 'redux'
// import { cartItemQty } from '../actions/cartItemQty';
// import { subQuantity } from '../actions/SubQuantity'
// import './Cart.css'
// import { FaCheckCircle, FaArrowDown, FaTrashAlt, FaArrowUp, FaChevronCircleLeft } from 'react-icons/fa'
// import React, { useEffect } from 'react';
// import { addToCart, removeFromCart } from '../actions/addTocart';
// import { useDispatch, useSelector } from 'react-redux';

import { FaStar, FaArrowAltCircleLeft, FaTrashAlt, FaArrowUp, FaChevronCircleLeft } from 'react-icons/fa'
import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/addTocart';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css'
import NavBar from './NavBar';

function Cart(props) {

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qut = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId,qut));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }

  return   <div> <NavBar/>
  <div className="cart">
    <div className="cart-list">
      <ul className="cart-list-container">
        <li>
          <h3>
            Shopping Cart
          </h3>
          <Link to='/api/products' id="backarrow" ><p >
                                    <FaArrowAltCircleLeft className="card-text" color='babyblue' size={30} />
                 Back to Products
               </p>
               </Link>
          <div>
            Price
          </div>
        </li>
        {
          cartItems.length === 0 ?
            <div>
              Cart is empty
          </div>
            :
            cartItems.map(item =>
              <li>
                <div className="cart-image">
                  <img src={item.picture} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/product/" + item.product}>
                      {item.name}
                    </Link>

                  </div>
                  <div>
            Qty: <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
                    {/* Qty:
                  <select value={item.qut} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select> */}
                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)} >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  ${item.price}
                </div>
              </li>
            )
        }
      </ul>

    </div>
    <div className="cart-action">
      <h3>
        Subtotal ( {cartItems.reduce((a, c) => a + c.qut, 0)} items)
        :
         $ {cartItems.reduce((a, c) => a + c.price * c.qut, 0)}
      </h3>
      <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
        Proceed to Checkout
      </button>

    </div>

  </div>
  </div>
}





export default Cart