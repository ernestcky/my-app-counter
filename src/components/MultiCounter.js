import React, { Component } from 'react'
import CounterGroup from './CounterGroup'
import CounterSizeGenerator from './CounterSizeGenerator'

export default class MultiCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 0,
        };
    };

    onChange = (event) => {
        this.setState({ size: event.target.value });
    };

    render() {
        return (
            <div>
                <CounterSizeGenerator size={this.state.size} onChange={this.onChange} />
                <CounterGroup size={this.state.size} />
            </div>
        );
    };
}
