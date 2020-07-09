import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
 import ProductDetail from './components/ProductDetail';


import Products from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from './components/Cart';
import Checkout from './components/Checkout';







function App() {
  return (
    <Router >
    <div className="App">
    <Route path='/' exact component={Home}/>
    <Route path='/contact' exact component={Contact}/>
    <Route path='/products' exact component={Products}/>
    <Route path='/cart' exact component={Cart}/>
    <Route path='/checkout' exact component={Checkout}/>
    <Route path='/product/:id' exact component={ProductDetail}/>
    </div>
    </Router>
  );
}

export default App;
