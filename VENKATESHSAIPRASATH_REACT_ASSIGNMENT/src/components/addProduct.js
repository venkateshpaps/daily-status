import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class AddProduct extends Component {
  render() {
    return (
      <div className="addProductMargin">
        <h1 className="textAlignCenter">ADD PRODUCT</h1>
        <div className="textAlignCenter addMargin"><label>ID:</label>
          <input type="text" name="id" onChange={(e) => { this.props.onChangeAdd(e) }} className="addTextbox1" /></div>
        <div className="textAlignCenter addMargin"><label>Product Name:</label>
          <input type="text" name="productName" onChange={(e) => { this.props.onChangeAdd(e) }} className="addTextbox2" /></div>
        <div className="textAlignCenter addMargin"><label>Price:</label>
          <input type="text" name="price" onChange={(e) => { this.props.onChangeAdd(e) }} className="addTextbox3" /></div>
        <div className="textAlignCenter addMargin"><label>Quantity</label>
          <input type="text" name="quantity" onChange={(e) => { this.props.onChangeAdd(e) }} className="addTextbox4" /></div>
        <div className="textAlignCenter addMargin"><label>R.O.L</label>
          <input type="text" name="rol" onChange={(e) => { this.props.onChangeAdd(e) }} className="addTextbox5" /></div>
        <button onClick={() => { this.props.onClickAdd(this.props.tempProd) }} className="btn btn-primary">
          ADD
        </button>
        <Link to="/"><button className="btn btn-primary">BACK</button></Link>
      </div>
    );
  }
}
export default AddProduct;
