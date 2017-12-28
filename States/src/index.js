import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Sample from './container/App';

ReactDOM.render(<Sample />, document.getElementById('root'));
registerServiceWorker();
