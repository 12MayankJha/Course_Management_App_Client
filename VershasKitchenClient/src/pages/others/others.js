import React, { Component, Fragment } from 'react';
import Services from '../../services/Services';
import Section from '../../components/sections/section';
import Spinner from '../../components/spinner/spinner';

class Others extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OthersData: {}
        };
    }

    componentDidMount() {
        Services.getCategoryProducts()
            .then((data) => {
                this.setState({ OthersData: data.Others })
            })
    }
    render() {
        return (
            <Fragment>
            { Object.keys(this.state.OthersData).length ?
             <div className='column-cards'>
             <Section data={this.state.OthersData} heading='Others' />
             </div>
             :
             <Spinner />
            }
         </Fragment>
        );
    }
}

export default Others;