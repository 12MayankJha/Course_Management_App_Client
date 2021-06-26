import React from 'react';
import './subnav.scss';
import { NavLink} from 'react-router-dom'

const Subnav = () => {
    return (
        <div className="categoryNav">
            {/* <a id="linktoPopular" data-toggle="tab" role="tab" className="pillsActive" href="/">Popular</a> */}
            <NavLink exact to="/" activeClassName="pillsActive">Popular</NavLink>
            <NavLink exact to="/allcakes" activeClassName="pillsActive">Cakes</NavLink>
            <NavLink exact to="/allsnacks" activeClassName="pillsActive">Snacks & Appetizers</NavLink>
            <NavLink exact to="/others" activeClassName="pillsActive">Others</NavLink>
        </div>

    );
};

export default Subnav;