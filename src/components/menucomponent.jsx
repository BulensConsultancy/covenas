import React from 'react';

class MenuComponent extends React.Component {
	constructor(props) {
	super(props);
	}

	render() {		
		return (
			<header className="c-layout-header c-layout-header-4 c-layout-header-default-mobile" data-minimize-offset="80">		
				<div className="c-navbar">
					<div className="container">			
						<div className="c-navbar-wrapper clearfix">
							<div className="c-brand c-pull-left">
								<a href="index.html" className="c-logo">
									<img src="assets/img/layout/logos/logo-5.png" alt="Coveñas Diving" className="c-desktop-logo" />
									<img src="assets/img/layout/logos/logo-5.png" alt="Coveñas Diving" className="c-desktop-logo-inverse" />
									<img src="assets/img/layout/logos/logo-5.png" alt="Coveñas Diving" className="c-mobile-logo" />
								</a>
							
								<button className="c-hor-nav-toggler" type="button" data-target=".c-mega-menu">
									<span className="c-line"></span>
									<span className="c-line"></span>
									<span className="c-line"></span>
								</button>																				
						</div>								
						<nav className="c-mega-menu c-pull-right c-mega-menu-dark c-mega-menu-dark-mobile c-fonts-uppercase c-fonts-bold">
							<ul className="nav navbar-nav c-theme-nav"> 	
								 <MenuItem isActivePage={this.props.activePage == "index"} url="index.html" text="Home" />
								 <MenuItem isActivePage={this.props.activePage == "environment"} url="environment.html" text="Environment" />
								 <MenuItem isActivePage={this.props.activePage == "about"} url="about.html" text="About Us" />
								 <MenuItem isActivePage={this.props.activePage == "courses"} url="courses.html" text="Courses" />
								 <MenuItem isActivePage={this.props.activePage == "gallery"} url="gallery.html" text="Gallery" />
								 <MenuItem isActivePage={this.props.activePage == "contact"} url="contact.html" text="Contact" />												
							</ul>
						</nav>											
						</div>				
					</div>
				</div>
			</header>
			
		);
	}
}

function MenuItem(props) {
if (props.isActivePage) {
	return (
		<li className="c-active">
			<a href={props.url} className="c-link dropdown-toggle">{props.text}</a>														
		</li>
	)
}
else {
	return (	
		<li>
			<a href={props.url} className="c-link dropdown-toggle">{props.text}</a>														
		</li>
	  );
	} 
}

export default MenuComponent;