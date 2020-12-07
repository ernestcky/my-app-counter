import React, { Component } from 'react';

export default class CounterGroupSum extends Component {
    render() {
        return (
            <section>
                <span>Sum = {this.props.sum}</span>
            </section>
        )
    }
}