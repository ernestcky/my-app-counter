import React, { Component } from 'react';
import Counter from './Counter.js';
import CounterGroupSum from './CounterGroupSum.js';
import {v4 as uuidv4} from 'uuid';
import CounterContainer from '../containers/CounterContainer'

export default class CounterGroup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sum: 0,
        };
    };

    handleValueUpdate = (value) => {
        this.setState((prevState) => ({
            sum: prevState.sum + value
        }))
    }

    initArraySize = (number) => {
        const size = number.length > 0 ? parseInt(number) : 0;
        return Array.from(Array(size).keys());
    };

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);
        const counterArr = initArraySize.map((value) => (
            <CounterContainer key={uuidv4()} onChangeValue={this.handleValueUpdate} />
        ));
        return (
            <div>
                <CounterGroupSum sum={this.state.sum}/>
                {counterArr}
            </div>
        );
    };
}
