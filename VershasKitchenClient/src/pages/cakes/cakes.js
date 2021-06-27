import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Section from '../../components/sections/section';
import Spinner from '../../components/spinner/spinner';

const api = "api/"
const path = api+'getAllProducts'

class Cakes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            CakesData: {}
        };
    }

    componentDidMount() {
        axios.get(path)
            .then((response) => (response.data))
            .then((data) => {
                this.setState({ CakesData: data.Cakes })
            })
    }


    render() {
        console.log('sdfs'+this.state)
        return (
            <Fragment>
               { Object.keys(this.state.CakesData).length ?
                <Fragment>
                <Section data={this.state.CakesData.ClassicFlavourCakes} heading='Classic Flavour Cakes' id="cakes" />
                <Section data={this.state.CakesData.FloralCakes} heading='Floral Cakes' id="cakes" />
                </Fragment>
                :
                <div>
                <Spinner />
            </div>
               }
            </Fragment>
        )
    }
}

export default Cakes;