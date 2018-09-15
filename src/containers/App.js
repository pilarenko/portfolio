import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

import classes from './App.css';

import english from './english';
import polish from './polish';

class App extends Component {
	state = {
    english: true,
	};

  languageClickHandler = (props) => {
    this.setState({
      english: !this.state.english,
    });
  }

  render() {
    let language = "";
    if (this.state.english) {
      language = english;
    } else {
      language = polish;
    }

    return (
      <div className={classes.App}>
        <Navbar languageClick = {this.languageClickHandler} language = {language.navbar} icon = {this.state.english} />
        <Layout language = {language.layout}/>
      	<Footer language = {language.footer}/>
      </div>
    );
  }
}

export default App;
