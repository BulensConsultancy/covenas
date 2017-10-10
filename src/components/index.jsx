import React from 'react';
import {render} from 'react-dom';
import HeaderComponent from './headercomponent.jsx';
import MenuComponent from './menucomponent.jsx';
import FooterComponent from './footercomponent.jsx';
import { Router, Route, Switch } from 'react-router'


class Footer extends React.Component {
  render () {
    return (     
        <FooterComponent />    
    );
  }
}

class PageApp extends React.Component {
  render () {
    return (     
        <MenuComponent />    
    );
  }
}

render(<PageApp/>, document.getElementById('pageheader'));
render(<Footer/>, document.getElementById('footer'));