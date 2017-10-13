import React from 'react';
import {render} from 'react-dom';
import BasicExample from './routing.jsx';
import { Router, Route, Switch } from 'react-router'


class App extends React.Component {
  render () {
    return (     
        <BasicExample />    
    );
  }
}

render(<App/>, document.getElementById('hello'));