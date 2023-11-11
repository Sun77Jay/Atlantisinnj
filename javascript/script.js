//code for the coordination of the map location
  const map = L.map('map').setView([39.945880, //latitude
      -75.131000], //longitude
      13);    //zoom

      L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            attribution: 'Copyright Google Maps'
            }).addTo(map);

var marker = L.marker([39.945880, -75.131000]).addTo(map);

var popup = L.popup()
.setLatLng([39.961966, -75.103257])
.setContent("Come Visit.")
.openOn(map);

marker.bindPopup("Come Visit.").openPopup();

function onMapClick(e) {
alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

