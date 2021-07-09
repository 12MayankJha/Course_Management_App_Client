import React, { Component, Fragment } from 'react';
import Services from '../../services/Services';
import Section from '../../components/sections/section';
import Spinner from '../../components/spinner/spinner';

class Desserts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DessertsData: {},
            subCategoryData: {}
        };
    }

    componentDidMount() {
        if (this.props.category == 'desserts')
        Services.getCategoryProducts().then((data) => {
            this.setState({ DessertsData: data.Deserts })
        })
    else
        Services.getSubCategoryProducts().then((data) => {
            this.setState({ subCategoryData: data.Deserts })
        })
    }

    render() {
        const category = this.props.category;
        return (
              <Fragment>
               {
                    category == 'desserts' ?
                    Object.keys(this.state.DessertsData).length ?
                            <div className='column-cards'>
                                <Section data={this.state.DessertsData} heading='Desserts' />
                            </div>
                            :
                            <Spinner />
                        : null
                }
                 {
                    category == 'indianDessert' ?
                        Object.keys(this.state.subCategoryData).length ?
                            <div className='column-cards'>
                                <Section data={this.state.subCategoryData.IndianDeserts} heading='Indian Dessert' />
                            </div>
                            :
                            <Spinner />
                        : null
                }
           </Fragment>
        );
    }
}

export default Desserts;