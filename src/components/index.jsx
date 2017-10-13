import React from 'react';
import {render} from 'react-dom';
import HeaderComponent from './headercomponent.jsx';
import MenuComponent from './menucomponent.jsx';
import FooterComponent from './footercomponent.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends React.Component {
  render () {
    return (     
        <MenuComponent />    
    );
  }
}

class Footer extends React.Component {
  render () {
    return (     
        <FooterComponent />    
    );
  }
}

render(<App/>, document.getElementById('pageheader'));
render(<Footer/>, document.getElementById('footer'));