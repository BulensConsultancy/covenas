const aboutGallery ={
  backgroundImage: "url('src/assets/img/content/gallery/014.jpg')"
};

export default class About extends React.Component {
	render () {
		return ( 
			<div>
			<div className="c-layout-page">
			   <div className="c-content-box c-size-md c-bg-white">
				  <div className="container">
					 <div className="row">
						<div className="col-sm-12 wow animate fadeInUp">
						   <p>We are a PADI dive centre based in Coveñas, Colombia.
							  We are highly qualified professionals to offer you the best service, with the highest quality standards.
							  We will follow you during the whole adventure to make scuba diving the best experience in your life. 
							  With Dive you can start experiencing your first breaths underwater with the Discover Scuba Diving programme, and go on until reaching the leading levels.
						   </p>
						</div>
					 </div>
					 <div className="c-content-title-1 c-center c-margin-t-80">
						<h3 className="c-font-uppercase c-font-bold">Specialties</h3>
						<div className="c-line-center"></div>
					 </div>
					 <div className="row">
						<div className="col-sm-4 wow animate fadeInUp">
						   <ul className="c-content-list-1 c-theme c-separator-dot c-font-uppercase">
							  <li>AWARE Coral Reef Conservation</li>
							  <li>AWARE Shark Conservation</li>
							  <li>Altitude Instructor</li>
							  <li>Boat Instructor</li>
							  <li>Deep Instructor</li>
							  <li>Digital Underwater Photography Instructor</li>
							  <li>Diver Propulsion Vehicle Instructor</li>
						   </ul>
						</div>
						<div className="col-sm-4 wow animate fadeInUp" data-wow-delay="0.2s">
						   <ul className="c-content-list-1 c-theme c-separator-dot c-font-uppercase">
							  <li>?Drift Instructor</li>
							  <li>Dry Suit Instructor</li>
							  <li>Emergency Oxygen Provider Instructor</li>
							  <li>Enriched Air Instructor</li>
							  <li>Equipment Specialist Instructor</li>
							  <li>Fish Identification Instructor</li>
							  <li>Invasive Lionfish Tracker Instructor</li>
							  <li>Multilevel Diver Instructor</li>
						   </ul>
						</div>
						<div className="col-sm-4 wow animate fadeInUp" data-wow-delay="0.4s">
						   <ul className="c-content-list-1 c-theme c-separator-dot c-font-uppercase">
							  <li>Night Diver Instructor</li>
							  <li>Peak Performance Buoyancy Instructor</li>
							  <li>Project Aware Instructor</li>
							  <li>Search & Recovery Instructor</li>
							  <li>Sidemount Diver</li>
							  <li>Underwater Naturalist Instructor</li>
							  <li>Underwater Navigator Instructor</li>
							  <li>Underwater Videographer Instructor</li>
							  <li>Wreck Instructor</li>
						   </ul>
						</div>
					 </div>
				  </div>
			   </div>
			   <div className="c-content-box c-size-md c-bg-white">
				  <div className="container">
					 <div className="c-content-person-1-slider" data-slider="owl">
						<div className="c-content-title-1">
						   <h3 className="c-center c-font-uppercase c-font-bold">Meet The Team</h3>
						   <div className="c-line-center c-theme-bg"></div>
						</div>
						<div className="owl-carousel owl-theme c-theme c-owl-nav-center" data-rtl="false" data-items="2" data-slide-speed="8000">
						   <div className="item">
							  <div className="c-content-person-1">
								 <div className="c-caption c-content-overlay">
									<div className="c-overlay-wrapper">
									   <div className="c-overlay-content">                     
										  <a href="src/assets/img/content/team/person7.jpg" data-lightbox="fancybox" data-fancybox-group="gallery-1">
										  <i className="icon-magnifier"></i>
										  </a>
									   </div>
									</div>
									<img className="c-overlay-object img-responsive" src="src/assets/img/content/team/person7.jpg" alt="" />
								 </div>
								 <div className="c-body">
									<div className="c-head">
									   <div className="c-name c-font-uppercase c-font-bold">Guillermo Cámara</div>
									</div>
									<div className="c-position">
									   PADI Master Instructor
									</div>
									<p>
									   Experience of more than 10 years working in Spain, Greece, Brazil and Colombia. Issued more than 800 certifications.
									</p>
								 </div>
							  </div>
						   </div>
						   <div className="c-content-person-1">
							  <div className="c-caption c-content-overlay">
								 <div className="c-overlay-wrapper">
									<div className="c-overlay-content">
									   <a href="#"><i className="icon-link"></i></a>
									   <a href="src/assets/img/content/team/person1.jpg" data-lightbox="fancybox" data-fancybox-group="gallery-1">
									   <i className="icon-magnifier"></i>
									   </a>
									</div>
								 </div>
								 <img src="src/assets/img/content/team/person1.jpg" className="img-responsive c-overlay-object" alt="" />
							  </div>
							  <div className="c-body">
								 <div className="c-head">
									<div className="c-name c-font-uppercase c-font-bold">Phil Garner</div>
									<ul className="c-socials c-theme-ul">
									   <li><a href="#"><i className="icon-social-twitter"></i></a>
									   </li>
									   <li><a href="#"><i className="icon-social-facebook"></i></a>
									   </li>
									   <li><a href="#"><i className="icon-social-dribbble"></i></a>
									   </li>
									</ul>
								 </div>
								 <div className="c-position">
									CEO, Philly
								 </div>
								 <p>
									Lorem ipsum dolor sit amet, dolor adipisicing elit. Nulla nemo ad sapiente officia amet.
								 </p>
							  </div>
						   </div>
						</div>
					 </div>
				  </div>
			   </div>
			</div>
			<div className="c-content-box c-size-lg c-bg-parallax" style={aboutGallery}>
			   <div className="container">
				  <div className="c-content-testimonials-1" data-slider="owl">
					 <div className="c-content-title-1">
						<h3 className="c-center c-font-white c-font-uppercase c-font-bold">Let's See What Our Customers Say</h3>
						<div className="c-line-center c-theme-bg"></div>
					 </div>
					 <div className="owl-carousel owl-theme c-theme c-owl-nav-center" data-single-item="true" data-slide-speed="5000" data-rtl="false">
						<div className="item">
						   <div className="c-testimonial">
							  <p>
								 I did my Discover with Guille and cannot recommend him enough! Both during the study part and the practical part in the pool he was extremely professional and reassuring which made it easy for me to relax and just have fun. 
								 On top of that he’s a cool and genuine guy that will make sure you have a great experience. 
							  </p>
							  <p>
								 If you’re looking for a laidback, professional scuba instructor, Guille is your guy! 
							  </p>
							  <h3>
								 <span className="c-name c-theme"> Mariana</span>, Denmark
							  </h3>
						   </div>
						</div>
						<div className="item">
						   <div className="c-testimonial">
							  <p>
								 Fui a Colombia a realizar mi curso y certificación en Open Waters. Por recomendación me puse en contacto con Guillermo. 
								 Me dió mucha confianza y seguridad en la charla previa. 
								 Su buen humor y predisposición hicieron que esas jordanas sean increíbles.
							  </p>
							  <h3>
								 <span className="c-name c-theme"> Leo</span>, Argentina
							  </h3>
						   </div>
						</div>
						<div className="item">
						   <div className="c-testimonial">
							  <p>
								 Guillermo was the dive master for my open water course in Colombia and I cannot praise him enough. 
								 He has an innate ability to calm people around him and make you feel safe and supported. 
								 I almost quit during my practice sessions in the pool because the thought of removing my mask and reapplying it terrified me! 
							  </p>
							  <p>
								 Guillermo was patient, reassuring and encouraging and the single reason I persisted. 
								 Guillermo manages to balance professionalism and fun perfectly. 
								 His knowledge of diving and safety as well as his commitment to maintaining high standards with every course makes him the epitome of excellence. 
								 I cannot recommend him enough!
							  </p>
							  <h3>
								 <span className="c-name c-theme"> Apoorva</span>, Planet Earth
							  </h3>
						   </div>
						</div>
					 </div>
				  </div>
			   </div>
			</div>
			</div>
		)
	}
}