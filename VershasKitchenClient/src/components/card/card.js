import React from 'react';
import { Card } from 'react-bootstrap';
import './card.scss';
import LazyLoad from 'react-lazyload';

const Cards = (props) => {
    return (
        <LazyLoad once={true} offset={[-100, 100]} key={props.key} height={200} >
            <Card className="productCard">
                <a target="_blank">
                    <div class="card-image"><Card.Img variant="top" src={props.image}/></div>
                    <Card.Body class="card-body">
                        <Card.Title className="cardTitle"> {props.name} </Card.Title>
                        <Card.Text><i class="fa fa-rupee"></i> {props.price} </Card.Text>
                    </Card.Body>
                </a>
            </Card>
            </LazyLoad>
    );
};

export default Cards;