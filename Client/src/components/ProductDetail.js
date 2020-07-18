import { useSelector, useDispatch } from 'react-redux'
import './ProductDetail.css'
import React, { useEffect, useState } from 'react'
import {productDetails} from '../actions/productsAction'
import {addToCart} from '../actions/addTocart'
import NavBar from './NavBar';

import {
    Link
} from "react-router-dom";
import { FaStar, FaArrowAltCircleLeft, FaTrashAlt, FaArrowUp, FaChevronCircleLeft } from 'react-icons/fa'



function ProductDetail(props) {
    const productDetail = useSelector(state => state.productDetail)
    const { product, loading, error } = productDetail;
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const userSignin = useSelector(state=> state.userSignin);
    const {userInfo} = userSignin;

    useEffect(() => {
        dispatch(productDetails(props.match.params.id))
        return () => {
            //   cleanup
        }
    }, [])
    const addToCartHandler = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }
    return (
        loading ? <div className="loader"></div>
            :
            error ? <div>{error}</div> :
            <div> <NavBar /> 
                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={product.picture} className="card-img" alt="product picture" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title" id="title">Product Description</h5>
                                <h5 className="card-title" id="brand">{product.brand}</h5>

                                <p className="card-text" id="descriptionpage">{product.description}</p>
                                <p className="card-text" id="ratings">Rating:-
                  <FaStar className="card-text" color='rgb(255, 215, 0' size={22} />
                                    <FaStar className="card-text" color='rgb(255, 215, 0' size={22} />
                                    <FaStar className="card-text" color='rgb(255, 215, 0' size={22} />
                                </p>
                                <br></br>
                                <br></br>
                                <Link to='/api/products' id="backarrow" ><p >
                                    <FaArrowAltCircleLeft className="card-text" color='babyblue' size={30} />
                 Back to Products
               </p>
               </Link>

               <div>
                  {/* Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                    {[...Array(product.qut).keys()].map(x =>
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    )}
                  </select> */}

                  {userInfo ? (
                    <button onClick={addToCartHandler} className="button primary" >Add to Cart</button>
                  ) : (
                    ''
                  )}
                </div>
                   
                  
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    )
}


export default ProductDetail





