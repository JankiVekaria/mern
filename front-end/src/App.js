import React, { Component } from 'react';
import './App.scss';
import Main from './components/Main';
import "./components/FontAwesom";
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import AdvertisementUpload from './components/AdvertisementUpload';
import About from './components/About';
import Contact from './components/Contact';
import IndividualProperty from './components/IndividualProperty';
import Footer from './components/Footer';
// import Search from './components/Search';

class App extends Component {
  searchParentFunc = (res) => {

  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            {/* <Route path="/" exact render={() => { return <Main searchTransfer={this.searchParentFunc} /> }} /> */}
            <Route path="/" exact component={Main} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/advertisement_upload" component={AdvertisementUpload} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/properties/:id" component={IndividualProperty} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;