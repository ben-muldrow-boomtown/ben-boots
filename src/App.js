import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Table from './components/Table';
import {Router} from '@reach/router';
import Home from './components/Home';
import View from './components/View';

class App extends Component {
  render() {
    return (
      <div className="w-100">
        <div className="bg-left bg-center-l bg-yellow">
          <NavBar />
          <Router>
            <Home path="/" />
            <Table path="/dashboard" />
            <View path="/view/:id" />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
