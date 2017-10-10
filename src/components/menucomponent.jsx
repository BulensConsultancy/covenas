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
							<img src="assets/base/img/layout/logos/logo-5.png" alt="JANGO" className="c-desktop-logo" />
							<img src="assets/base/img/layout/logos/logo-5.png" alt="JANGO" className="c-desktop-logo-inverse" />
							<img src="assets/base/img/layout/logos/logo-5.png" alt="JANGO" className="c-mobile-logo" />
						</a>
					
						<button className="c-hor-nav-toggler" type="button" data-target=".c-mega-menu">
							<span className="c-line"></span>
							<span className="c-line"></span>
							<span className="c-line"></span>
						</button>																				
				</div>				
				
				<nav className="c-mega-menu c-pull-right c-mega-menu-dark c-mega-menu-dark-mobile c-fonts-uppercase c-fonts-bold">
				<ul className="nav navbar-nav c-theme-nav"> 
					<li className="c-active">
						<a href="index.html" className="c-link dropdown-toggle">Home</a>														
					</li>
					<li>
						<a href="environment.html" className="c-link dropdown-toggle">Environment</a>					
					</li>
					<li>
						<a href="about.html" className="c-link dropdown-toggle">About Us</a>													
					</li>
					<li>
						<a href="courses.html" className="c-link dropdown-toggle">Courses</a>													
					</li>
					<li>
						<a href="gallery.html" className="c-link dropdown-toggle">Gallery</a>
					</li>	
					<li>
						<a href="contact.html" className="c-link dropdown-toggle">Contact</a>
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

export default MenuComponent;