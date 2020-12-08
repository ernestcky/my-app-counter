import React, { Component } from 'react';

export default class CounterSizeGenerator extends Component {

    constructor(props) {
        super(props);
        this.state= {
            size: 0
        }
    }

    onChange = (event) => {
        this.setState({ size: event.target.value });
        this.props.changeSize(event.target.value);
    };
    
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
                size: <input type="number" value={this.props.size} onChange={this.onChange} />
            </span>
        </section>
        )
    }
}