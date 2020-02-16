import React from 'react';
// import x from 'airport-autocomplete.js';
// import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingDateInputClicked: false,

    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler = () => {
    this.setState((prevState) => ({
      startingDateInputClicked: !prevState.startingDateInputClicked,
    }));
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
              <input className="search" id='departureLocation' type="text" placeholder="Departure" />
            </div>
            <div className="input-field first-wrap">
              <input className="search" id='arrivalLocation' type="text" placeholder="Arrival" />
            </div>
            <Calendar className='calendar'/>
            <div className="input-field third-wrap">
              <button className="btn-search" type="button">Search</button>
            </div>
          </div>
          {/* <div className="inner-form">
            <div className="input-field first-wrap">
              <input className="search" id='arrivalLocation' type="text" placeholder="Arrival" />
            </div>
            <div className="input-field second-wrap">
              <input className="location" type="text" placeholder="Time Arrival" />
            </div>
          </div> */}
          {/* <div className="inner-form">
            <div className="input-field third-wrap">
              <button className="btn-search" type="button">Search</button>
            </div>
          </div> */}
        </form>
      </div>
    );
  }
}

export default App;
