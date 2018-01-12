import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import ItemList from '../containers/ItemList';
import ItemAdd from '../containers/itemAdd';
import ItemEdit from '../containers/itemEdit';
import ItemView from '../containers/itemView';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route  exact path="/" component={ItemList} />
                    <Route path="/Add" component={ItemAdd} />
                    <Route path="/Edit" component={ItemEdit} />
                    <Route path="/View" component={ItemView} />
                </div>
            </Router>
        );
    }
}
export default App;
