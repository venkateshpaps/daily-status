import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectItem, deleteItem } from '../actions/index';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: {}
        };
    }
    itemSelect(item) {
        this.state.newItem = item;
        this.setState({ newItem: this.state.newItem });
    }
    editItem(newItem) {
        this.props.selectItem(newItem);
    }
    addItem() {
    }
    deleteItem(deleteItem) {
        this.props.deleteItem(deleteItem);
    }
    viewItem(editItem) {
        this.props.selectItem(editItem);
    }
    renderList() {
        return this.props.items.map((item) => {
            return (
                <div key={item.id}>
                    <p><input value={item.id} type="radio" onClick={this.itemSelect.bind(this, item)} >
                    </input>Item.ID: {item.id}, 
                    Item Name: {item.item} , Price: {item.price} </p>
                </div>
            );
        });
    }
    render() {
        return (
            <div>
                <ul>
                    <h1>CAFETERIA FOOD ITEMS</h1>
                    {this.renderList()}
                </ul>
                <div>
                    <ul>
                        <button><Link to='/Add' onClick={this.addItem.bind(this)} >ADD</Link></button>
                        <button><Link to="/Edit" onClick={this.editItem.bind(this, this.state.newItem)}>EDIT</Link>
                        </button>
                        <button><Link to="/View" onClick={this.viewItem.bind(this, this.state.newItem)}>VIEW</Link>
                        </button>
                        <button onClick={this.deleteItem.bind(this, this.state.newItem)}><a href="">DELETE</a>
                        </button>
                    </ul>
                    <hr />
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        items: state.items
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectItem: selectItem, deleteItem: deleteItem }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(ItemList);