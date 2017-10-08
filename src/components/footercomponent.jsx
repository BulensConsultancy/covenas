import React from 'react';

class FooterComponent extends React.Component {

constructor(props) {
super(props);
}

render() {
return (
	<div>
		<div class="c-prefooter">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="c-container c-first">
						<div class="c-content-title-1">
							<h3 class="c-font-uppercase c-font-bold c-font-white"><span class="c-theme-font">Coveñas</span> Diving</h3>
							<div class="c-line-left hide"></div>
							<p class="c-text">
							The best PADI Dive Center in town!</p>
						</div>
						<ul class="c-links">
							<li><a href="index.html">Home</a></li>
							<li><a href="about.html">About</a></li>
							<li><a href="environment.html">Environment</a></li>
							<li><a href="courses.html">Courses</a></li>
							<li><a href="gallery.html">Gallery</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</div>
				</div>
						
				<div class="col-md-6">
					<div class="c-container c-last">
						<div class="c-content-title-1">
							<h3 class="c-font-uppercase c-font-bold c-font-white">Find us</h3>
							<div class="c-line-left hide"></div>
							<p>You can reach us through phone, mail and social media.</p>
						</div>
						<ul class="c-socials">
							<li><a href="https://www.facebook.com/Covenasdivingco/"><i class="fa fa-facebook"></i></a></li>							
							<li><a href="#"><i class="fa fa-youtube"></i></a></li>
							<li><a href="https://www.instagram.com/covenasdivingco"><i class="fa fa-instagram"></i></a></li>
						</ul>
						<ul class="c-address">
							<li><i class="icon-pointer c-theme-font"></i> Calle 4 # 3-85 apartamento 203, Coveñas, Sucre, Colombia</li>
							<li><i class="icon-call-end c-theme-font"></i> +1800 1234 5678</li>
							<li><i class="icon-envelope c-theme-font"></i> info@covenasdivingco.com</li>
						</ul>
					</div>
				</div>
			</div>		
		</div>
	</div>
	<div class="c-postfooter">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-sm-12 c-col">
					<div class="col-md-6 col-sm-6">
					<p class="c-copyright c-font-oswald c-font-14">
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