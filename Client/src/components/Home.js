import React, { Component } from 'react'
import './Home.css'
import {  FaHandshake, FaCartArrowDown } from 'react-icons/fa'
import Footer from './Footer';
import NavBar from './NavBar';

class Home extends Component {
    render() {
        return (
                <div>
                <NavBar />
                
                <h3 id='welcome'>Welcome To
        
                 Digital ShoppingCart
                <br></br>
                        <FaCartArrowDown id="homecart" color='rgb(225, 203, 78' size={200} />
                    </h3> 
                    <Footer />
                </div>
        )
    }
}

export default Home