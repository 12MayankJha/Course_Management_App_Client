import React, { Component } from 'react';
import Carousels from '../../components/carousel/carousel';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import './popular.scss'
import Cards from '../../components/card/card';
import b1 from '../../assets/img/carousel_image1.jpg'
import b2 from '../../assets/img/carousel_image2.jpg'

const contextUrl = 'https://vershas-kitchen-services.herokuapp.com/'
const path = "api/getAllPopularImageData"
const api = "api/"

class Popular extends Component {

    constructor(props) {
        super(props);
        this.state = {
            CardsData: {}
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
        console.log(this.state.CardsData.cakes)
        var cakes = this.state.CardsData.cakes;
        var snacks = this.state.CardsData.snacks;
        return (
            <div>
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
                        <img className="d-block w-100" src={b1} alt='b1' />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img className="d-block w-100" src={b2} alt='b2'/>
                    </Carousel.Item>
                </Carousel>

                <br />
                <div id="cakes" className="text-center">
                    <div className='breakHori'>CAKES</div>
                    <br />
                    <div class="product-gallery">
                        {
                            cakes !== undefined && cakes.map(data => {
                                return (
                                    <Cards key={data.id} image={api + data.imagePath} name={data.name} price={data.price} />

                                )
                            })
                        }
                    </div>
                    <br />
                    <a class="seeMore" href="/allcakes">See More...</a>
                </div>
                <br />
                <div id="mocktails" className="text-center">
                    <div className='breakHori'>Snacks</div>
                    <br />
                    <div class="product-gallery">
                        {
                            snacks !== undefined && snacks.map(data => {
                                return (
                                    <Cards key={data.id} image={api + data.imagePath} name={data.name} price={data.price} />

                                )
                            })
                        }

                    </div>
                    <br />
                    <a class="seeMore" href="/allcakes">See More...</a>
                </div>
                <br />
            </div>
        );
    }
}

export default Popular;