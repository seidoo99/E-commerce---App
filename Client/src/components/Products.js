import React, { useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import  {productLists} from '../actions/productsAction'
import './Products.css'
import {
    Link
} from "react-router-dom";
import Footer from './Footer'
import NavBar from './NavBar'


function Products (props) {
const selectedProduct = useSelector(state => state.selectedProduct)    
const {products, loading, error} = selectedProduct;
const dispatch = useDispatch()

const cart = useSelector(state => state.cart );

const { showSuccessMessage } = cart;


useEffect(() => {
      dispatch(productLists());
        return () => {
        }
    }, [])
        return (

            loading? <div className="loader"></div>
            :
            error ?  <div>{error}</div> :
            <div  >
                <NavBar />
{ showSuccessMessage &&
    <div className="alert alert-success alert-dismissible fade show">
    <strong>Success!</strong> Your ordere has been successfully placed.
    <button type="button" className="close" data-dismiss="alert">&times;</button>
</div>
}
   
                <ul className="card-deck">

                    {
                        products.map(product =>
                            <li key={product._id}>
                                <div className='card'>
                                    <Link to= {`/products/${product._id}`}><img className="card-img-top" id='image' src={product.picture}/></Link>
                                    <div className='card-bod'>
                                   <Link to={`/products/${product._id}`}><h5 className="card-title" >{product.brand} </h5> </Link> 
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

