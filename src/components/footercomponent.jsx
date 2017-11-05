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
										<p className="c-text" data-localize="footer.slogan"></p>
									</div>
									<ul className="c-links">
										<li><a href="http://www.covenasdivingco.com" data-localize="nav.home"></a></li>
										<li><a href="about" data-localize="nav.about"></a></li>
										<li><a href="environment" data-localize="nav.environment"></a></li>
										<li><a href="courses" data-localize="nav.courses"></a></li>
										<li><a href="gallery" data-localize="nav.gallery"></a></li>
										<li><a href="contact" data-localize="nav.contact"></a></li>
									</ul>
								</div>
							</div>
									
							<div className="col-md-6">
								<div className="c-container c-last">
									<div className="c-content-title-1">
										<h3 className="c-font-uppercase c-font-bold c-font-white" data-localize="footer.findus"></h3>
										<div className="c-line-left hide"></div>
										<p data-localize="footer.contact"></p>
									</div>
									<ul className="c-socials">
										<li><a href="https://www.facebook.com/Covenasdivingco/" target="_blank"><i className="fa fa-facebook"></i></a></li>							
										<li><a href="https://www.youtube.com/channel/UCrR50DUYpghgRUn8bopKUHA" target="_blank"><i className="fa fa-youtube"></i></a></li>
										<li><a href="https://www.instagram.com/covenasdivingco" target="_blank"><i className="fa fa-instagram"></i></a></li>
									</ul>
									<ul className="c-address">
										<li><i className="icon-pointer c-theme-font"></i> Calle 4 # 3-85 apartamento 203, Coveñas, Sucre, Colombia</li>
										<li><i className="icon-call-end c-theme-font"></i> (+57) 3205146585</li>
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

function FooterLink(props) {
	if (props.isActivePage) {
		return (
			<li className="c-active">
				<a href={props.url} className="c-link dropdown-toggle" data-localize={props.localize}></a>														
			</li>
		)
	}
	else {		
		return (	
			<li>
				<a href={props.url} className="c-link dropdown-toggle" data-localize={props.localize}></a>														
			</li>
		  );
	} 
}

export default FooterComponent;