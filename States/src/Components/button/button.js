import React, { Component } from 'react';
import './Button.css'
class Button extends Component {
    render() {
        return (
            <div>
                <button  className="btnStyle" onClick={this.props.SortingName}>Sort by Name</button>
                <button  className="btnStyle" onClick={this.props.SortingAge}>Sort by Age</button>
                <button  className="btnStyle" onClick={this.props.toggle}>Toggle</button>
            </div>);
    }
}
export default Button;