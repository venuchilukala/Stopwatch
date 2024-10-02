import {Component} from 'react'
import './index.css'

const initialState = {
  isTimerRunning: false,
  timeCompletedInSeconds: 0,
}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount = () => {
    clearInterval(this.intervalId)
  }

  incrementTime = () => {
    this.setState(prevState => ({
      timeCompletedInSeconds: prevState.timeCompletedInSeconds + 1,
    }))
  }

  startTimer = () => {
    const {isTimerRunning} = this.state

    if (!isTimerRunning) {
      this.intervalId = setInterval(this.incrementTime, 1000)
      this.setState({isTimerRunning: true})
    }
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState(initialState)
  }

  formatTimeInMinsAndSecs = () => {
    const {timeCompletedInSeconds} = this.state

    const minutes = Math.floor(timeCompletedInSeconds / 60)
    const seconds = Math.floor(timeCompletedInSeconds % 60)

    const formattedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const formattedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${formattedMinutes}:${formattedSeconds}`
  }

  render() {
    return (
      <div className="container">
        <div className="inner-container">
          <h1>Stopwatch</h1>
          <div className="content">
            <div className="timer-text">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <div>
              <h1>{this.formatTimeInMinsAndSecs()}</h1>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="btn btn-1"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="btn btn-2"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn btn-3"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
