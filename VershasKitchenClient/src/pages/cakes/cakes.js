import React, { Component, Fragment } from 'react';
import Services from '../../services/Services';
import Section from '../../components/sections/section';
import Spinner from '../../components/spinner/spinner';

class Cakes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            CakesData: {},
            subCategoryData: {}
        };
    }

    componentDidMount() {
        if (this.props.category == 'allcakes')
            Services.getCategoryProducts().then((data) => {
                this.setState({ CakesData: data.Cakes })
            })
        else
            Services.getSubCategoryProducts().then((data) => {
                this.setState({ subCategoryData: data.Cakes })
            })
    }


    render() {
        console.log(this.props.category)
        const category = this.props.category;
        return (
            <Fragment>
                {
                    category == 'allcakes' ?
                        Object.keys(this.state.CakesData).length ?
                            <div className='column-cards'>
                                <Section data={this.state.CakesData} heading='Cakes' />
                            </div>
                            :
                            <Spinner />
                        : null
                }
                {
                    category == 'flavoured' ?
                        Object.keys(this.state.subCategoryData).length ?
                            <div className='column-cards'>
                                <Section data={this.state.subCategoryData.ClassicFlavourCakes} heading='Classic Flavour Cakes' />
                            </div>
                            :
                            <Spinner />
                        : null
                }
                {
                    category == 'floral' ?
                        Object.keys(this.state.subCategoryData).length ?
                            <div className='column-cards'>
                                <Section data={this.state.subCategoryData.FloralCakes} heading='Floral Cakes' />
                            </div>
                            :
                            <Spinner />
                        : null
                }
            </Fragment>
        );
    }
}

export default Cakes;