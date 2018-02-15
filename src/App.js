import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import MainNavbar from './MainNavbar.js';
import MainSlider from './MainSlider.js'; 
import NewArrival from './NewArrival.js';
import MusicVideo from './MusicVideos.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <MainNavbar></MainNavbar>
          <MainSlider></MainSlider>
          <div className="gradient-div"></div>
        </header>
        <section className="new_arrival">
               <NewArrival></NewArrival>
        </section>
        <section className="new_arrival">
          <MusicVideo></MusicVideo>
        </section>
      </div>
    );
  }
}

export default App;
