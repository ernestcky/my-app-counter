import React, { Component } from 'react';

export default class CounterSizeGenerator extends Component {
    render() {
        return (
            <input type="number" value={this.props.size} onChange={this.props.onChange} />
        )
    }
}