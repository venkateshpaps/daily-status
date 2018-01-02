import React, { Component } from 'react';
import { Display } from './value/value';
class Dis extends Component {
    render() {
        return this.props.state.employee.map((n, index) => {
            return (<Display {...n} position={index} click={this.props.value.bind(this, index)} />);
        });
    }
}
export default Dis;