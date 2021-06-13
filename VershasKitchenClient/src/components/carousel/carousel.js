import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carousels = (props) => {
    return (
        <Carousel id="mainCarousel">
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={props.image} alt={props.alt} />
        </Carousel.Item>



        {/* <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={banner} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={banner} alt="Third slide" />
        </Carousel.Item> */}
      </Carousel>
    );
};

export default Carousels;