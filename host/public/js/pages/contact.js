var PageContact = function() {
	var _init = function() {
		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 9.400951,
			lng: -75.679949,
			scrollwheel: false,
		});

		mapbg.addMarker({
			lat: 9.400951,
			lng: -75.679949,
			title: 'Coveñas Diving',

			infoWindow: {
				content: '<h3>Coveñas Diving Co.</h3><p>Coveñas sucre calle 4 # 3-85 apartamento 203</p>'
			}
		});
	}

    return {        
        init: function() {
            _init();
        }
    };
}();

$(document).ready(function() {
    PageContact.init();
    $(window).resize(function() {
		PageContact.init();
	});
});