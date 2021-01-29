import React from "react";
import PropTypes from "prop-types";

import './Statistics.css';

class Statistics extends React.Component {
    static propTypes = {
        count: PropTypes.number,
        elapsedTime: PropTypes.number,
    }

    lastMeasurementTime = Date.now();

    average() {
        let count = this.props.count,
            elapsedTime = this.props.elapsedTime,
            average = 0;

        if (elapsedTime !== 0) {
            average = Math.round((count / elapsedTime * 1000 * 60 * 1000) / 1000);
        }

        return average;
    }

    render() {
        return (<span data-testid="statistics-component">
            <table>
                    <caption>Session Statistics</caption>
                    <tbody>
                        <tr>
                            <th scope="row">Avg. Speed</th>
                            <td data-testid="speed">{this.average()}/min</td>
                        </tr>
                        <tr>
                            <th scope="row">Count</th>
                            <td data-testid="count">{this.props.count}</td>
                        </tr>
                        <tr>
                            <th scope="row">Duration</th>
                            <td data-testid="time">
                            <time data-testid="stats-report-time">
                                <span data-testid="hours">{this.props.timeObject.hours < 10 ? "0" + this.props.timeObject.hours : this.props.timeObject.hours}</span>:
                                <span data-testid="minutes">{this.props.timeObject.minutes < 10 ? "0" + this.props.timeObject.minutes : this.props.timeObject.minutes}</span>:
                                <span data-testid="seconds">{this.props.timeObject.seconds < 10 ? "0" + this.props.timeObject.seconds : this.props.timeObject.seconds}</span>.
                                <span data-testid="milliseconds">{this.props.timeObject.milliseconds === 10 ? "0" : this.props.timeObject.milliseconds}</span>
                            </time>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </span>);
    }
}

export default Statistics;