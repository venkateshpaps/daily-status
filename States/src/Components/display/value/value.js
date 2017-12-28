import React, { Component } from 'react';


const Display = (props) => {
    return (<div> I'm {props.name} and my age is {props.age}
        <input type="text" onChange={props.click} /> </div>);
}

export { Display }