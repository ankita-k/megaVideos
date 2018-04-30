import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/MainSlider.css';
import slider1 from './images/slider/slider1.jpg';
import slider2 from './images/slider/slider2.jpg';
import slider3 from './images/slider/slider3.jpg';
import slider4 from './images/slider/slider4.jpg';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
const API = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBzUjLUvOesd39dWgFvjrKTI9oAxYI7cjc&channelId=UC8VuZgzHma9pWfgaTyd9CTg&part=snippet&maxResults=4&order=viewCount&pageToken';

const items = [
  {
    src: slider1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: slider2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: slider3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: slider4,
    altText: 'Slide 4',
    caption: 'Slide 4'
  }
];

class MainSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      items: []
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
            this.setState({ items: data.items })
            console.log(this.state.items);
      })
    // console.log(this.state.videos);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.state.items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.id.videoId}
        >
          <img src={item.snippet.thumbnails.high.url} alt={item.altText} />
        </CarouselItem>




      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}

        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default MainSlider;