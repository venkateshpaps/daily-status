import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser, showDetails,deleteUser } from '../actions/index'


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {}
        };
    }
    userSelect(user) {
        this.state.newUser = user;
        this.setState({ newUser: this.state.newUser });
    }
    editUser(newUser) {
        this.props.showDetails(2);
        this.props.selectUser(newUser);
    }
    addUser() {
        this.props.showDetails(1);
    }
    deleteUser(deleteUser)
    {
        this.props.deleteUser(deleteUser);
    }
    viewUser(editUser)
    {
        this.props.selectUser(editUser);
        this.props.showDetails(3);  
    }
    renderList() {
        return this.props.users.map((user) => {
            return (
                <div key={user.id}>
                    <p><input value={user.id} type="radio" onClick={this.userSelect.bind(this, user)} ></input>
                    Name: {user.first}{user.last}, Age:{user.age}, Description:{user.description} </p>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderList()}
                </ul>
                <button onClick={this.addUser.bind(this)}> add  </button>
                <button onClick={this.editUser.bind(this, this.state.newUser)}> edit </button>
                <button onClick={this.viewUser.bind(this, this.state.newUser)}> view </button>
                <button onClick={this.deleteUser.bind(this, this.state.newUser)}> delete </button>
            </div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser, showDetails: showDetails,deleteUser:deleteUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);