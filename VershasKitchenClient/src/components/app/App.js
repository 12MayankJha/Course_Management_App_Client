//import logo from './logo.svg';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/header';
import Footer from '../footer/footer'
import './App.css';
import { Route, Router } from 'react-router-dom';
import Popular from '../../pages/popular/popular';
import Cakes from '../../pages/cakes/cakes';
import ContactUs from '../../pages/contact-us/contact-us';
import Aboutus from '../../pages/about-us/about-us';

function App() {
  return (
   <Fragment>
     <Header/>
     <Route exact path="/">
       <Popular/>
     </Route>

     <Route exact path="/contactus">
       <ContactUs/>
     </Route>
     <Route exact path="/aboutus">
       <Aboutus/>
     </Route>
     <Footer/>
   </Fragment>
  );
}

export default App;
