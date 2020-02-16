import React from 'react';
import Carousel from 'react-multi-carousel';
import LayoverCard from './LayoverCard'
import 'react-multi-carousel/lib/styles.css';
import sampleData from './sampleData'
import {Navbar} from "react-bootstrap";

class LayoverCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    // const arrOfDataDivs = sampleData.map(ele => {
    //   return (<div><LayoverCard travelData = {ele}/></div>)
    // })
    return (
        <div className="carouselContainer">
          <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#home">
              <a href="http://localhost:3000/">
                <img style={{ height: 60 }} src={require('./images/delight_logo.png')} />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
          </Navbar>
          <Carousel
              swipeable={false}
              draggable={true}
              showDots={false}
              responsive={responsive}
              // ssr={true} // means to render carousel on server-side.
              infinite={true}
              // autoPlay={this.props.deviceType !== "mobile" ? true : false}
              // autoPlaySpeed={1000}
              keyBoardControl={true}
              // customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
          >
            <div><LayoverCard travelData = {sampleData[1]}/></div>
            <div><LayoverCard travelData = {sampleData[2]}/></div>
            <div><LayoverCard travelData = {sampleData[3]}/></div>
            <div><LayoverCard travelData = {sampleData[4]}/></div>
            <div><LayoverCard travelData = {sampleData[5]}/></div>
            <div><LayoverCard travelData = {sampleData[6]}/></div>
            <div><LayoverCard travelData = {sampleData[7]}/></div>
            <div><LayoverCard travelData = {sampleData[8]}/></div>
            {/*{arrOfDataDivs}*/}
          </Carousel>
        </div>

    )
  }
}

export default LayoverCarousel;
