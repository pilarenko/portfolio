import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

import classes from './App.css';

class App extends Component {
	state = {

	};
	
  render() {
    return (
      <div className={classes.App}>
        <Navbar />
        <Layout />
      	<Footer />
      </div>
    );
  }
}

export default App;
