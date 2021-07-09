import React, { Component, Fragment } from 'react';
import Services from '../../services/Services';
import Section from '../../components/sections/section';
import Spinner from '../../components/spinner/spinner';

class Others extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OthersData: {"None":[{"id":"e71717b3-2ce0-4c30-9e6f-6e82f4b61b53","imageURL":"https://raw.githubusercontent.com/12MayankJha/VershasKitchenAssets/main/ThemeCake/sareecake.jpg","name":"SnacksAndAppetizers","price":"1500"},{"id":"99304fc4-db28-4c90-9c04-b5682901a583","imageURL":"https://raw.githubusercontent.com/12MayankJha/VershasKitchenAssets/main/ThemeCake/sareecake.jpg","name":"SnacksAndAppetizers","price":"1500"},{"id":"b5d6208e-c121-45db-a78c-ca7fead4a2a5","imageURL":"https://raw.githubusercontent.com/12MayankJha/VershasKitchenAssets/main/ThemeCake/sareecake.jpg","name":"SnacksAndAppetizers","price":"1500"},{"id":"3a58fff6-35cc-4e77-a4ce-dd17ff56f8e0","imageURL":"https://raw.githubusercontent.com/12MayankJha/VershasKitchenAssets/main/ThemeCake/sareecake.jpg","name":"SnacksAndAppetizers","price":"1500"},{"id":"e62bc5fa-d544-4444-8c09-c5f0df463f41","imageURL":"https://raw.githubusercontent.com/12MayankJha/VershasKitchenAssets/main/ThemeCake/sareecake.jpg","name":"SnacksAndAppetizers","price":"1500"},{"id":"2fd65508-3be4-4737-b1a9-58a05a24093f","imageURL":"https://raw.githubusercontent.com/12MayankJha/VershasKitchenAssets/main/ThemeCake/sareecake.jpg","name":"SnacksAndAppetizers","price":"1500"}]},"Cakes":{"FruitCakes":[],"PhotoCakes":[],"ChocoManiaCakes":[],"MultiTierCakes":[],"PinataCakes":[],"ClassicFlavourCakes":[],"ThemeCakes":[{"id":"5e7c04d9-b571-40bb-b3ba-b57bd3019446","imageURL":"https://raw.githubusercontent.com/12MayankJha/VershasKitchenAssets/main/ThemeCake/sareecake.jpg","name":"SnacksAndAppetizers","price":"2000"}],"SpecialCakes":[],"FloralCakes":[]},"SnacksAndAppetizers":{"BreadsAndMore":[{"id":"340c94c7-9ea7-4c37-923e-5b77f0807c07","imageURL":"https://raw.githubusercontent.com/12MayankJha/VershasKitchenAssets/main/ThemeCake/sareecake.jpg","name":"SnacksAndAppetizers","price":"1500"}],"Chinese":[],"Indian":[]}
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