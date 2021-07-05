import React, { Fragment } from 'react';
import {BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
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
                        <h1>Company</h1>
                        <ul>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Products</h1>
                        <ul>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Accounts</h1>
                        <ul>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Resources</h1>
                        <ul>
                            <li>Webmail</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Support</h1>
                        <ul>
                            <li>Contact us</li>
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