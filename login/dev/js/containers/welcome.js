import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserReducer from '../reducers/LoginReducer';
class Welcome extends Component {
    render() {
        return (
            <div>
                hi {this.props.user[0].name}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.users
    };
}
export default connect(mapStateToProps)(Welcome);