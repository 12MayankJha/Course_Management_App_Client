import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Section from '../../components/sections/section';
import Spinner from '../../components/spinner/spinner';

const api = "api/"
const path = api + 'getAllProducts'

class Desserts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DessertsData: {}
        };
    }

    componentDidMount() {
        axios.get(path)
            .then((response) => (response.data))
            .then((data) => {
                this.setState({ DessertsData: data.Deserts })
            })
    }

    render() {
        return (
            <Fragment>
                {Object.keys(this.state.DessertsData).length ?
                    <Fragment>
                        <Section data={this.state.DessertsData.IndianDessert} heading='Indian Dessert' />
                    </Fragment>
                    :
                    <Spinner />
                }
            </Fragment>
        );
    }
}

export default Desserts;