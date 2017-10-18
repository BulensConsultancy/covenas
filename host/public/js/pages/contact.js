// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 9.410315,
			lng: -75.706868,
			scrollwheel: false,
		});


		mapbg.addMarker({
			lat: 9.410315,
			lng: -75.706868,
			title: 'Coveñas Diving',

			infoWindow: {
				content: '<h3>Coveñas Diving Co.</h3><p>Coveñas sucre calle 4 # 3-85 apartamento 203</p>'
			}
		});
	}

    return {
        //main function to initiate the module
        init: function() {

            _init();

        }

    };
}();

$(document).ready(function() {
    PageContact.init();
    $( window ).resize(function() {
		PageContact.init();
	});
});