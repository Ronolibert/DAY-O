import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { getFormattedDay } from './helpers';
import { daysAbbr, months, MODE } from './constants';

const CalendarHeader = ({ currentMonth, onNextMonth, onPrevMonth }) => (
  <div>
    <h2>
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
      {daysAbbr.map(day => (
        <h3>{day}</h3>
      ))}
    </div>
  </div>
);

const SpaceBetween = ({ children, style }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', ...style }}>
    {children}
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Calendar>
          {({ weekDates }) => (
            <>
              <SpaceBetween style={{ display: 'block' }}>
                <button>PREV</button>
                <button>NEXT</button>
              </SpaceBetween>
              <div
                style={{ display: 'flex', justifyContent: 'space-between ' }}
              >
                {weekDates.map((date, index) => (
                  <h2>
                    {daysAbbr[index]}: {date}
                  </h2>
                ))}
              </div>
            </>
          )}
        </Calendar>
      </div>
    );
  }
}

/**
 * @returns {Array<Date>}
 */
const getDatesForWeek = () => {
  const startOfWeek = moment().startOf('isoWeek');
  const endOfWeek = moment().endOf('isoWeek');

  const days = [];
  let day = startOfWeek;

  while (day <= endOfWeek) {
    days.push(getFormattedDay(day));
    day = day.clone().add(1, 'd');
  }

  return days;
};

class Calendar extends Component {
  state = {
    mode: MODE.month,
    currentDay: new Date().getDay(),
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    weekDates: getDatesForWeek()
  };

  get getStateAndMethods() {
    return {
      ...this.state,
      handleNext: this.handleNext,
      handlePrev: this.handlePrev,
      onModeChange: this.handleModeChange
    };
  }

  handlePrev = () => {};

  handleNext = () => {};

  handleModeChange = mode => this.setState({ mode });

  render() {
    return <div>{this.props.children(this.getStateAndMethods)}</div>;
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
