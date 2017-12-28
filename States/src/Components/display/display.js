
import React, { Component } from 'react';
import { Display } from './value/value';

const Dis =(props)=>
{
    return props.state.employee.map((n, index) => {
        return (<Display {...n} click={props.value.bind(this, index)} />);
    });
}
export default Dis;