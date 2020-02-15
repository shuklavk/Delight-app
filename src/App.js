import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="s01">
      <form>
        <fieldset>
          <legend>Discover the Amazing City</legend>
        </fieldset>
        <div class="inner-form">
          <div class="input-field first-wrap">
            <input id="search" type="text" placeholder="Departure" />
          </div>
          <div class="input-field second-wrap">
            <input id="location" type="text" placeholder="Time Departure" />
          </div>
        </div>
        <div class="inner-form">
          <div class="input-field first-wrap">
            <input id="search" type="text" placeholder="Arrival" />
          </div>
          <div class="input-field second-wrap">
            <input id="location" type="text" placeholder="Time Arrival" />
          </div>
        </div>
        <div class="inner-form">
          <div class="input-field third-wrap">
            <button class="btn-search" type="button">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
