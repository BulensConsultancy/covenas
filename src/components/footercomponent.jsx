import React from 'react';

class FooterComponent extends React.Component {

constructor(props) {
super(props);
}

render() {
return (
	<div>
		<div className="c-prefooter">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="c-container c-first">
						<div className="c-content-title-1">
							<h3 className="c-font-uppercase c-font-bold c-font-white"><span className="c-theme-font">Coveñas</span> Diving</h3>
							<div className="c-line-left hide"></div>
							<p className="c-text">
							The best PADI Dive Center in town!</p>
						</div>
						<ul className="c-links">
							<li><a href="index.html">Home</a></li>
							<li><a href="about.html">About</a></li>
							<li><a href="environment.html">Environment</a></li>
							<li><a href="courses.html">Courses</a></li>
							<li><a href="gallery.html">Gallery</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</div>
				</div>
						
				<div className="col-md-6">
					<div className="c-container c-last">
						<div className="c-content-title-1">
							<h3 className="c-font-uppercase c-font-bold c-font-white">Find us</h3>
							<div className="c-line-left hide"></div>
							<p>You can reach us through phone, mail and social media.</p>
						</div>
						<ul className="c-socials">
							<li><a href="https://www.facebook.com/Covenasdivingco/"><i className="fa fa-facebook"></i></a></li>							
							<li><a href="#"><i className="fa fa-youtube"></i></a></li>
							<li><a href="https://www.instagram.com/covenasdivingco"><i className="fa fa-instagram"></i></a></li>
						</ul>
						<ul className="c-address">
							<li><i className="icon-pointer c-theme-font"></i> Calle 4 # 3-85 apartamento 203, Coveñas, Sucre, Colombia</li>
							<li><i className="icon-call-end c-theme-font"></i> +1800 1234 5678</li>
							<li><i className="icon-envelope c-theme-font"></i> info@covenasdivingco.com</li>
						</ul>
					</div>
				</div>
			</div>		
		</div>
	</div>
	<div className="c-postfooter">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-sm-12 c-col">
					<div className="col-md-6 col-sm-6">
					<p className="c-copyright c-font-oswald c-font-14">
					2017 &copy; Coveñas Diving Co.
					</p>
				</div>
				</div>
			</div>
		</div>
	</div>	
</div>	
	);
}
}

export default FooterComponent;