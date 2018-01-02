import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Dis from '../Components/display/display';
import Button from '../Components/button/button';
import { Header } from '../Components/Header/Header';
import {Sort} from '../Components/Sort/Sort';
import {Redux} from '../Components/Popups/Popup';
class Sample extends Component {
    state = {
        employee: [
            { name: "Venkatesh", age: 24 }, { name: "Nirmal", age: 22 }, { name: "Adarsh", age: 40 }],
        order: "asc",
        showPerson: false
    };
    textValues = (a, event) => {
        const { employee } = this.state;
        employee[a].name = event.target.value;
        this.setState({ employee });
    }
    sortingByName = () => {
        const { employee, order } = this.state;
        const isAscend = (order === "desc");
        employee.sort((x, y) => {
            return x.name < y.name ? isAscend ? -1 : 1 : x.name > y.name ? isAscend ? 1 : -1 : 0;
        });
        this.setState({
            employee,
            order: isAscend ? "asc" : "desc"
        })
    };
    sortingByAge = () => {
        const { employee, order } = this.state;
        const isAge = (order === "desc");
        employee.sort((x, y) => {
            return x.age < y.age ? isAge ? -1 : 1 : x.age > y.age ? isAge ? 1 : -1 : 0;
        });
        this.setState({
            employee,
            order: isAge ? "asc" : "desc"
        })
    };

    toggleView = () => {
        const data = this.state.showPerson;
        this.setState({ showPerson: !data });
    }
componentWillMount()
{
    console.log('Will Mount');
}
componentDidMount(){
    console.log('Mounted');
}

    render() {

        console.log('Rendered');
        return (
            
            <Sort>
            <Header>Photonites</Header>
            <Redux />
                <Button SortingName={this.sortingByName} SortingAge={this.sortingByAge} toggle={this.toggleView} />
                {this.state.showPerson === true ?
                    <div>
                        <Dis state={this.state} value={this.textValues} />
                        <span>All details shown Mr. </span><strong>{this.props.endName}</strong>
                    </div> : null
                }
          
            </Sort>
             
        );
    }
}

Sample.defaultProps = {
    endName: 'Venkatesh'
  }
export default Sample;