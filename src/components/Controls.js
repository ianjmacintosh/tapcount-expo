import React from "react";
import PropTypes from "prop-types";

import "./Controls.css";

class Controls extends React.Component {
    static propTypes = {
        resetCount: PropTypes.func.isRequired,
        resetTime: PropTypes.func.isRequired,
        pauseTimer: PropTypes.func.isRequired,
        startTimer: PropTypes.func.isRequired,
        isTimerActive: PropTypes.bool,
        enterMaxMode: PropTypes.func
    }
    handleResetCounterClick = (e) => {
        this.props.resetCount();
    }

    handleResetTimerClick = (e) => {
        this.props.resetTime();
    }

    handleResetButtonClick = (e) => {
        this.props.pauseTimer();
        this.props.openPanel();
    }

    handleMaxClick = (e) => {
        this.props.enterMaxMode();
    }

    handlePauseButtonClick = (e) => {
        if (this.props.isTimerActive) {
            this.props.pauseTimer();
        } else {
            this.props.startTimer();
        }
    }

    render() {
        return (<div data-testid="controls-component" className="controls">
            <ul>
                <li>
                    <button className="pause-button" onMouseDown={this.handlePauseButtonClick} data-testid="pause-button">Start/Stop</button>
                </li>
                <li>
                    <button className="reset-button" onMouseDown={this.handleResetButtonClick} data-testid="reset-button">Reset</button>
                </li>
            </ul>
        </div>)
    }
}

export default Controls;