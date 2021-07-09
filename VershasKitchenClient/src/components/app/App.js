//import logo from './logo.svg';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/header';
import Footer from '../footer/footer'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Popular from '../../pages/popular/popular';
import Cakes from '../../pages/cakes/cakes';
import ContactUs from '../../pages/contact-us/contact-us';
import Aboutus from '../../pages/about-us/about-us';
import Subnav from '../subnav/subnav';
import Notfound from '../../pages/not-found/notfound';
import SnacksAndAppetizers from '../../pages/snacksAndAppetizers/snacks-and-appetizers';
import Others from '../../pages/others/others';
import Desserts from '../../pages/desserts/desserts';

function App() {
  return (
    <Fragment>
      <Header />
      <Subnav />
      <Switch>

        <Route exact path="/"><Popular /></Route>
        <Route exact path="/contactus"><ContactUs /></Route>
        <Route exact path="/aboutus"><Aboutus /></Route>
        <Route exact path="/allcakes"> <Cakes category="allcakes" /> </Route>
        <Route exact path="/classic-flavour-cakes"> <Cakes category="flavoured" /> </Route>
        <Route exact path="/floral-cakes"> <Cakes category="floral" /> </Route>
        <Route exact path="/allsnacks"> <SnacksAndAppetizers category='allsnacks' /> </Route>
        <Route exact path="/breads-and-more"> <SnacksAndAppetizers category='breadsAndMore' /> </Route>
        <Route exact path="/indian"> <SnacksAndAppetizers category='indian' /> </Route>
        <Route exact path="/alldesserts"><Desserts category='desserts' /></Route>
        <Route exact path="/indian-dessert"> <Desserts category='indianDessert' /> </Route>
        <Route exact path="/others"><Others /></Route>
        <Route path="*"><Notfound /></Route>

      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
