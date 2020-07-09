import React, { Component } from 'react'
import './Contact.css'
import {

    Link
} from "react-router-dom";
import { FaArrowAltCircleLeft } from 'react-icons/fa'

export class Contact extends Component {
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
            <section className="mb-4" id="contact">
               <Link to='products' id='back'>
                <FaArrowAltCircleLeft color='black' size={30} />
                 Back To Products</Link>
            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
            <p className="text-center w-responsive mx-auto mb-5">Please send us your feedback</p>
        
            <div className="row">
              <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div className="row">
        
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name" className="form-control" />
                                    <label for="name" className="">Your name</label>
                                </div>
                            </div>
        
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" className="form-control" />
                                    <label for="email" className="">Your email</label>
                                </div>
                            </div>
        
                        </div>
                    
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="subject" className="form-control" />
                                    <label for="subject" className="">Subject</label>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                                    <div className="col-md-12">
        
                                <div className="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    <label for="message">Your message</label>
                                </div>
        
                            </div>
                        </div>
        
                    </form>
        
                    <div className="text-center text-md-left">
                        <a className="btn btn-primary" onClick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                    <div className="status"></div>
                </div>
           
                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-map-marker-alt fa-2x"></i>
                            <p>Atlanta, Ga, USA</p>
                        </li>
        
                        <li><i className="fas fa-phone mt-4 fa-2x"></i>
                            <p>+ 01 111 111 1111</p>
                        </li>
        
                        <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                            <p>contact@mail.com</p>
                        </li>
                    </ul>
                </div>
        
            </div>
        
        </section>
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

export default Contact
