import React, { Component, Fragment } from 'react';
import './contact-us.scss';
import axios from 'axios';
import chefContact from '../../assets/img/chef-contact1.png'

const api = "api/"
const path = api + 'sendDetails';

class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            thankyou: false
        };
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    submitForm(e) {
        let formIsValid = true;
        const data = {
            "name": this.state.name ? this.state.name : '',
            "phoneNumber": this.state.phonenumber ? this.state.phonenumber : '',
            "email": this.state.email ? this.state.email : '',
            "message": this.state.message ? this.state.message : ''
        }
        if (data.name == '' || data.phonenumber == '') {
            formIsValid = false;
        }
        var self = this;
        if (formIsValid) {
            e.preventDefault();
            axios({
                method: "post",
                url: path,
                data: data
                // headers: { "Content-Type": "multipart/form-data" },
            })
                .then(function (response) {
                    //handle success
                    console.log(response);
                    self.setState({ thankyou: true });
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });
        }
    }

    handleChange(event) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }
    render() {
        return (
            <Fragment>
                <div className='contact-form'>
                    <div className='image-contactus'>
                        <img src={chefContact} alt='Contact us' />
                    </div>
                    <div className='contact-us-submision'>
                        <h3>Contact Us</h3>
                        <form id='contactUsForm'>
                            <div className='form-row'>
                                <div className='form-group col-md-6'>
                                    <label for="name">Your Name</label>
                                    <input type="text" className='contact-us-input' required id="name" name="name" placeholder="Your name.." onChange={this.handleChange} />
                                </div>
                                <div className='form-group col-md-6'>
                                    <label for="phonenumber">Phone Number </label>
                                    <input type="text" id="phonenumber" className='contact-us-input' required name="phonenumber" placeholder="Your phone no.." onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-group col-md-12'>
                                    <label for="lname">Email</label>
                                    <input type="text" id="lname" className='contact-us-input' name="email" placeholder="Your email address.." onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-group col-md-12'>
                                    <label for="subject">Message</label>
                                    <textarea id="subject" className='contact-us-input' name="message" placeholder="Write something.." onChange={this.handleChange}></textarea>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-group col-md-12'>
                                    <input type="submit" className='contact-us-submit' onClick={this.submitForm} />
                                </div>
                            </div>
                        </form>
                        <br/>
                        {this.state.thankyou && <div><h2>Thank You For Contacting Us. We will reach out to you soon.</h2></div>}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ContactUs;