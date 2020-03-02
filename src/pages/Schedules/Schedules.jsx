import React, { Component } from 'react';
import Calendar from 'react-calendar'
import styles from './Schedules.module.css'
import TimePicker from 'react-bootstrap-time-picker'

class Schedules extends Component {
  state = {
    date: new Date(),
    time: 0
  }

  handleTime = (e) => {
    try {
      let trueTime = e/3600;
      let time = trueTime //<= 12 ? trueTime : trueTime - 12  
      this.setState({
        time: time 
      })
    } catch (error) {
      this.setState({
        time: 0
      })
    }
  }

  checkTimeOfDay = () => {
    let date = this.state.date
    let hours = date.getHours();
    if(hours <= 12){
      return hours
    } else {
      return hours - 12
    }
  }

  handleTimeAbbr = (time) => {
    const trueTime = time <= 12 ? time + ' AM' : time - 12 + ' PM'
    return trueTime;
  }

  onScheduleChange = (date) => {
    this.setState({ date })
  }
  
  render() { 
    return ( 
      <div>
        <div className={styles.scheduleContainer}>
          <div>
            <Calendar
              className={styles.reactCalendar}
              onChange={this.onScheduleChange}
              value={this.state.date}
              />
          </div>
          <div className={styles.scheduleContent}>
            <div className={styles.scheduleTitles}>
              Schedules
            </div>
            <div className={styles.scheduleBox}>
              <div>
                {this.state.date.toLocaleDateString()}
              </div>
              <div>
              <TimePicker
              onChange={this.handleTime}
              value={this.state.time} 
              step={60} />
              <div>
                {this.handleTimeAbbr(this.state.time)}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Schedules;