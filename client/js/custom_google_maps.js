var myCenter=new google.maps.LatLng(33.994611,-118.480277);


function initialize() {
	var mapProp = {
		center:myCenter,
		zoom:12,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	var marker=new google.maps.Marker({
		position:myCenter,
	});
	marker.setMap(map);
}


function loadScript() {
  	var script = document.createElement("script");
  	script.src = "http://maps.googleapis.com/maps/api/js?callback=initialize";
  	document.body.appendChild(script);
}


google.maps.event.addDomListener(window, 'load', initialize);