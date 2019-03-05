import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {store} from '../../Store';
import {Provider} from 'react-redux';

import SelectFirst from '../SelectFirst';
import SelectLast from '../SelectLast';
import Result from '../Result';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SelectFirst />
          <SelectLast />
          <Result />   
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;