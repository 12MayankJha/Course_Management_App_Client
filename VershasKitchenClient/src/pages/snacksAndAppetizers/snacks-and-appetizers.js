import React, { Component, Fragment } from 'react';
import Services from '../../services/Services';
import Section from '../../components/sections/section';
import Spinner from '../../components/spinner/spinner';

class SnacksAndAppetizers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SnacksAndAppetizersData: {},
            subCategoryData: {}
        };
    }

    componentDidMount() {
        if(this.props.category == 'allsnacks')
        Services.getCategoryProducts().then((data) => {
            this.setState({ SnacksAndAppetizersData: data.SnacksAndAppetizers })
        })
        else
        Services.getSubCategoryProducts().then((data) => {
            this.setState({ subCategoryData: data.SnacksAndAppetizers })
        })
    }

    render() {
        const category = this.props.category;
        return (
            <Fragment>
                {
                    category == 'allsnacks' ?
                        Object.keys(this.state.SnacksAndAppetizersData).length ?
                            <div className='column-cards'>
                                <Section data={this.state.SnacksAndAppetizersData} heading='Snacks & Appetizers' />
                            </div>
                            :
                            <Spinner />
                        : null
                }
                {
                    category == 'breadsAndMore' ?
                        Object.keys(this.state.subCategoryData).length ?
                            <div className='column-cards'>
                                <Section data={this.state.subCategoryData.BreadsAndMore} heading='Breads And More' />
                            </div>
                            :
                            <Spinner />
                        : null
                }
                 {
                    category == 'indian' ?
                        Object.keys(this.state.subCategoryData).length ?
                            <div className='column-cards'>
                                <Section data={this.state.subCategoryData.Indian} heading='Indian' />
                            </div>
                            :
                            <Spinner />
                        : null
                }
            </Fragment>
        );
    }
}

export default SnacksAndAppetizers;