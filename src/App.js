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

const nextPage = () => {
  return(
      <Redirect push to="/about" />
  )
}

function App() {
  return (
      <Router>
        <div>
          {/*<nav>*/}
          {/*  <ul>*/}
          {/*    <li>*/}
          {/*      <Link to="/">Home</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/selection">Selection</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/users">Users</Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</nav>*/}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
  return <div className="s01">
    <form>
      <fieldset>
        <legend>We have 5 cities you can layover at</legend>
      </fieldset>

      <div className="inner-form">
        <div className="input-field third-wrap">
          <a href="http://localhost:3000/activities">
            <button className="btn-search" type="button">Search</button>
          </a>
        </div>
      </div>
    </form>
  </div>
      ;
}

function Activities() {
  return <div>
    <h1> Actitivies</h1>
    <button className="btn-search" type="button">GetRequest of Activities</button>
    <a href="http://localhost:3000/">
      <button className="btn-search" type="button">Activities</button>
    </a>
  </div>;
}
