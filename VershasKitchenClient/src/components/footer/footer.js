import React, { Fragment } from 'react';
import {BrowserView, MobileView } from "react-device-detect";
import { NavLink } from 'react-router-dom'
import './footer.scss';

const Footer = () => {
    return (
        <Fragment>
            <div><a href="tel:+918650156750"class="dialler-icon" title='Call Us'>
            <i class="fa fa-phone call-dialler" aria-hidden="true"></i>
            </a>
            <MobileView>  <a href="//api.whatsapp.com/send?phone=918650156750"class="whatsapp-icon" title='Send to Whatapp'>
            <i class="fa fa-whatsapp whatsapp-dialler" aria-hidden="true"></i>
            </a>
            </MobileView>
            <BrowserView>
            <a target='_blank' href="https://web.whatsapp.com/send?l=&phone=918650156750"class="whatsapp-icon" title='Send to Whatapp'>
            <i class="fa fa-whatsapp whatsapp-dialler" aria-hidden="true"></i>
            </a>
            </BrowserView>
            </div>
            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <h1>Home</h1>
                        <ul>
                            <li>Popular</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Cakes</h1>
                        <ul>
                       <li><NavLink exact to="/classic-flavour-cakes">Classic Flavour Cakes</NavLink></li> 
                       <li><NavLink exact to="/floral-cakes">Floral Cakes</NavLink></li> 
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Desserts</h1>
                        <ul>
                        <li><NavLink exact to="/floral-cakes">Floral Cakes</NavLink></li> 
                        </ul>
                    </div>
                    <div className="col">
                        <h1>About</h1>
                        <ul>
                        <NavLink exact to="/aboutus" >About Us</NavLink>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Support</h1>
                        <ul>
                        <NavLink exact to="/contactus" >Contact Us</NavLink>
                        </ul>
                    </div>
                    <div className="col social">
                        <h1>Social</h1>
                        <ul>
                            <li><i className="fa fa-instagram faIcons"></i></li>
                            <li><i className="fa fa-facebook-square faIcons"></i></li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;