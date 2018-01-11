import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addingUser } from '../actions/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Header } from '../components/header';
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginUser: {}
        };
    }
    Change(event) {
        let loginUser = this.state.loginUser;
        let name = event.target.name;
        let value = event.target.value;
        loginUser[name] = value;
        this.setState({ loginUser})
        console.log(loginUser);
    }
    render() {
        return (
            <div className="b">
                <Header />
                <h1 className="marginLogin">LOGIN </h1>
                <p className="marginPhone">Phone Number :<input className="phoneInput" type="text" name="phone"
                    onChange={this.Change.bind(this)} ></input></p>
                <p className="marginName">Name : <input className="nameInput" type="text" name="name"
                    onChange={this.Change.bind(this)} ></input></p>
                <Link to="/welcome"> <button className="marginLoginBtn" type="button"
                    onClick={this.props.addingUser.bind(this, this.state.loginUser)}>Login</button></Link>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.users
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addingUser: addingUser }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Login);
