import React from 'react'
import About from "./about.jsx"
import Contact from "./contact.jsx"
import Gallery from "./gallery-2.jsx" 
import Courses from "./courses.jsx" 
import Environment from "./environment.jsx"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const CovenasRouter = () => (
	<Router>
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
							<li className="c-active">
								<Link to="/" className="c-link dropdown-toggle">Home</Link>														
							</li>
							<li>
								<Link to="/environment" className="c-link dropdown-toggle">Environment</Link>					
							</li>
							<li>
								<Link to="/about" className="c-link dropdown-toggle">About Us</Link>													
							</li>
							<li>
								<Link to="/courses" className="c-link dropdown-toggle">Courses</Link>													
							</li>
							<li>
								<Link to="/gallery" className="c-link dropdown-toggle">Gallery</Link>
							</li>	
							<li>
								<Link to="/contact" className="c-link dropdown-toggle">Contact</Link>
							</li>						
						</ul>
					</nav>											
					</div>				
				</div>
			</div>
			<Route exact path="/" component={Home}/>
			<Route path="/environment" component={Environment}/>
			<Route path="/about" component={About}/>
			<Route path="/courses" component={Courses}/>
			<Route path="/gallery" component={Gallery}/>
			<Route path="/contact" component={Contact}/>	
		</header>		
	</Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)







export default CovenasRouter