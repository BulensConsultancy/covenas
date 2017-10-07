import React from 'react';

class MenuComponent extends React.Component {

constructor(props) {
super(props);
}

render() {
return (
	<header class="c-layout-header c-layout-header-4 c-layout-header-default-mobile" data-minimize-offset="80">		
		<div class="c-navbar">
			<div class="container">			
				<div class="c-navbar-wrapper clearfix">
					<div class="c-brand c-pull-left">
						<a href="index.html" class="c-logo">
							<img src="assets/base/img/layout/logos/logo-5.png" alt="JANGO" class="c-desktop-logo" />
							<img src="assets/base/img/layout/logos/logo-5.png" alt="JANGO" class="c-desktop-logo-inverse" />
							<img src="assets/base/img/layout/logos/logo-5.png" alt="JANGO" class="c-mobile-logo" />
						</a>
					
						<button class="c-hor-nav-toggler" type="button" data-target=".c-mega-menu">
							<span class="c-line"></span>
							<span class="c-line"></span>
							<span class="c-line"></span>
						</button>																				
				</div>				
				
				<nav class="c-mega-menu c-pull-right c-mega-menu-dark c-mega-menu-dark-mobile c-fonts-uppercase c-fonts-bold">
				<ul class="nav navbar-nav c-theme-nav"> 
					<li class="c-active">
						<a href="index.html" class="c-link dropdown-toggle">Home<span class="c-arrow c-toggler"></span></a>														
					</li>
					<li class="c-menu-type-classic">
						<a href="environment.html" class="c-link dropdown-toggle">Environment<span class="c-arrow c-toggler"></span></a>
					
					</li>
					<li >
						<a href="about.html" class="c-link dropdown-toggle">About Us<span class="c-arrow c-toggler"></span></a>													
					</li>
					<li >
						<a href="courses.html" class="c-link dropdown-toggle">Courses<span class="c-arrow c-toggler"></span></a>													
					</li>
					<li >
						<a href="gallery.html" class="c-link dropdown-toggle">Gallery<span class="c-arrow c-toggler"></span></a>
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