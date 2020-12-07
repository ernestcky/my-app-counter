import React, { Component } from 'react';

export default class CounterSizeGenerator extends Component {
    render() {
        return (
        <section 
            style={
                {
                 border: '2px solid white',
                 padding: '15px'
                }
            }
        >
            <span>
                size: <input type="number" value={this.props.size} onChange={this.props.onChange} />
            </span>
        </section>
        )
    }
}