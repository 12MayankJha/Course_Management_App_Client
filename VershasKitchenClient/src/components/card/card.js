import React from 'react';
import { Card } from 'react-bootstrap';
import './card.scss';

const Cards = (props) => {
    return (
        
            <Card className="productCard">
                <a target="_blank">
                    <div className="card-image"> 
                        <Card.Img variant="top" src={props.image}/></div>
                    <Card.Body class="card-body">
                        <Card.Title className="cardTitle"> {props.name} </Card.Title>
                        <Card.Text><i class="fa fa-rupee"></i> {props.price} </Card.Text>
                    </Card.Body>
                </a>
            </Card>
    );
};

export default Cards;