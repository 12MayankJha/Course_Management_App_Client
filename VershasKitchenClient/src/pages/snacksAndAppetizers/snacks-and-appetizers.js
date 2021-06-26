import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Section from '../../components/sections/section';

const api = "api/"
const path = api+'getAllProducts';

class SnacksAndAppetizers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SnacksAndAppetizersData: {}
        };
    }

    componentDidMount() {
        axios.get(path)
            .then((response) => (response.data))
            .then((data) => {
                this.setState({ SnacksAndAppetizersData: data.SnacksAndAppetizers })
            })
    }

    render() {
        return (
            <Fragment>
            { this.state.SnacksAndAppetizersData != undefined &&
             <Fragment>
             <Section data={this.state.SnacksAndAppetizersData.BreadsAndMore} heading='Breads & More' />
             <Section data={this.state.SnacksAndAppetizersData.Indian} heading='Indian' />
             </Fragment>
            }
         </Fragment>
        );
    }
}

export default SnacksAndAppetizers;