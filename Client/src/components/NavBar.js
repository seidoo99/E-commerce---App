import React, { Component } from "react";
import "./Home.css";
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
// import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import {
  FaShoppingCart,
  FaEnvelope,
  FaUserCheck,
  FaCogs,
  FaHome,
  FaKey,
  FaSignOutAlt,
  FaUpload
} from "react-icons/fa";
import Footer from "./Footer";

function NavBar() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <Route>
      <div>
        <div id="navlinks">
          <nav id="nav" className="navbar">
            <Link to="/">
              <FaHome id="contacticon" color="rgb(225, 203, 78" size={37} />
              <br />
              <span>Home</span>
            </Link>

            <Link to="/api/products">
              <FaCogs id="contacticon" color="rgb(225, 203, 78" size={37} />
              <br />
              <span>Products</span>
            </Link>
            <Link to="/product/upload">
              
              <FaUpload id="contacticon" color="rgb(225, 203, 78" size={37} />
              <br />
              <span>Upload</span>
            </Link>
            {userInfo ? (
              <Link to="/cart/:id?">
                <FaShoppingCart
                  id="carticon"
                  color="rgb(225, 203, 78"
                  size={37}
                />
                <br />
              <span>Cart</span>
                <i className="fas fa-shopping-cart"></i>
              </Link>
            ) : (
              ""
            )}
            {userInfo ? (
              <Link to="/profile">
                <FaUserCheck
                  id="contacticon"
                  color="rgb(225, 203, 78"
                  size={37}
                />
                 <br />
              <span>{userInfo.name}</span>
             

              </Link>
            ) : (
              <Link to="/signin">
                <FaKey id="contacticon" color="yellow" size={37} />
                <br />
              <span>Sign-in</span>
              </Link>
            )}

            {userInfo ? (
              <Link onClick={handleLogout}>
                
                <FaSignOutAlt
                  id="contacticon"
                  color="rgb(225, 203, 78"
                  size={37}
                />
                  <br />
              <span>logout</span>
              </Link>
            ) : (
              ""
            )}
            <span></span>
          </nav>
        </div>
      </div>
    </Route>
  );
}

export default NavBar;
