import React from 'react';
import {render} from 'react-dom';
import HeaderComponent from './headercomponent.jsx';
import MenuComponent from './menucomponent.jsx';
import FooterComponent from './footercomponent.jsx';

class App extends React.Component {
  render () {
    return (     
        <MenuComponent activePage="environment" />    
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