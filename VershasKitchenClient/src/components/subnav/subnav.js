import React, { useState, useEffect, Fragment } from 'react';
import './subnav.scss';
import '.././header/header.scss';
import { NavLink } from 'react-router-dom'
import Header from '../header/header';


const Subnav = () => {

    return (
        <Fragment>
            <div className="categoryNav" id="categoryNav">

                <div class="main-menu">
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
                    </ul></div>
            </div>


        </Fragment>

    );
};

export default Subnav;