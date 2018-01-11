import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserReducer from '../reducers/reducer-users';
class Welcome extends Component {
    render() {
        return (
            <div>
                hi{console.log('hi',this.props.user)}    
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.UserReducer
    };
}
export default connect(mapStateToProps)(Welcome);