import React, {Component} from 'react';
import './timer.css';

class Timer extends Component {
    state = {
        timerValue: this.props.time,
        timerProgress: this.props.time
    }

    componentDidMount() {
    if (this.props.autostart) {
        this.doIntervalChange()
        }      
    }

    shouldComponentUpdate(nextProps,nextState) {
        if ((nextState.timerValue-1)*1000 % this.props.step) {
            return true
        } else {
            return false
        }}

    componentWillUnmount(){
        clearInterval(this.timerInterval)
    }

    doIntervalChange() {
            this.timerInterval = setInterval(() => {
                if (this.state.timerValue > 0) {
                    this.props.onTick(this.state.timerValue);
                    this.setState((prevstate) => {
                        return {
                            timerValue: prevstate.timerValue - 1,
                            timerProgress: prevstate.timerProgress-1
                        }
                    })
                } else {
                    this.props.onTick(0);
                    this.setState({
                        timerValue: 0,
                        timerProgress: 0
                    })
                    clearInterval(this.timerInterval)
                }
            }, 1000)  
    }
    
    timerStart = () => {
        this.doIntervalChange()
     }

    timerReset = () => {
        clearInterval(this.timerInterval)
    }
    
    
    render() {
        let timerIndicatorWidth = this.state.timerProgress / this.props.time * 100;
        return(
            <div className="timer_wrap">
                <h1>Timer</h1>
                <p> { `Залишилось часу: ${this.state.timerValue}`} </p>

                <div className="timer_bar">
                    <div className="timer_indicator" style={{width: timerIndicatorWidth +'%'}}></div>
                </div>

                <div className="btn_wrap">
                    <button className="btn btn_start" onClick = {this.timerStart}>Start</button>
                    <button className="btn btn_stop" onClick = {this.timerReset}>Stop</button>
                </div>
            </div>
        )
    }
}




export default Timer;