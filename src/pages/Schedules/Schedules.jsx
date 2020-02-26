import React, { Component } from 'react';
import Calendar from 'react-calendar'
import styles from './Schedules.module.css'

class Schedules extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })
  
  render() { 
    return ( 
      <div>
        <div className={styles.scheduleContainer}>
          <div>
            <Calendar
              className={styles.reactCalendar}
              onChange={this.onChange}
              value={this.state.date}
              />
          </div>
          <div className={styles.scheduleContent}>
            <div className={styles.scheduleTitles}>
              Schedules
            </div>
            <div className={styles.scheduleBox}>
              Box
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Schedules;