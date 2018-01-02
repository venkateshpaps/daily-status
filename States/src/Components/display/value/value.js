import React, { Component } from 'react';
class Display extends Component {
    componentDidMount(){
        if(this.props.position==1)
        this.textInput.focus();
    }
    render() {
        
        return (<div> I'm {this.props.name} and my age is {this.props.age}
            <input type="text" onChange={this.props.click}  ref={(inpu) => { this.textInput = inpu; }} /> 
           </div>);
    }
}
export { Display }
