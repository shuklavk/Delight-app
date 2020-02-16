import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LayoverCarousel from './LayoverCarousel'
import LayoverCard from './LayoverCard'
import * as serviceWorker from './serviceWorker';
import sampleData from './sampleData'

// ReactDOM.render(<LayoverCard travelData = {sampleData[2]}/>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
