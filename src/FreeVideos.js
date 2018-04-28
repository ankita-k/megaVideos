import React, { Component } from 'react';
import logo from './images/logo.png';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import './css/App.css';
import './css/CustomVideos.css';
import './themify-icons/themify-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/NewArrival.css";
import carousel1 from './images/newarrival/3idiots.jpg';
import carousel2 from './images/newarrival/dangal.jpg';
import carousel3 from './images/newarrival/akira.jpg';
import carousel4 from './images/newarrival/talaash.jpg';
import carousel5 from './images/newarrival/raabta.jpg';
import playbtn from './images/play.svg';

class FreeVideo extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow:6,
            slidesToScroll: 1
        }
      return (
          

        <div className="new-arrival-carousel">
          <p className="videoheading">Free Videos</p>
          <div className="dividerline"></div>
          <Slider {...settings}>
            <div> 
               <div className="newitem">
                  <a href="/">
                    <div className="content-overlay"></div>
                    <img src={carousel1} />
                    <div className="content-details fadeIn-left">
                      <h3>This is a title</h3>
                      <p>This is a short description</p>
                      <img src= {playbtn} />
                    </div>
                   
                  </a>
                  
                </div>
            </div>
            <div> 
               <div className="newitem">
                  <a href="/">
                    <div className="content-overlay"></div>
                    <img src={carousel2} />
                    <div className="content-details fadeIn-left">
                      <h3>This is a title</h3>
                      <p>This is a short description</p>
                    </div>
                   
                  </a>
                </div>
            </div>
            <div> 
               <div className="newitem">
                  <a href="/">
                    <div className="content-overlay"></div>
                    <img src={carousel3} />
                    <div className="content-details fadeIn-left">
                      <h3>This is a title</h3>
                      <p>This is a short description</p>
                    </div>
                   
                  </a>
                </div>
            </div>
            <div> 
               <div className="newitem">
                  <a href="/">
                    <div className="content-overlay"></div>
                    <img src={carousel4} />
                    <div className="content-details fadeIn-left">
                      <h3>This is a title</h3>
                      <p>This is a short description</p>
                    </div>
                
                  </a>
                </div>
            </div>
            <div> 
               <div className="newitem">
                  <a href="/">
                    <div className="content-overlay"></div>
                    <img src={carousel5} />
                    <div className="content-details fadeIn-left">
                      <h3>This is a title</h3>
                      <p>This is a short description</p>
                    </div>
                  
                  </a>
                </div>
            </div>
            <div> 
               <div className="newitem">
                  <a href="/">
                    <div className="content-overlay"></div>
                    <img src={carousel3} />
                    <div className="content-details fadeIn-left">
                      <h3>This is a title</h3>
                      <p>This is a short description</p>
                    </div> 
                  </a>
                </div>
            </div>
            <div> 
               <div className="newitem">
                  <a href="/">
                    <div className="content-overlay"></div>
                    <img src={carousel2} />
                    <div className="content-details fadeIn-left">
                      <h3>This is a title</h3>
                      <p>This is a short description</p>
                    </div>
                   
                  </a>
                </div>
            </div>
           </Slider> 
        </div>

      );
    }
}

export default FreeVideo;
