import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import Countries from './countries.json';
import { render } from 'react-dom';

class App extends Component {
  state = {
    countries: '',
  };

  componentDidMount() {
    this.setState({ countries: Countries });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
          </div>
          <div>
            <Route
              path="/country/:countryId"
              render={(props) => (
                <CountryDetails countries={Countries} {...props} />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
