import React, { Component, Fragment } from 'react';
import logo from './logo.svg';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarHeader = ({ currentMonth, onNextMonth, onPrevMonth }) => (
  <div style={{ maxWidth: 1550 }}>
    <h2
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 95
      }}
    >
      <button onClick={onPrevMonth}>PREV</button>
      {months[currentMonth]}
      <button onClick={onNextMonth}>NEXT</button>
    </h2>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      {days.map(day => (
        <h3>{day}</h3>
      ))}
    </div>
  </div>
);

const weeks = [0, 1, 2, 3, 4];

const createCalendar = () => {};

class App extends Component {
  state = {
    currentMonth: 0,
    calendarMatrix: createCalendar()
  };

  componentDidMount() {
    this.setState({ currentMonth: new Date().getMonth() });
  }

  handlePrevMonth = () => {
    const newMonth = this.state.currentMonth - 1;
    if (newMonth >= 0) {
      this.setState({ currentMonth: newMonth });
    }
  };

  handleNextMonth = () => {
    const newMonth = this.state.currentMonth + 1;
    if (newMonth <= 11) {
      this.setState({ currentMonth: newMonth });
    }
  };

  render() {
    const { currentMonth } = this.state;
    return (
      <div>
        <div>
          <CalendarHeader
            currentMonth={currentMonth}
            onNextMonth={this.handleNextMonth}
            onPrevMonth={this.handlePrevMonth}
          />
          <div style={{ marginLeft: 95 }}>
            {weeks.map(week => (
              <div style={{ display: 'flex' }}>
                {days.map(day => (
                  <div
                    style={{
                      border: '1px solid black',
                      width: 220,
                      height: 160
                    }}
                  >
                    {day}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// cases for 6 rows
// if first day is on a friday and there are 31 days in that month
// if first day is on a saturday and there are 30 or more days in that month
// [26,27,28,29,30,31,1]
// [2,3,4,5,6,7,8]
// [9,10,11,12,13,14,15]
// [16,17,18,19,20,21,22]
// [23,24,25,26,27,28,29]
// [30,1,2,3,4,5,6]

// firstDayOfTheMonth
// lastDayOfMonth
// maxDaysOfPrevMonth
