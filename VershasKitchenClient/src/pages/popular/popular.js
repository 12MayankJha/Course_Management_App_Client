import React, { Component, Fragment } from 'react';
import Carousels from '../../components/carousel/carousel';
import { Carousel, Modal } from 'react-bootstrap';
import Section from '../../components/sections/section';
import b1 from '../../assets/img/carousel_image1.jpg'
import b1m from '../../assets/img/carousel_image1_m.jpg'
import b2 from '../../assets/img/carousel_image2.jpg'
import b2m from '../../assets/img/banner_image2_m.jpg';
import Spinner from '../../components/spinner/spinner';
import Slider from '../../components/slider/slider';
import Services from '../../services/Services';

class Popular extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.state = {
            CardsData: {}
        };
    }

    componentDidMount() {
            Services.getAllPopular()
            .then((data) => {
                this.setState({ CardsData: data })
            })
          
    }

    render() {
        console.log(this.state.CardsData)
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
                            {window.innerWidth < 500 ? <img className="d-block w-100" src={b1m} alt='b1' />
                                :
                                <img className="d-block w-100" src={b1} alt='b1' />}
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            {window.innerWidth < 500 ? <img className="d-block w-100" src={b2m} alt='b2' />
                                :
                                <img className="d-block w-100" src={b2} alt='b2' />}

                        </Carousel.Item>
                    </Carousel>
                    {Object.keys(this.state.CardsData).length ?
                        <Fragment>
                            <div className='slider-cards'>
                                <Slider data={this.state.CardsData.Cakes} heading='Cakes' id="cakes" seeMore={true} href="/allcakes" />
                                <Slider data={this.state.CardsData.SnacksAndAppetizers} heading='Snacks & Appetizers' seeMore={true} href="/allsnacks" />
                                <Slider data={this.state.CardsData.Others} heading='Others' seeMore={true} href="/others" />
                            </div>
                        </Fragment>
                        :
                        <Spinner />
                    }
            </Fragment>
        );
    }
}

export default Popular;