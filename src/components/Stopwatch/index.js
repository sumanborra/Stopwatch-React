// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  startStopwatch = () => {
    this.id = setInterval(this.secondsMinutes, 1000)
  }

  secondsMinutes = () => {
    const {minutes, seconds} = this.state
    if (seconds === 59) {
      this.setState(prevState => ({minutes: prevState.minutes + 1, seconds: 0}))
    }
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  stopStopwatch = () => {
    clearInterval(this.id)
  }

  resetStopwatch = () => {
    clearInterval(this.id)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state
    const minutesShow = minutes < 10 ? '0' + minutes : minutes
    const secondsShow = seconds < 10 ? '0' + seconds : seconds
    return (
      <div className="background-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-card-container">
          <div className="timer-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image-time"
            />
            <p className="para-timer">Timer</p>
          </div>
          <h1 className="para-time-show-minutes-seconds">
            {minutesShow}:{secondsShow}
          </h1>
          <div>
            <button
              type="button"
              className="buttn start"
              onClick={this.startStopwatch}
            >
              Start
            </button>
            <button
              type="button"
              className="buttn stop"
              onClick={this.stopStopwatch}
            >
              Stop
            </button>
            <button
              type="button"
              className="buttn reset"
              onClick={this.resetStopwatch}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
