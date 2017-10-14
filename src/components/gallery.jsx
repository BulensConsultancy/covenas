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
		{url: 'assets/img/content/gallery/001.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/002.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/003.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/004.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/005.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/006.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/007.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/008.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/34.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/33.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/31.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/30.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/29.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/28.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/27.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/26.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/25.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/24.jpg', caption: 'Coveñas Diving'	},
		{url: 'assets/img/content/gallery/23.jpg', caption: 'Coveñas Diving'	}
		]; 
		
		return (     
			<GalleryComponent list={gallery} />    
		);
	  }
}

render(<App/>, document.getElementById('pageheader'));
render(<Footer/>, document.getElementById('footer'));
render(<GalleryApp />, document.getElementById('gallery'));