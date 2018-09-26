import React, { Component } from 'react';
import logo from './logo.svg';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarHeader = () => (
  <div
    style={{ display: 'flex', justifyContent: 'space-around', maxWidth: 1550 }}
  >
    {days.map(day => (
      <h3>{day}</h3>
    ))}
  </div>
);

const weeks = [0, 1, 2, 3, 4];

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <CalendarHeader />
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
