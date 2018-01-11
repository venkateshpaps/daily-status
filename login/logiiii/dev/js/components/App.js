import React, { Component } from 'react';
import Login from '../containers/user-add';
import Welcome from '../containers/welcome';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/welcome" component={Welcome} />
                </div>
            </Router>
        );
    }
}
export default App;
