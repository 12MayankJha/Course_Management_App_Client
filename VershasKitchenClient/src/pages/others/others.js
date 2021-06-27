import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Section from '../../components/sections/section';
import Spinner from '../../components/spinner/spinner';

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
            { Object.keys(this.state.OthersData).length ?
             <Fragment>
             <Section data={this.state.OthersData.None} heading='Others' />
             </Fragment>
             :
             <Spinner />
            }
         </Fragment>
        );
    }
}

export default Others;