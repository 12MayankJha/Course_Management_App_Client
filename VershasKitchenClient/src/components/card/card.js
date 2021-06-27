import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './card.scss';
import LazyLoad from 'react-lazyload';
import Example from '../../components/modal/modal';

const Cards = (props) => {
    const [show, setShow] = useState(false);
    const [imgSrc, iSrc] = useState();
    const [imgName, iName] = useState();
    const [imgPrice, iPrice] = useState();

    let imgRef = '';
    let imgNameRef = '';
    let imgPriceRef = '';

    const modal = () => {
        console.log(imgRef.src);
        console.log(imgNameRef.innerText);
        console.log(imgPriceRef.innerText);
        setShow(true);
        iSrc(imgRef.src);
        iName(imgNameRef.innerText);
        iPrice(imgPriceRef.innerText);

    }
    const handleClose = () => setShow(false);

    return (
        <LazyLoad once={true} offset={[-100, 100]} key={props.key} height={200} >
            <Card className="productCard" onClick={modal}>
                <div className="card-image"><Card.Img ref={(img) => { imgRef = img; }} variant="top" src={props.image} /></div>
                <Card.Body className="card-body">
                    <Card.Title ref={(imgName) => { imgNameRef = imgName; }} className="cardTitle"> {props.name} </Card.Title>
                    <Card.Text ref={(imgPrice) => { imgPriceRef = imgPrice; }} ><i className="fa fa-rupee"></i> {props.price} </Card.Text>
                </Card.Body>

            </Card>
            <Example show={show} src={imgSrc} name={imgName} price={imgPrice} handleClose={handleClose} />
        </LazyLoad>
    );
};

export default Cards;