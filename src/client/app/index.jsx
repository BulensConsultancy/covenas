import React from 'react';
import {render} from 'react-dom';
import HeaderComponent from './headercomponent.jsx';
import MenuComponnent from './menucomponent.jsx';
import { Router, Route, Switch } from 'react-router'


class App extends React.Component {
  render () {
    return (     
        <HeaderComponent />    
    );
  }
}

class PageApp extends React.Component {
  render () {
    return (     
        <MenuComponnent />    
    );
  }
}

render(<PageApp/>, document.getElementById('pageheader'));