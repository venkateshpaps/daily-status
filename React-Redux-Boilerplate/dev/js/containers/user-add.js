import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../actions/index';


class AddDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addUser: {}
        };
    }
    Change(event) {
        let addUser = this.state.addUser;
        let name = event.target.name;
        let value = event.target.value;

        addUser[name] = value;

        this.setState({addUser})
    }

    render() {
        return (
            <div>
               
                    <h2>Add user </h2>
                    <p>Id:<input type="text"  name="id" onChange={this.Change.bind(this)} ></input></p>
                    <p>First Name : <input type="text"  name="first" onChange={this.Change.bind(this)} ></input></p>
                    <p>Last Name : <input type="text" name="last" onChange={this.Change.bind(this)}></input></p>
                    <p>Age : <input type="text" name="age" onChange={this.Change.bind(this)}></input></p>
                    <p>Description:<input type="text" name="description" onChange={this.Change.bind(this)}></input></p>
                    <p>Profile Photo : <input type="text" name="thumbnail" onChange={this.Change.bind(this)}></input></p>
                    <button type="button" onClick={this.props.addUser.bind(this,this.state.addUser)}> save</button>
                {/* </form> */}
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
    return bindActionCreators({ addUser: addUser }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(AddDetail);