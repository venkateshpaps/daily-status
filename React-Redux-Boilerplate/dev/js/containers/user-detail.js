import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modify } from '../actions/index';
import { bindActionCreators } from 'redux';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
    }

    handleClick(event) {
        const { user } = this.state;
        this.props.modify(user);
    }
    handleAgeChange(event) {
        this.state.user.age = event.target.value;
        this.setState({ user: this.state.user });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            user: {
                first: nextProps.user.first,
                last: nextProps.user.last,
                age: nextProps.user.age,
                description: nextProps.user.description,
                id: nextProps.user.id,
                thumbnail: nextProps.user.thumbnail
            }
        })
    }
    componentWillUpdate() {
        console.log('Will Update');
    }
    componentDidUpdate() {
        console.log('Did Update');
    }
    render() {
        console.log('Rendered');
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: <input type="text" placeholder={this.props.user.age} value={this.state.user.age} onChange={this.handleAgeChange} ></input></h3>
                <button onClick={this.handleClick.bind(this)}> save</button>
                <h3>Description: {this.props.user.description}</h3>
            </div>
        );
    }
}
// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ modify: modify }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);
