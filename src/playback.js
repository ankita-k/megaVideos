import React, { Component } from 'react';
import './css/App.css';
import YouTube from 'react-youtube';
import MainNavbar from './MainNavbar.js';
import NewArrival from './NewArrival.js';

class PlayBack extends Component {
    componentWillMount() {
        console.log(this.props.match.params.id);
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (
            //     <div className="App">
            // <header>
            //   <MainNavbar></MainNavbar>
            //   <MainSlider></MainSlider>
            //   <div className="gradient-div"></div>
            // </header>
            <div className="App">
                <header>
                    <MainNavbar />

                    <YouTube
                        videoId={this.props.match.params.id}
                        opts={opts} />
                    <div className="gradient-div"></div>

                </header>
                <section className="new_arrival">
                    <NewArrival></NewArrival>
                </section>
            </div>
        );
    }
}
export default PlayBack;