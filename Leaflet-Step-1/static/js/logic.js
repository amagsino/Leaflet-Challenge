var streets = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: apiKey
});

var map = L.map('map', {
    center: [
        40.7, -97.5
    ],
    zoom: 3
});

streets.addTo(map);

d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson', function (data) {
    
})