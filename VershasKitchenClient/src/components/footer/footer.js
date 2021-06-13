import React, { Fragment } from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <Fragment>
            <div class="footer">
                <div class="contain">
                    <div class="col">
                        <h1>Company</h1>
                        <ul>
                            <li>About</li>
                            {/* <li>Mission</li>
                            <li>Services</li>
                            <li>Social</li>
                            <li>Get in touch</li> */}
                        </ul>
                    </div>
                    <div class="col">
                        <h1>Products</h1>
                        <ul>
                            <li>About</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h1>Accounts</h1>
                        <ul>
                            <li>About</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h1>Resources</h1>
                        <ul>
                            <li>Webmail</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h1>Support</h1>
                        <ul>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div class="col social">
                        <h1>Social</h1>
                        <ul>
                            <li><i class="fa fa-instagram faIcons"></i></li>
                            <li><i class="fa fa-facebook-square faIcons"></i></li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;