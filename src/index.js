import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './css/index.css';
import App from './App';
import Playback from './playback';

ReactDOM.render(<BrowserRouter><Switch>
    <Route path="/" exact component={App} />
    <Route path="/play/:id" component={Playback} />
</Switch>
</BrowserRouter>, document.getElementById('root'));
// registerServiceWorker();