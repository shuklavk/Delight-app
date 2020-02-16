import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavbarBrand, NavDropdown, NavItem, } from "react-bootstrap";
import Calendar from './Calendar';
const {format} = require('date-fns');
let activitiesData = require('./data.js');
let data = require('./data.js');

let dataReturn = activitiesData.activitiesData
const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555136316!2d-122.50763999826087!3d37.757814996332215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1581825516086!5m2!1sen!2sus';

async function load() {
  let response = await fetch('someurltoAJsonFile.json');
  let data = await response.json();
}

const getActivities = async () => {
  console.log('getActivities:', dataReturn);
}

// console.log(activitiesData)

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/selection">
            <Selection />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      departureDate: new Date(),
      //TAKE THE TRIMMED DATE FOR API CALL
      trimmedDate: new Date(),
      departureLocation: "",
      arrivalLocation: "",
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  onSubmit() {
    const destCode = document.getElementById("departureLocation").value.slice(0,3);
    const arrivalCode = document.getElementById("arrivalLocation").value.slice(0,3);
    this.setState({
      departureLocation: destCode,
      arrivalLocation : arrivalCode,
    });

  }

  onDateChange(date) {
    // const unformattedDepartureDate = date;
    let event = new Date(date);
    let newDate = JSON.stringify(event);
    const trimmedDate = newDate.slice(1,11);
    this.setState({
      trimmedDate : trimmedDate,
      departureDate: date,
    })
  }

  render() {
    return (
      <div className="s01">
        <form>
          <fieldset>
            <legend>Discover the Amazing City</legend>
          </fieldset>
          <div className="inner-form">
            <div className="input-field first-wrap">
              <input className="search"
                id='departureLocation'
                type="text"
                placeholder="Departure"
              />
            </div>
            <div className="input-field first-wrap">
              <input className="search" id='arrivalLocation' type="text" placeholder="Arrival" />
            </div>
            <Calendar className='calendar' departureDate={this.state.departureDate} onDateChange={this.onDateChange}/>
            <div className="input-field third-wrap">
              {/* <a href="http://localhost:3000/selection"> */}
                <button className="btn-search" type="button" onClick={() => { this.onSubmit() }}>Search</button>
              {/* </a> */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function Selection() {
  return <div>
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
    <div className="s02">
      <div className="cardUIRight">
        <h3> Flight Information </h3>

      </div>


      <div className="cardUI">
        <form>
          <fieldset>
            <legend>We have 5 cities you can layover at</legend>
          </fieldset>
          <div className="inner-form">
            <div className="input-field third-wrap">
              <button className="btn-search" type="button" onClick={() => getActivities()}>GetRequest Activities</button>

              <a href="http://localhost:3000/activities">
                <button className="btn-search" type="button">San Francisco</button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    ;
}

// function TodoList({ items }) {
//   return items.map(item => (
//       <h1>{item.name}</h1>
//   ));
// }

function ActivitiesRow({items}) {
  return items.map(item => (
      <div className="activitiesContainer">
        <img src={item.image} className="imageCards"></img>
        <div className="activityText">
          <p className="activityTitle" >{item.name}</p>
          <p>{item.rating} / 5 Stars</p>
          <p>{item.review_count} Reviews</p>
        </div>
        {/*<h1>{item.image.toString()}</h1>*/}
      </div>
  ));
}

function Activities() {
  return <div>
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

    <div className="activitiesContainerHigher">
      <div className="activitiesContainerLeft">
        <h1>Best Activities during your X hour layover </h1>
        <div className="bubbleRow">
          <div className="bubbleContainer"> Price</div>
          <div className="bubbleContainer"> Length</div>
          <div className="bubbleContainer"> Open Now</div>
          <div className="bubbleContainer"> Free</div>
        </div>
        <ActivitiesRow items={dataReturn} />
      </div>

      <div className="activitiesContainerRight">
        <div>
          <iframe src={url} width="500" height="500"></iframe>
        </div>
      </div>

    </div>
  </div>
    ;
}

