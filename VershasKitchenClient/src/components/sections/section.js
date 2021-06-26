import React, {Fragment } from 'react';
import Cards from '../card/card';
import Spinner from '../../components/spinner/spinner';

const Section = ({ data, heading, id, seeMore, href }) => {
    return (
        <Fragment>
            {
            data && data.length > 0 &&
                <div id={id} className="text-center">
                    <div className='breakHori'>{heading}</div>
                    <div class="product-gallery">
                    {
                    data !== undefined ? data.map(val => {
                        return (
                            <Cards key={val.id} image={val.imageURL} name={val.name} price={val.price} />
                        )
                    })
                        :
                        <div>
                            <Spinner />
                            <p>Please wait...</p>
                        </div>
                }
                    </div>
                    { seeMore && <a class="seeMore" href={href}>See More...</a> }
                </div>
            }
        </Fragment>
    );
};

export default Section;