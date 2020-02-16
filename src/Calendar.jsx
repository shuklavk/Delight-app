import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
 
class Calendar extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div className="datePicker">
        <DatePicker
          onChange={this.props.onDateChange}
          value={this.props.departureDate}
        />
      </div>
    );
  }
}

export default Calendar;