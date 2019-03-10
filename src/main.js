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


// document.getElementById('year96').addEventListener('click', function(){
//   window.open("src\year96.html", "_self")
// })

console.log('Ao vivo direto de Dubai - BILLY, Willie')