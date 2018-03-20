import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import RatingReducer from './Reducers/RatingReducer'
import { RatingsSaga } from './Saga/RatingsSaga'
let sagaMiddleware = createSagaMiddleware();
const store = createStore(RatingReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger()))
);
sagaMiddleware.run(RatingsSaga);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
