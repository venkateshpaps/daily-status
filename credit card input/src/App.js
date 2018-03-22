import React, { Component } from 'react';
import CreditCardInput from 'react-credit-card-input';
 

class App extends Component {
  constructor(props){
  super()
  this.state={cardNumber:0,expiry:0,cvc:0}
}
  handleCardNumberChange=(e)=>{
        this.setState({cardNumber:e.target.placeholder})
  }
  handleCardExpiryChange=(e)=>{
    this.setState({expiry:e.target.placeholder})
  }
  handleCardCVCChange=(e)=>{
    this.setState({cvc:e.target.placeholder})
  }
  render() {
    return (
      <div>
        <h1>Credit Card Input</h1>
 
       <CreditCardInput
         cardNumberInputProps={{ placeholder: this.state.cardNumber, onChange: (e)=>this.handleCardNumberChange }}
         cardExpiryInputProps={{ placeholder: this.state.expiry, onChange: (e)=>this.handleCardExpiryChange }}
         cardCVCInputProps={{ placeholder: this.state.cvc, onChange: (e)=>this.handleCardCVCChange }}
         fieldClassName="input"
       />
      </div>
    );
  }
}

export default App;
