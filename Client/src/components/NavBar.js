import React, { Component } from 'react'
import './Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FaShoppingCart, FaEnvelope, FaCogs, FaHome } from 'react-icons/fa'
import Footer from './Footer';

export class NavBar extends Component {
    render() {
        return (
            <Route>
                <div>
                    <div id="navlinks">
                        <nav id="nav" className="navbar">
                        <Link to='/'>Home
                        <FaHome id='contacticon' color='rgb(225, 203, 78' size={37} />
                        </Link>

                            <Link to='products'>Products
                            <FaCogs id='contacticon' color='rgb(225, 203, 78' size={37} />
                            </Link>
                            

                            <Link to="contact">Contact
                <FaEnvelope id='contacticon' color='rgb(225, 203, 78' size={34} />
                            </Link>
                            <Link to="cart">Cart
                <FaShoppingCart id='carticon' color='rgb(225, 203, 78' size={37} />
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                            <span>
                            </span>
                        </nav>
                    </div>

                </div>
            </Route>
        )
    }
}

export default NavBar
