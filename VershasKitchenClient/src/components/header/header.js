import React, { Component, Fragment } from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideNav: true,
            menunavs: false
        };
        this.closeNav = this.closeNav.bind(this);
    }

    componentDidMount() {
        var subnav = document.getElementById("categoryNav");
        var sticky1 = subnav.offsetHeight;   //102        
        window.addEventListener('scroll', event => {
            if (window.pageYOffset > sticky1) {
                this.setState({ menunavs: true });
            }
            else {
                this.setState({ menunavs: false });
            }
        })

        var dropdown = document.getElementsByClassName("dropdown-btn");
        for (var i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
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
                <div className={this.state.sideNav ? 'd-lg-none' : "d-lg-none backdrop"}></div>
                <div style={{ 'paddingBottom': '57px' }}>
                    <div className="common-header header d-none d-lg-block main-nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="center-desk">
                                        <div className="brandName">
                                            <NavLink exact to="/">Versha's Kitchen</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                    {
                                        !this.state.menunavs && <div className="main-menu">
                                            <ul className="menu-area-main">
                                                <li><div class="nav-more">
                                                    <div class="nav-more-button"><NavLink exact to="/aboutus" activeClassName="active">About Us</NavLink></div>
                                                </div>
                                                </li>
                                                <li><div class="nav-more">
                                                    <div class="nav-more-button"><NavLink exact to="/contactus" activeClassName="active">Contact Us</NavLink></div>
                                                </div>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                    {
                                        this.state.menunavs && <div class="main-menu">
                                            <ul className="menu-area-main">
                                                <li><div class="nav-more">
                                                    <div class="nav-more-button"><NavLink exact to="/" activeClassName="active">Popular</NavLink></div>
                                                </div>
                                                </li>
                                                <li><div class="nav-more">
                                                    <div class="nav-more-button"><NavLink exact to="/allcakes" activeClassName="active">Cakes</NavLink></div>
                                                    <div class="nav-more-content">
                                                        <li><NavLink exact to="/classic-flavour-cakes" activeClassName="active">Classic Flavour Cakes</NavLink></li>
                                                        <li><NavLink exact to="/floral-cakes" activeClassName="active">Floral Cakes</NavLink></li>
                                                    </div>
                                                </div>
                                                </li>
                                                <li><div class="nav-more">
                                                    <div class="nav-more-button"><NavLink exact to="/allsnacks" activeClassName="active">Snacks & Appetizers</NavLink></div>
                                                    <div class="nav-more-content">
                                                        <li><NavLink exact to="/breads-and-more" activeClassName="active">Breads & More</NavLink></li>
                                                        <li><NavLink exact to="/indian" activeClassName="active">Indian</NavLink></li>
                                                    </div>
                                                </div>
                                                </li>
                                                <li><div class="nav-more">
                                                    <div class="nav-more-button"><NavLink exact to="/alldesserts" activeClassName="active">Desserts</NavLink></div>
                                                    <div class="nav-more-content">
                                                        <li><NavLink exact to="/indian-dessert" activeClassName="active">Indian Dessert</NavLink></li>
                                                    </div>
                                                </div>
                                                </li>
                                                <li><div class="nav-more">
                                                    <div class="nav-more-button"><NavLink exact to="/others" activeClassName="active">Others</NavLink></div>
                                                </div>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Code */}
                    <div className=" header d-lg-none mobile-nav">
                        <div id="main">
                            <div className="col-sm-3 col-md-3 logo_section">
                                <a className="closebtn" onClick={this.closeNav}><i className="fa fa-bars" style={{ 'fontSize': '20px' }} aria-hidden="true"></i></a>
                            </div>
                            <div className="col-sm-6 col-md-6 text-center" style={{ 'width': "80%" }}>
                                <label className='mbrandName'><NavLink exact to="/">Versha's Kitchen</NavLink></label></div>
                        </div>
                        <div id="mySidenav" className="sidenav" style={{ width: this.state.sideNav ? '0px' : '80%', 'boxShadow': this.state.sideNav ? '' : '2px 0px 13px 0px black' }}>
                            {/* <a className="closebtn" onClick={this.closeNav}>&times;</a> */}
                            <button className="dropdown-btn closebtn" onClick={this.closeNav}><img id="sideNav-logo" src={logo} alt="versha's kitchen"/><i class="fa fa-close"></i></button>
                            <NavLink exact to="/" activeClassName="active">Home</NavLink>
                            <NavLink exact to="/aboutus" activeClassName="active">About Us</NavLink>
                            <NavLink exact to="/contactus" activeClassName="active">Contact Us</NavLink>
                            <hr />
                            <NavLink exact to="/" activeClassName="active">Popular</NavLink>
                            <button class="dropdown-btn">Cakes <i class="fa fa-caret-down"></i></button>
                            <div class="dropdown-container">
                                <NavLink exact to="/allcakes">All Cakes</NavLink>
                                <NavLink exact to="/classic-flavour-cakes">Classic Flavour Cakes</NavLink>
                                <NavLink exact to="/floral-cakes">Floral Cakes</NavLink>
                            </div>
                            <button class="dropdown-btn">Snacks & Appetizers<i class="fa fa-caret-down"></i></button>
                            <div class="dropdown-container">
                                <NavLink exact to="/allsnacks" >All Snacks & Appetizers</NavLink>
                                <NavLink exact to="/breads-and-more" >Breads & More</NavLink>
                                <NavLink exact to="/indian" >Indian</NavLink>
                            </div>
                            <button class="dropdown-btn">Desserts<i class="fa fa-caret-down"></i></button>
                            <div class="dropdown-container">
                                <NavLink exact to="/alldesserts">All Desserts</NavLink>
                                <NavLink exact to="/indian-dessert">Indian Dessert</NavLink>
                            </div>
                            <NavLink exact to="/others" activeClassName="active">Others</NavLink>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Header;