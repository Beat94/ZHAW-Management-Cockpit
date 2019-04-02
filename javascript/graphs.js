google.charts.load("current", {packages:["corechart"]});
google.charts.load("current", {packages:["bar"]});
google.charts.load("current", {packages:["table"]});


google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
 google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawTable1);



function drawChart1() {
	var data = google.visualization.arrayToDataTable([
		['Auto-Marken', 'Hours per Day'],
		['BMW',     20],
		['Opel',    15],
		['Mercedes',35],
		['Andere',  30]
	]);

	var options = {
		title: 'Absatzzahlen',
		pieHole: 0.5,
	};

	var chart = new google.visualization.PieChart(document.getElementById('Absatzzahlen'));
	chart.draw(data, options);
}


function drawChart2(){
	var data = google.visualization.arrayToDataTable([
		['Wartezeit | Fahrzeugbau', 'Fahrzeugbau', 'Wartezeit' ],
		['2010', 3, 30]
	]);

	var options = {
		width: 400,
		height: 200,
		legend: { position: 'top', maxLines: 3 },
		bars: 'horizontal',
		isStacked:true,
	};

	var chart = new google.charts.Bar(document.getElementById('Produktion'));
	chart.draw(data, options);
}


function drawTable1() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Land');
	data.addColumn('string', 'Bundesland');
	data.addColumn('number', 'Verkaufte Fahrzeuge');
	data.addRows([
		['Deutschland',  'Baden-Württemberg', 15000],
		['Deutschland',  'Bayern', 14050],
		['Deutschland',  'Berlin', 6754],
		['Deutschland',  'Brandenburg', 26489],
		['Deutschland',  'Bremen', 21489],
		['Deutschland',  'Hamburg', 58964],
		['Deutschland',  'Mecklenburg-Vorpommern', 14050],
	]);

	var table = new google.visualization.Table(document.getElementById('Abzatzzahlen_Tbl'));
	table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}

function drawChart3(){
	var data2 = google.visualization.arrayToDataTable([
		['Book-to-Bill', ''],
		['Jan 18', 0.9],
		['Feb 18', 0.95],
		['Mar 18', 1.1],
		['Apr 18', 0.98],
		['Mai 18', 0.75],
		['Jun 18', 1.2],
		['Jul 18', 1.4],
		['Aug 18', 0.8],
		['Sep 18', 0.85],
		['Okt 18', 0.79],
		['Nov 18', 1.12],
		['Dez 18', 0.6],
		['Jan 19', 0.65],
		['Feb 19', 0.98],
	]);
	
	var data = google.visualization.arrayToDataTable([
		['Jan 18', 1, 1, 0.9, 0.9],
		['Feb 18', 1, 1, 0.95, 0.95],
		['Mar 18', 1, 1, 1.1, 1.1],
		['Apr 18', 1, 1, 0.98, 0.98],
		['Mai 18', 1, 1, 0.75, 0.75],
		['Jun 18', 1, 1, 1.2, 1.2],
		['Jul 18', 1, 1, 1.4, 1.4],
		['Aug 18', 1, 1, 0.8, 0.8],
		['Sep 18', 1, 1, 0.85, 0.85],
		['Okt 18', 1, 1, 1.12, 1.12],
		['Nov 18', 1, 1, 0.98, 0.98],
		['Dez 18', 1, 1, 0.6, 0.6],
		['Jan 19', 1, 1, 0.65, 0.65],
		['Feb 19', 1, 1, 0.98, 0.98],
		// Treat the first row as data.
	], true);

	var options = {
		legend: 'none',
		bar: { groupWidth: '95%' }, // Define space between bars.
		candlestick: {
		fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
		risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
		}
	};

	var chart = new google.visualization.CandlestickChart(document.getElementById('BookBill'));
	chart.draw(data, options);

}

