import React from 'react'
import Navbar from './NavBar';
import Footer from './Footer';
import "./submission.css"
function submission() {
    return (
        <div>
             <Navbar />
             <div id='topContainer'>
             <h1>Submission Form</h1>
             <div id='mainContainer'>
            <form action="post">
            
            <label>Product Brand</label>
            <input type='text'  />
            <label>Product Type</label>
            <input type='text'  />
            <label>Price</label>
            <input type='number' id='text1' />
            <label>Description</label>
            <input type='text' />
            <input type='submit' />
            </form>
            </div>
            </div>
            <Footer />
        </div>
    )
}



export default submission
