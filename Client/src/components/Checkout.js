import React, { Component } from 'react'
import './pagecolor.css'
import {
  Link
} from "react-router-dom";
import { FaArrowAltCircleLeft } from 'react-icons/fa'



export class Checkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: 
      <div className="loader"></div>

    }
    
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    setTimeout(() => {
      this.setState({
        data: 
        <div>
        <Link to='/cart' id='back'> 
        <FaArrowAltCircleLeft color='black' size={22} />
        Back To Cart</Link>
        <div className="row">
        <div className="col-75">
          <div className="container">
          <form action="/action_page.php">

        <div className="row">
          <h3>Billing Address</h3>
            <label for="fname"><i className="fa fa-user">
              <br></br>
              <br></br>

            </i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Full Name" />
            <label for="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="email" />
            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="Street"/>
            <label for="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="City"></input>
            <div className="row">   
            <div className="col-50">      
            <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="State.." />    
            </div>   
            <div className="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="Zip.." />
              </div>
              </div>

        </div>
        <div className="col-50">
            <h3>Payment</h3>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="" />
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="" />
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="" />         
               </div>

               <div className="row">
              <div className="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="" />
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="" />
              </div>
            </div>

        <label>
          <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
        </label>
        <input type="submit" value="Continue to checkout" className="btn"></input>
        
        
        </form>
        </div>

        </div>

        </div>
</div>
      })
    }, 2000)
  }
    render() {
       return (
         <div>
                {this.state.data}

        </div>
    
       )
    }
}

export default Checkout

