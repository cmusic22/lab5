// Get chart canvas and contex
let chartCanvas = document.querySelector('#bridge-bar-chart');
let contex = chartCanvas.getContext('2d');

//copied bridge array from bridge-maps.js to make the page work
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
//creates chart object
let spanChart = new Chart(contex,{
	type: 'bar',
	data: {
		labels: [],
			datasets: [
				{
					label: "Span (meters)",
					backgroundColor: [],
					data: []
				}
			]
	}
})

let barColors = [ 'black', 'lightgreen', 'yellow', 'tomato', 'lightbrown'];
console.log('color array created');

/***Code I tried to use to get the bridges array objects from
the bridge-maps.js file***/
//let bridgeMaps = require('./bridge-maps')
//let bridgesArray = bridgeMaps.bridges

//loops through and creates object
bridges.forEach(function(bridgeData){
	let name = bridgeData.bridgeName;
	let span = bridgeData.span;
	console.log('recived bridge data');

	spanChart.data.labels.push(name);
	spanChart.data.datasets[0].data.push(span);

	let colorCount = spanChart.data.datasets[0].backgroundColor.length
	spanChart.data.datasets[0].backgroundColor.push(barColors[colorCount % barColors.length])

	spanChart.update();

})