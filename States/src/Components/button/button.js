
import React, { Component } from 'react';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.SortingName}>Sort by Name</button>
            <button onClick={props.SortingAge}>Sort by Age</button>
            <button onClick={props.toggle}>Toggle</button>
        </div>);
}
export default  Button;