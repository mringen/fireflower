import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import firebaseConfig from './firebaseConfig';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
