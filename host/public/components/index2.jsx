import React from 'react';
import {render} from 'react-dom';
import CovenasRouter from './router.jsx';
import { Router, Route, Switch } from 'react-router'


class App extends React.Component {
  render () {
    return (     
        <CovenasRouter />    
    );
  }
}

render(<App/>, document.getElementById('hello'));