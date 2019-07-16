import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import  'font-awesome/css/font-awesome.css';
import './css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
