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
								<a href="/" className="c-logo">
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
								 <MenuItem isActivePage={this.props.activePage == ""} url="index" text="Home" />
								 <MenuItem isActivePage={this.props.activePage == "environment"} url="environment" text="Environment" />
								 <MenuItem isActivePage={this.props.activePage == "about"} url="about" text="About Us" />
								 <MenuItem isActivePage={this.props.activePage == "courses"} url="courses" text="Courses" />
								 <MenuItem isActivePage={this.props.activePage == "gallery"} url="gallery" text="Gallery" />
								 <MenuItem isActivePage={this.props.activePage == "contact"} url="contact" text="Contact" />
								
								 <li className="c-menu-type-classic">
									<a href="javascript:;" className="c-link dropdown-toggle">Language<span className="c-arrow c-toggler"></span></a>							
									<ul className="dropdown-menu c-menu-type-classic c-pull-left">										
										<li><a id="lngSpanish"><img src="assets/img/flags/Spain.png" /> <span data-localize="languages.spanish"></span></a></li>									
										<li><a id="lngEnglish"><img src="assets/img/flags/UK.png" /> <span data-localize="languages.english"></span></a></li>									
										<li><a id="lngPortugese"><img src="assets/img/flags/Brazil.png" /> <span data-localize="languages.portugese"></span></a></li>
										<li><a id="lngFrench"><img src="assets/img/flags/France.png" /> <span data-localize="languages.french"></span></a></li>
										<li><a id="lngDutch"><img src="assets/img/flags/Netherlands.png" /> <span data-localize="languages.dutch"></span></a></li>
										<li><a id="lngDutch"><img src="assets/img/flags/Germany.png" /> <span data-localize="languages.german"></span></a></li>
									</ul>																					
								 </li>
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