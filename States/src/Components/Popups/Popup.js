import React from 'react';
import { createStore } from 'redux';
class Redux extends React.Component {
    render() {
        const reducer = function (state, action) {
            if (action.type === "Summer") {
                return action.payload
            }
            if (action.type === "Winter") {
                return action.payload
            }
            return state;
        }
        const store = createStore(reducer, "It is Monsoon");
        console.log(store.getState());
        store.subscribe(() => {
            console.log(store.getState());
        })
        store.dispatch({ type: "Summer", payload: "It is summer,Bring Cap" })
        store.dispatch({ type: "Winter", payload: "It is winter,Bring Umbrella" })
        return (<div>Check Your Console for Redux Output:</div>);
    }
}
export { Redux }
