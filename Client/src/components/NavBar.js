import React, { Component } from 'react'
import './Home.css'
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { logout} from '../actions/userActions';
// import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory
} from "react-router-dom";
import { FaShoppingCart, FaEnvelope, FaCogs, FaHome } from 'react-icons/fa'
import Footer from './Footer';

function NavBar () {
    const userSignin = useSelector(state=> state.userSignin);
    const {userInfo} = userSignin;
    
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        history.push("/");
      }

        return (
            <Route>
                <div>
                    <div id="navlinks">
                        <nav id="nav" className="navbar">
                        <Link to='/'>Home
                        <FaHome id='contacticon' color='rgb(225, 203, 78' size={37} />
                        </Link>

                            <Link to='/api/products'>Products
                            <FaCogs id='contacticon' color='rgb(225, 203, 78' size={37} />
                            </Link>
                            {userInfo ? (
                                <Link to="/cart/:id?">Cart
                <FaShoppingCart id='carticon' color='rgb(225, 203, 78' size={37} />
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                              ) : (
                                ''
                              )}
                            {userInfo ? (
                                <Link to="/profile">{userInfo.name}</Link>
                              ) : (
                                <Link to="/signin">Sign In</Link>
                              )}
                              
                              {userInfo ? (
                                <Link onClick={handleLogout}>logout</Link>
                              ) : (
                                ''
                              )}
                            <span>
                            </span>
                        </nav>
                    </div>

                </div>
            </Route>
        )
    }

export default NavBar
