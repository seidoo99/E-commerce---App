import { useSelector, useDispatch } from 'react-redux'
import './ProductDetail.css'
import React, { useEffect } from 'react'
import {productDetails} from '../actions/productsAction'
import {
    Link
} from "react-router-dom";
import { FaStar, FaArrowAltCircleLeft, FaTrashAlt, FaArrowUp, FaChevronCircleLeft } from 'react-icons/fa'





function ProductDetail(props) {
    const productDetail = useSelector(state => state.productDetail)
    const { product, loading, error } = productDetail;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productDetails(props.match.params.id))
        return () => {
            //   cleanup
        }
    }, [])

    return (
        loading ? <div className="loader"></div>
            :
            error ? <div>{error}</div> :
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
                            </div>
                        </div>
                    </div>
                </div>
    )
}


export default ProductDetail




// import { connect } from 'react-redux'
// import './ProductDetail.css'
// import React, { Component } from 'react'
// import {
//     Link
// } from "react-router-dom";

// // import './Cart.css'
// import { FaStar, FaArrowAltCircleLeft, FaTrashAlt, FaArrowUp, FaChevronCircleLeft } from 'react-icons/fa'




// export class ProductDetail extends Component {
//     constructor (props) {
//         super(props)
  
//         this.state = {
//             product: {}
//         }
//     }

//     componentDidMount (){
//         const productId = this.props.match.params.id;
//         console.log(this.props.cart)
//         this.setState({
//             product: this.props.products.find(product => {
//                 return product.id == productId
                
//             })
//         })
       
//     }

//     render() {
//         return (
//             <div className="card mb-3" >
//             <div className="row no-gutters">
//               <div className="col-md-4">
//                 <img src={this.state.product.picture} className="card-img" alt="product picture" />
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h5 className="card-title" id="title">Product Description</h5>
//                   <h5 className="card-title" id="brand">{this.state.product.brand}</h5>

//                   <p className="card-text" id="descriptionpage">{this.state.product.description}</p>
//                   <p className="card-text" id="ratings">Rating:-
//                   <FaStar className="card-text" color='rgb(255, 215, 0' size={22} />
//                   <FaStar className="card-text" color='rgb(255, 215, 0' size={22} />
//                   <FaStar className="card-text" color='rgb(255, 215, 0' size={22} />
//                  </p>
//                 <br></br>
//                 <br></br>
//                 <Link to='/api/products' id="backarrow" ><p >
//                  <FaArrowAltCircleLeft className="card-text" color='babyblue' size={30} />
//                  Back to Products
//                </p>
//                </Link> 
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//     }
// }


// function mapStateToProps(state) {
//     return {
//         products: state.products
//     };

// }
// export default connect(mapStateToProps)(ProductDetail)
