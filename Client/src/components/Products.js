import React, { useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import  {productLists} from '../actions/productsAction'
import axios from 'axios'
import './Products.css'
import Home from './Home'
import {
    Link
} from "react-router-dom";
import {addToCart} from '../actions/addTocart';
import Footer from './Footer'
import { FaCartPlus, FaDollarSign} from 'react-icons/fa'
import NavBar from './NavBar'


function Products (props) {
    //hooks
// const [products, setProduct] = useState([]);
const selectedProduct = useSelector(state => state.selectedProduct)    
const {products, loading, error} = selectedProduct;
const dispatch = useDispatch()


useEffect(() => {
      dispatch(productLists());
        return () => {
            // cleanup
        }
    }, [])
        return (
            loading? <div className="loader"></div>
            :
            error ?  <div>{error}</div> :
            <div  >
                <NavBar />
                <ul className="card-deck">

                    {
                        products.map(product =>
                            <li key={product.id}>
                                <div className='card'>
                                    <Link to= {`/products/${product.id}`}><img className="card-img-top" id='image' src={product.picture}/></Link>
                                    <div className='card-bod'>
                                   <Link to={`/products/${product.id}`}><h5 className="card-title" >{product.brand} </h5> </Link> 
                                    <p className="card-text">{product.type}</p>
                                    <p className="card-text">${product.price}</p>
                                    </div>

                                </div>
                            </li>
                        )}
                </ul>
                <Footer />
            </div>
        )
    }



export default Products;

