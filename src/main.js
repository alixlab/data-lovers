let allDataBase = []
for (let i in INJURIES) {
  if (i >= 12) {
    let allDataValue = Object.values(INJURIES[i])
    const dataByYear = new Array();
    dataByYear.push(allDataValue[2]),
      dataByYear.push(allDataValue[13]),
      dataByYear.push(allDataValue[20]),
      dataByYear.push(allDataValue[23]),
      dataByYear.push(allDataValue[24])
    allDataBase.push(dataByYear)
  }
}
const allData = allDataBase.slice(0, 20)
console.log(allData)

//graficos da primeira pagina

google.charts.load('current', { 'packages': ['corechart'] });
function drawHomeChartBus() {

  let data = google.visualization.arrayToDataTable([
    ['Anos', ''],
    ['1996', allData[0][0] + allData[1][0] +
      allData[2][0] + allData[3][0] + allData[4][0]],
    [' ', allData[5][0] + allData[6][0] +
      allData[7][0] + allData[8][0] + allData[9][0]],
    [' ', allData[10][0] + allData[11][0] +
      allData[12][0] + allData[13][0] + allData[14][0]],
    ['2015', allData[15][0] + allData[16][0] +
      allData[17][0] + allData[18][0] + allData[19][0]],
  ]);

  let options = {
    title: 'Pessoas Envolvidas em Acidentes de Onibus',
    curveType: 'function',
    legend: 'none',
    width: 200,
    height: 200,
    backgroundColor: 'transparent'
  };

  var chart = new google.visualization.LineChart(document.getElementById('allDataBus'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawHomeChartBus);



google.charts.load('current', { 'packages': ['corechart'] });
function drawHomeChartMoto() {

  let data = google.visualization.arrayToDataTable([
    ['Anos', 'Aidentes por ano'],
    ['1996', allData[0][1] + allData[1][1] +
      allData[2][1] + allData[3][1] + allData[4][1]],
    [' ', allData[5][0] + allData[6][1] +
      allData[7][1] + allData[8][1] + allData[9][1]],
    [' ', allData[10][1] + allData[11][1] +
      allData[12][1] + allData[13][1] + allData[14][1]],
    ['2015', allData[15][1] + allData[16][1] +
      allData[17][1] + allData[18][1] + allData[19][1]],
  ]);

  let options = {
    title: 'Pessoas Envolvidas em Acidentes de Moto',
    curveType: 'function',
    legend: 'none',
    width: 200,
    height: 200,
    backgroundColor: 'transparent'
  };
  var chart = new google.visualization.LineChart(document.getElementById('allDataMoto'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawHomeChartMoto);



google.charts.load('current', { 'packages': ['corechart'] });
function drawHomeChartCar() {

  let data = google.visualization.arrayToDataTable([
    ['Anos', 'Aidentes por ano'],
    ['1996', allData[0][2] + allData[1][2] +
      allData[2][2] + allData[3][2] + allData[4][2]],
    [' ', allData[5][2] + allData[6][2] +
      allData[7][2] + allData[8][2] + allData[9][2]],
    [' ', allData[10][2] + allData[11][2] +
      allData[12][2] + allData[13][2] + allData[14][2]],
    ['2015', allData[15][2] + allData[16][2] +
      allData[17][2] + allData[18][2] + allData[19][2]],
  ]);

  let options = {
    title: 'Pessoas Envolvidas em Acidentes de Carro',
    curveType: 'function',
    legend: 'none',
    width: 200,
    height: 200,
    backgroundColor: 'transparent'
  };

  var chart = new google.visualization.LineChart(document.getElementById('allDataCar'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawHomeChartCar);



google.charts.load('current', { 'packages': ['corechart'] });
function drawHomeChartBike() {

  let data = google.visualization.arrayToDataTable([
    ['Anos', 'Aidentes por ano'],
    ['1996', allData[0][3] + allData[1][3] +
      allData[2][3] + allData[3][3] + allData[4][3]],
    [' ', allData[5][3] + allData[6][3] +
      allData[7][3] + allData[8][3] + allData[9][3]],
    [' ', allData[10][3] + allData[11][3] +
      allData[12][3] + allData[13][3] + allData[14][3]],
    ['2015', allData[15][3] + allData[16][3] +
      allData[17][3] + allData[18][3] + allData[19][3]],
  ]);

  let options = {
    title: 'Pessoas Envolvidas em Acidentes de Bicicleta',
    curveType: 'function',
    legend: 'none',
    width: 200,
    height: 200,
    backgroundColor: 'transparent'
  };

  var chart = new google.visualization.LineChart(document.getElementById('allDataBike'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawHomeChartBike);



google.charts.load('current', { 'packages': ['corechart'] });
function drawHomeChartPedestrian() {

  let data = google.visualization.arrayToDataTable([
    ['Anos', 'Aidentes por ano'],
    ['1996', allData[0][4] + allData[1][4] +
      allData[2][4] + allData[3][4] + allData[4][4]],
    [' ', allData[5][4] + allData[6][4] +
      allData[7][4] + allData[8][4] + allData[9][4]],
    [' ', allData[10][4] + allData[11][4] +
      allData[12][4] + allData[13][4] + allData[14][4]],
    ['2015', allData[15][4] + allData[16][4] +
      allData[17][4] + allData[18][4] + allData[19][4]],
  ]);

  let options = {
    title: 'Pessoas Envolvidas em Acidentes como Pedestres',
    curveType: 'function',
    legend: 'none',
    width: 200,
    height: 200,
    backgroundColor: 'transparent'
  };
  var chart = new google.visualization.LineChart(document.getElementById('allDataPedestrian'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawHomeChartPedestrian);

console.log(allData[0])
// filtro especifio de 1996
google.charts.load('current', {'packages':['corechart']});

function draw96Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[0][0]],
    ['Moto', allData[0][1]],
    ['Carro', allData[0][2]],
    ['Bicicleta', allData[0][3]],
    ['Pedestre', allData[0][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 1996',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes96'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw96Chart);


function draw97Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[1][0]],
    ['Moto', allData[1][1]],
    ['Carro', allData[1][2]],
    ['Bicicleta', allData[1][3]],
    ['Pedestre', allData[1][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 1997',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes97'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw97Chart);

function draw98Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[2][0]],
    ['Moto', allData[2][1]],
    ['Carro', allData[2][2]],
    ['Bicicleta', allData[2][3]],
    ['Pedestre', allData[2][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 1998',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes98'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw98Chart);

function draw99Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[3][0]],
    ['Moto', allData[3][1]],
    ['Carro', allData[3][2]],
    ['Bicicleta', allData[3][3]],
    ['Pedestre', allData[3][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 1999',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes99'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw99Chart);

function draw00Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[4][0]],
    ['Moto', allData[4][1]],
    ['Carro', allData[4][2]],
    ['Bicicleta', allData[4][3]],
    ['Pedestre', allData[4][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2000',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes00'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw00Chart);

function draw01Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[5][0]],
    ['Moto', allData[5][1]],
    ['Carro', allData[5][2]],
    ['Bicicleta', allData[5][3]],
    ['Pedestre', allData[5][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2001',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes01'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw01Chart);

function draw02Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[6][0]],
    ['Moto', allData[6][1]],
    ['Carro', allData[6][2]],
    ['Bicicleta', allData[6][3]],
    ['Pedestre', allData[6][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2002',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes02'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw02Chart);

function draw03Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[7][0]],
    ['Moto', allData[7][1]],
    ['Carro', allData[7][2]],
    ['Bicicleta', allData[7][3]],
    ['Pedestre', allData[7][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2003',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes03'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw03Chart);

function draw04Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[8][0]],
    ['Moto', allData[8][1]],
    ['Carro', allData[8][2]],
    ['Bicicleta', allData[8][3]],
    ['Pedestre', allData[8][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2004',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes04'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw04Chart);

function draw05Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[9][0]],
    ['Moto', allData[9][1]],
    ['Carro', allData[9][2]],
    ['Bicicleta', allData[9][3]],
    ['Pedestre', allData[9][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2005',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes05'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw05Chart);

function draw06Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[10][0]],
    ['Moto', allData[10][1]],
    ['Carro', allData[10][2]],
    ['Bicicleta', allData[10][3]],
    ['Pedestre', allData[10][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2006',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes06'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw06Chart);

function draw07Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[11][0]],
    ['Moto', allData[11][1]],
    ['Carro', allData[11][2]],
    ['Bicicleta', allData[11][3]],
    ['Pedestre', allData[11][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2007',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes07'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw07Chart);

function draw08Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[12][0]],
    ['Moto', allData[12][1]],
    ['Carro', allData[12][2]],
    ['Bicicleta', allData[12][3]],
    ['Pedestre', allData[12][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2008',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes08'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw08Chart);

function draw09Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[13][0]],
    ['Moto', allData[13][1]],
    ['Carro', allData[13][2]],
    ['Bicicleta', allData[13][3]],
    ['Pedestre', allData[13][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2009',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes09'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw09Chart);

function draw10Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[14][0]],
    ['Moto', allData[14][1]],
    ['Carro', allData[14][2]],
    ['Bicicleta', allData[14][3]],
    ['Pedestre', allData[14][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2010',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes10'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw10Chart);

function draw11Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[15][0]],
    ['Moto', allData[15][1]],
    ['Carro', allData[15][2]],
    ['Bicicleta', allData[15][3]],
    ['Pedestre', allData[15][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2011',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes11'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw11Chart);

function draw12Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[16][0]],
    ['Moto', allData[16][1]],
    ['Carro', allData[16][2]],
    ['Bicicleta', allData[16][3]],
    ['Pedestre', allData[16][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2012',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes12'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw12Chart);

function draw13Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[17][0]],
    ['Moto', allData[17][1]],
    ['Carro', allData[17][2]],
    ['Bicicleta', allData[17][3]],
    ['Pedestre', allData[17][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2013',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes13'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw13Chart);

function draw14Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[18][0]],
    ['Moto', allData[18][1]],
    ['Carro', allData[18][2]],
    ['Bicicleta', allData[18][3]],
    ['Pedestre', allData[18][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2014',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes14'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw14Chart);

function draw15Chart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo de transporte', 'Pessoas Feridas'],
    ['Onibus', allData[19][0]],
    ['Moto', allData[19][1]],
    ['Carro', allData[19][2]],
    ['Bicicleta', allData[19][3]],
    ['Pedestre', allData[19][4]]
  ]);

  var options = {
    title: 'Acidentes de Transito em 2015',
    backgroundColor: 'transparent',
    is3D: true,
    legend: 'labeled',
    width: 400,
    height: 200,
  };

  var chart = new google.visualization.PieChart(document.getElementById('allTypes15'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw15Chart);







console.log('Ao vivo direto de Dubai - BILLY, Willie')