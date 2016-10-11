function googleMap() {
  // Targeting Map Div
  var mapCanvas = document.getElementById('myMap');

  // Map Region Latitude and Longitude 
  var latLng = new google.maps.LatLng(19.565592, -99.243631); 

// Map General Options
var mapOptions = {    
  center: latLng,
  zoom: 16,      
  mapTypeId: google.maps.MapTypeId.ROADMAP,    
  backgroundColor:"#2C2C2C",
  disableDefaultUI:true
}

  // Creating the Custom Google Map
  var map = new google.maps.Map(mapCanvas, mapOptions);

 // Custom Marker
var image = 'img/pointer.png';
var positionMarker = new google.maps.Marker({
    position:latLng,
    map: map,
    icon: image
});

// Map Background and Font Color
map.set('styles', [
{
  "featureType": "landscape",
  "elementType": "geometry.fill",
  "stylers": [
    { "color": "#182a46" }
  ]
},{
  "featureType": "poi",
  "elementType": "geometry.fill",
  "stylers": [
    { "color": "#223e67" }
  ]
},{
  "featureType": "poi",
  "elementType": "geometry.stroke",
  "stylers": [
    { "color": "#343434" }
  ]
},{
  "featureType": "transit",
  "elementType": "geometry.fill",
  "stylers": [
    { "color": "#223e67" }
  ]
},{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [
    { "color": "#0a1a28" }
  ]
},{
  "elementType": "labels.text.fill",
  "stylers": [
    { "color": "#9e9e9e" }
  ]
},{
  "elementType": "labels.text.stroke",
  "stylers": [
    { "color": "#1e1e1e" }
  ]
}
]);
}
google.maps.event.addDomListener(window, 'load', googleMap);
