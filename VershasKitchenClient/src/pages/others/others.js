import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Section from '../../components/sections/section';

const api = "api/"
const path = api+'getAllProducts';

class Others extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OthersData: {}
        };
    }

    componentDidMount() {
        axios.get(path)
            .then((response) => (response.data))
            .then((data) => {
                this.setState({ OthersData: data.Others })
            })
    }
    render() {
        return (
            <Fragment>
            { this.state.OthersData != undefined &&
             <Fragment>
             <Section data={this.state.OthersData.None} heading='Others' />
             </Fragment>
            }
         </Fragment>
        );
    }
}

export default Others;