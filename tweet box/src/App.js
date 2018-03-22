import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super()
    this.state = { disabled: false, text: {} }
  }
  handleInput = (e) => {
    if (e.target.value.length <= 25) {
      let name = e.target.name;
      let value = e.target.value;
      let text = {};
      text[name] = value;
      this.setState({ text: text, disabled: false })
    }
    else {
      this.setState({ disabled: true })
    }
  }
  render() {
    return (
      <div>
        <h1 style={{ margin: "15px 0 0 100px" }}>Tweet box</h1>
        <input type="text" onChange={(e) => this.handleInput(e)} name="text"
          style={{
            backgroundColor: this.state.disabled ? "red" : "#ffffff", height: "30px",
            width: "200px", margin: "50px 0 0 100px"
          }} />
        <span style={{ display: this.state.disabled ? "block" : "none", margin: "0 0 0 100px" }}>Max 25 Characters</span>
        <button style={{ display: this.state.disabled ? "none" : "block", margin: "15px 0 0 100px" }}>Submit</button>
      </div>
    )
  }
}

export default App;
