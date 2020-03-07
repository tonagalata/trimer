import React, { Component } from "react";
import Calendar from "react-calendar";
import styles from "./Schedules.module.css";
import TimePicker from "react-bootstrap-time-picker";

class Schedules extends Component {
  state = {
    date: new Date(),
    time: 9
  };

  handleTime = e => {
    try {
      let trueTime = e / 3600;
      let time = trueTime;
      //<= 12 ? trueTime : trueTime - 12
      this.setState({
        time: time
      });
    } catch (error) {
      this.setState({
        time: 0
      });
    }
  };

  checkTimeOfDay = () => {
    let date = this.state.date;
    console.log(date);
    let hours = date.getHours();
    if (hours <= 12) {
      return hours;
    } else {
      return hours - 12;
    }
  };

  handleTimeAbbr = time => {
    const trueTime = time <= 12 ? time + " AM" : time - 12 + " PM";
    return trueTime;
  };

  onScheduleChange = date => {
    this.setState({ date });
  };

  render() {
    return (
      <div className='container'>
        <div className={styles.scheduleContainer}>
          <div>
            <Calendar
              className={styles.reactCalendar}
              onChange={this.onScheduleChange}
              value={this.state.date}
            />

            {console.log(this.props)}
            {console.log(this.state)}
          </div>
          <div className={styles.scheduleContent}>
            <div className={styles.scheduleBox} style={{ padding: "2rem" }}>
              <h3>
                Selected Date
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginTop: "2rem" }}>
                <div style={{ marginBottom: '1rem'}}>{this.state.date.toLocaleDateString()}</div>
                <div style={{ marginBottom: '1rem' }}>
                  <TimePicker
                    onChange={this.handleTime}
                    value={this.state.time}
                    step={60}
                  />
                  <div style={{ marginTop: '1rem' }}>{this.handleTimeAbbr(this.state.time)}</div>
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
