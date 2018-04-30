import React, { Component } from 'react';
import logo from './images/logo.png';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './css/App.css';
import './themify-icons/themify-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/NewArrival.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, 
    Container,
    Row,
    Col,
  } from 'reactstrap';
import carousel1 from './images/newarrival/3idiots.jpg';
import carousel2 from './images/newarrival/dangal.jpg';
import carousel3 from './images/newarrival/akira.jpg';
import carousel4 from './images/newarrival/talaash.jpg';
import carousel5 from './images/newarrival/raabta.jpg';
import playbtn from './images/play.svg';
// import fetch from 'fetch';

const API = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBzUjLUvOesd39dWgFvjrKTI9oAxYI7cjc&channelId=UC8VuZgzHma9pWfgaTyd9CTg&part=snippet&maxResults=20&order=date&pageToken';

  class NewArrival extends Component {
    constructor(props){
      super(props);
      this.state={
        videos:[]
      }
    }

    componentDidMount(){
      fetch(API)
      .then(response => response.json())
      .then(data => {
        
        this.setState({ videos: data.items })});
        console.log(this.state.videos);
        console.log(this.state.videos);
  }

    

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow:4,
            slidesToScroll: 1
        }
      return (
        
        <div className="new-arrival-carousel">
           <p className="videoheading">New Videos</p>
           <div className="dividerline"></div>
          <Slider {...settings}>
          {this.state.videos.map(element=>{
            
            return (<div> 
            <div className="newitem">
               <Link to={`/play/${element.id.videoId}`}>
                 <div className="content-overlay"></div>
                 <img src={element.snippet.thumbnails.high.url}/>
                 <div className="content-details fadeIn-left">
                   <h3>{element.snippet.title}</h3>
                   <p>{(element.snippet.description).substring(0,30)}...</p>
                   <img src= {playbtn} />
                 </div>
                
                </Link>
               
             </div>
         </div>)
          })}
           </Slider> 
        </div>
        
      );
    }
  }

  export default NewArrival;
  
