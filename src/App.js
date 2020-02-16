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
import {Navbar, Nav, NavbarBrand, NavDropdown, NavItem,} from "react-bootstrap";
let data = require('./data.js');


async function load()
{
  let response = await fetch('someurltoAJsonFile.json');
  let data = await response.json();
}

const getActivities = async () => {
  console.log(data);
  // let res = fetch('http://localhost:3001/home/')
  //     .then((response) => {
  //       let res1 =  response.json()
  //       console.log(res1)
  //       return res1
  //     })
}

console.log(data)

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

function Home() {
  return <div className="s01">
    <form>
      <fieldset>
        <legend>Discover the Amazing City</legend>
      </fieldset>
      <div className="inner-form">
        <div className="input-field first-wrap">
          <input id="search" type="text" placeholder="Departure"/>
        </div>
        <div className="input-field second-wrap">
          <input id="location" type="text" placeholder="Time Departure"/>
        </div>
      </div>
      <div className="inner-form">
        <div className="input-field first-wrap">
          <input id="search" type="text" placeholder="Arrival"/>
        </div>
        <div className="input-field second-wrap">
          <input id="location" type="text" placeholder="Time Arrival"/>
        </div>
      </div>
      <div className="inner-form">
        <div className="input-field third-wrap">
          <a href="http://localhost:3000/selection">
            <button className="btn-search" type="button">Search</button>
          </a>
        </div>
      </div>
    </form>
  </div>
      ;
}

function Selection() {
  return <div>
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="#home">
        <a href="http://localhost:3000/">
        <img style={{height: 60}} src={require('./images/delight_logo.png')}/>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      </Navbar.Collapse>
    </Navbar>
    <div className="s02">
      <div className="cardUI">
        <form>
          <fieldset>
            <legend>We have 5 cities you can layover at</legend>
          </fieldset>
          <div className="inner-form">
            <div className="input-field third-wrap">
              <button className="btn-search" type="button" onClick={() => getActivities()}>GetRequest Activities</button>

              <a href="http://localhost:3000/activities">
                <button className="btn-search" type="button">Navigation to Activities</button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
      ;
}

//
// function ActivitiesRow() {
//   return data.map(item => (
//       <h1>{item.name}</h1>
//   ));
// }
//


function Activities() {
  return <div>
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="#home">
        <a href="http://localhost:3000/">
          <img style={{height: 60}} src={require('./images/delight_logo.png')}/>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      </Navbar.Collapse>
    </Navbar>
    <div className="s02">
      <div className="cardUI">
        <form>
          <fieldset>
            <legend>Activities</legend>
          </fieldset>
          <div className="inner-form">
            <div className="input-field third-wrap">
              <a href="http://localhost:3000/">
                <button className="btn-search" type="button">GetRequest of Activities</button>
                {/*<ActivitiesRow items-{items} />*/}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
      ;
}
