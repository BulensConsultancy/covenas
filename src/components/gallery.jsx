import React from 'react';
import {render} from 'react-dom';
import GalleryComponent from './gallerycomponent.jsx';
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

class App extends React.Component {
  render () {
    return (     
        <MenuComponent activePage="gallery" />    
    );
  }
}

class GalleryApp extends React.Component {		
	render () {
		var gallery = [
		{url: 'assets/img/content/gallery/g01.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g02.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g03.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g04.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g05.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g06.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g07.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g08.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g09.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g10.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g11.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g12.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g13.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g14.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g15.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g16.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g17.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g18.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g19.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g20.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g21.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g22.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g23.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g24.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g25.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g26.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g27.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g28.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g29.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g30.jpg', caption: 'Coveñas Diving'	},		
		{url: 'assets/img/content/gallery/g31.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g32.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g33.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g34.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g35.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g36.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g37.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g38.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g39.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g40.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g41.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g42.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g43.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g44.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g45.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/g46.jpg', caption: 'Coveñas Diving'	}		
		]; 
		
		return (     
			<GalleryComponent list={gallery} />    
		);
	  }
}

render(<App/>, document.getElementById('pageheader'));
render(<Footer/>, document.getElementById('footer'));
render(<GalleryApp />, document.getElementById('gallery'));