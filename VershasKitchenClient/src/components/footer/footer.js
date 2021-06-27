import React, { Fragment } from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <Fragment>
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