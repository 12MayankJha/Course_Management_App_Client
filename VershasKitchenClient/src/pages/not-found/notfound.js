import React, { Component } from 'react';
import pnf from '../../assets/img/page_not_found.png'

class Notfound extends Component {
    render() {
        return (
            <div className='text-center'>
                <img className="notFound" src={pnf} alt='b2' />
                <p className="notFoundText">Page Not Found</p>
            </div>
        );
    }
}

export default Notfound;