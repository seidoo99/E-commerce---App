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
            <label>Product Name</label>
            <input type='text' id='text1' label="Product Name"/>
            <label>Description</label>
            <input type='text' id='text2' label="Description"/>
            </form>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default submission
