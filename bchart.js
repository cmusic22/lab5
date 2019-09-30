// Get chart canvas and contex
let chartCanvas = document.querySelector('#bridge-bar-chart');
let contex = chartCanvas.getContext('2d');

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

let barColors = [ '#fff', '#e70001', '#ffe000', '#008542', '#b5651d'];
console.log('color array created');

import { bridges } from './bridge-maps.js'

//loops through and creates object
bridges.forEach(function(bridgeData){
	let name = bridgeData.bridgeName;
	let span = bridgeData.span;
	console.log('recived bridge data');

	spanChart.data.labels.push(name);
	spanChart.data.datasets[0].data.push(span);

	let colorCount = spanChart.data.datasets[0].backgroundColor.length

	spanChart.update();

})