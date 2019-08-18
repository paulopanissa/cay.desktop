import './config/reactotron';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './App';
require('dotenv').config();

console.log(process.env.NODE_ENV);
console.log(process.env.GH_TOKEN);
const dnsSentry = process.env.REACT_APP_SENTRY;
const dns = `https://${dnsSentry}@sentry.io/1511510`;
Sentry.init({ dns });

ReactDOM.render(<App />, document.getElementById('root'));
