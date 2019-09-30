console.log('Script Loaded');
let unitedStatesCenter = [39.8283, -98.5795];
let zoomLevel = 4;

let usMap = L.map("bridges-map").setView(unitedStatesCenter, zoomLevel);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiY211c2ljMjIiLCJhIjoiY2sweThnYWJhMGRkMzNjbWlnamt1OWZ2bSJ9.vRXisZtBmgcftSToYLKudg'
}).addTo(usMap)


let bridges = [
	{bridgeName: 'Verrazano-Narrows Bridge', 
	 cityState: 'New York, NY',
	 span: '1298.4',
	 lat: 40.6066,
	 long: -74.0447},
	{bridgeName: 'Golden Gate Bridge',
	 cityState: 'San Franscisco & Marin, CA',
	 span: '1290.2',
	 lat: 37.8199,
	 long: -122.4783},
	{bridgeName: 'Mackinac Dridge',
	 cityState: 'Mackinaw & St. Ignace, MI',
	 span: '1158.0',
	 lat: 45.8174, 
	 long: -84.7278},
	{bridgeName: 'George Washinton Bridge',
	 cityState: 'New York & New Jersey, NY',
	 span: '1067.0',
	 lat: 40.8517, 
	 long: -73.9527},
	{bridgeName: 'Tacoma Narrows Bridge',
	 cityState: 'Tacoma & Kitsap, WA',
	 span: '853.44',
	 lat: 47.2690, 
	 long: -122.5517} 
]
console.log('bridge array objects loaded')
//creates bridge markers with names and spans displaed
bridges.forEach(function(bridge){
  	let latLong = [bridge.lat, bridge.long]
	console.log('bridge location extracted ' + latLong)
	let bridgeMarker = L.marker(latLong).bindPopup('Bridg Name: ' + bridge.bridgeName + '<br> Span: ' + bridge.span + 'm').addTo(usMap)
	console.log('bridge marker added')
  })
module.exports = bridges