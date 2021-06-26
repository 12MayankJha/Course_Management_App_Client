import React, { Component, Fragment } from 'react';
import Carousels from '../../components/carousel/carousel';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import './popular.scss'
import Spinner from '../../components/spinner/spinner';
import Section from '../../components/sections/section';
import Cards from '../../components/card/card';
import b1 from '../../assets/img/carousel_image1.jpg'
import b1m from '../../assets/img/carousel_image1_m.jpg'
import b2 from '../../assets/img/carousel_image2.jpg'
import b2m from '../../assets/img/banner_image2_m.jpg';

//const contextUrl = 'http://localhost:8080/'
const api = "api/"
const path = api+'getAllPopularProducts';
// const path = 'http://localhost:8080/getAllPopularProducts';

class Popular extends Component {

    constructor(props) {
        super(props);
        this.state = {
            CardsData: {
            }
        };
    }

    componentDidMount() {
        axios.get(path)
            .then((response) => (response.data))
            .then((data) => {
                this.setState({ CardsData: data })
            })
    }


    render() {
        return (
            <Fragment>
                {/* <Carousel id="mainCarousel">
                    {
                        this.state.CarouselData.map(data => {
                            return (
                                <Carousel.Item interval={2000}>
                                    <img className="d-block w-100" src={contextUrl + "downloadFile/" + data.id} alt={data.name} />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel> */}
                <Carousel id="mainCarousel">
                    <Carousel.Item interval={4000}>
                        { window.innerWidth < 500 ? <img className="d-block w-100" src={b1m} alt='b1' /> 
                        : 
                        <img className="d-block w-100" src={b1} alt='b1' />}
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                    { window.innerWidth < 500 ? <img className="d-block w-100" src={b2m} alt='b2' /> 
                        : 
                        <img className="d-block w-100" src={b2} alt='b2' />}
                       
                    </Carousel.Item>
                </Carousel>
                <Section data = {this.state.CardsData.Cakes} heading = 'Cakes' id="cakes" seeMore ={true} href="/allcakes"/>
                <Section data = {this.state.CardsData.SnacksAndAppetizers} heading = 'Snacks & Appetizers' seeMore ={true} href="/allsnacks"/>
                <Section data = {this.state.CardsData.Others} heading = 'Others' seeMore ={true} href="/others"/>       
            </Fragment>
        );
    }
}

export default Popular;