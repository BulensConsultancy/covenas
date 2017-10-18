import React from 'react';

class GalleryComponent extends React.Component {

	constructor(props) {
	super(props);
	}
	
	render() { 
		return this.props.list.map(function(object, i){
				return <GalleryPhoto key={i} photo={object} />	
		})
	}
}


					
const GalleryPhoto = ({photo}) => {
	return ( 
		<div className="cbp-item identity logos">
			<div className="cbp-item-wrapper">
				<a href={photo.url} className="cbp-caption cbp-lightbox" 
					data-title={photo.caption}>
					
					<div className="cbp-caption-defaultWrap">
						<img src={photo.url} alt="" />
					</div>
					<div className="cbp-caption-activeWrap">
						<div className="cbp-l-caption-alignLeft">
							<div className="cbp-l-caption-body">
								<div className="cbp-l-caption-title">{photo.caption}</div>								
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>						
	);
};	

export default GalleryComponent;