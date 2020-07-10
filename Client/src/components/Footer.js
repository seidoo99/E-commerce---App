import React, { Component } from 'react'
import './Footer.css'
import {  FaGithubSquare} from 'react-icons/fa'
import {
    Link
} from "react-router-dom";


class Footer extends Component {
    render() {
        return (
  <div id="footer">

  <footer id="sticky-footer" className="py-4 bg-dark">
    <div className="container text-center">
      <small>Copyright &copy;Yohannes 

     <a href='https://github.com/yohannesbog/shopoingCart_React' target="_blank">

     <FaGithubSquare id='contacticon' color='black' size={30} />
</a>
      </small>
    </div>
  </footer>
  </div>
        )
    }
}

export default Footer
