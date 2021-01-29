import React from "react";
import PropTypes from "prop-types";

import { Pressable, ScrollView, Text } from "react-native";

// import "./Controls.css";

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
        return (
            <ScrollView>
                <Pressable onPressIn={this.handlePauseButtonClick}>
                    <Text>Start/Stop</Text>
                </Pressable>
                <Pressable onPressIn={this.handleResetButtonClick}>
                    <Text>Reset</Text>
                </Pressable>
            </ScrollView>
        )
    }
}

export default Controls;