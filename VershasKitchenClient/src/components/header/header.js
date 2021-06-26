import React, { Component, Fragment } from 'react';
import './header.scss';
import { NavLink} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideNav: true
        };

        this.closeNav = this.closeNav.bind(this);
    }
    closeNav() {
        console.log('dsada');
        const currentState = this.state.sideNav;
        this.setState({ sideNav: !currentState })

        if (this.state.sideNav === true) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
    }
    render() {
        return (
           <Fragment>
               <div>
                <div className="common-header header d-none d-lg-block main-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="center-desk">
                                    <div className="brandName">
                                      <NavLink exact to="/">Versha's Kitchen</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <div className="menu-area">
                                    <div className="limit-box">
                                        <nav className="main-menu" style={{ display: "block" }}>
                                            <ul className="menu-area-main">
                                                 {/* <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>  */}
                                               <li><NavLink exact to="/aboutus" activeClassName="active">About Us</NavLink></li> 
                                               <li><NavLink exact to="/contactus" activeClassName="active">Contact Us</NavLink></li> 
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Code */}
                <div className=" header d-lg-none main-nav">
                    <div id="main">
                        <div className="col-sm-3 col-xs-3 col-md-3 logo_section">
                            <a className="closebtn" onClick={this.closeNav}><i class="fa fa-bars" style={{'font-size':'20px'}}aria-hidden="true"></i></a>
                        </div>
                        <div className="col-sm-6 col-xs-6 col-md-6 text-center" >
                            <label className='mbrandName'><NavLink exact to="/">Versha's Kitchen</NavLink></label></div>
                        <div className="col-sm-3 col-xs-3 col-md-3"></div>
                    </div>
                    <div id="mySidenav" className="sidenav" style={{ width: this.state.sideNav ? '0px' : '80%', 'box-shadow': this.state.sideNav ? '' : '2px 0px 13px 0px black'}}>
                        <a className="closebtn" onClick={this.closeNav}>&times;</a>
                        <NavLink onClick={this.closeNav} exact to="/" >Home</NavLink>
                        <NavLink onClick={this.closeNav} exact to="/aboutus" >About Us</NavLink>
                        <NavLink onClick={this.closeNav} exact to="/contactus">Contact Us</NavLink>
                        <hr />
                        <NavLink onClick={this.closeNav} exact to="/" >Popular</NavLink>
                        <NavLink onClick={this.closeNav} exact to="/allcakes" >Cakes</NavLink>
                        <NavLink onClick={this.closeNav} exact to="/allsnacks">Snacks & Appetizers</NavLink>
                        <NavLink onClick={this.closeNav} exact to="/others">Others</NavLink>
                        
                    </div>
                </div>
                </div>
                <div className={this.state.sideNav ? 'd-lg-none': "d-lg-none backdrop"}></div>
                </Fragment>
        );
    }
}

export default Header;