import React, { Component } from 'react'
import CounterGroup from './CounterGroup'
import CounterSizeGenerator from './CounterSizeGenerator'
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer'

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
                <CounterSizeGeneratorContainer />
                <CounterGroup size={this.state.size} />
            </div>
        );
    };
}
