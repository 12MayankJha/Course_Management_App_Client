import React, { Fragment, useRef, useState } from 'react';
import Cards from '../card/card';
import Spinner from '../../components/spinner/spinner';
import './slider.scss';

const Slider = ({ data, heading, id, seeMore, href }) => {
    const scrolling = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };
    const ref = useRef(null);

    return (
        <Fragment>
            {
                data && data.length > 0 &&
                <div id={id} className="text-center">
                    <div className='sectionDivider'>{heading}</div>
                    <div className="product-gallery">
                        <span className="slider-buttons" onClick={() => scrolling(-200)}><i class="fa fa-chevron-left"></i></span>
                        <span className="slider-buttons" onClick={() => scrolling(200)}><i class="fa fa-chevron-right"></i></span>
                        <div className = 'product-section' ref={ref}>
                        {
                            data !== undefined ? data.map(val => {
                                return (
                                    <Cards key={val.id} image={val.imageURL} name={val.name} price={val.price} />
                                )
                            })
                                :
                                    <Spinner />
                        }
                        </div>
                    </div>
                    {seeMore && <a class="seeMore" href={href}>See More...</a>}
                </div>
            }
        </Fragment>
    );
};

export default Slider;