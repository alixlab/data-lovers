let startSelect = document.getElementById("yearFilterBegin");
let start = parseInt(startSelect.options[startSelect.selectedIndex].value);
let endSelect = document.getElementById("yearFilterEnd");
let end = parseInt(endSelect.options[endSelect.selectedIndex].value);
let categorySelect = document.getElementById("category");
let category = categorySelect.options[categorySelect.selectedIndex].value;
let orderSelect = document.getElementById("orderList");
let order = orderSelect.options[orderSelect.selectedIndex].value;
let btnFilter = document.getElementById("btnSelect");
btnFilter.addEventListener("click", filterData);
let dataset = getData(start, end, category);
sortByYear(dataset, order);
tableCreate(dataset);

function getData(start, end, category) {
  const dict = {
    "Total_Injured_Persons_Pedestrians": "Pedestres",
    "Total_Injured_Persons_Pedalcyclists": "Ciclistas",
    "Total_Injured_Persons_Motorcyclists": "Motociclistas",
    "Total_Injured_Persons_Passenger_Car_Occupants": "Carros",
    "Total_Injured_Persons_Bus_Occupants": "Ônibus"
  }
  let dataset = [["Ano", dict[category]
  ]];
  for (obj of INJURIES) {
    let year = parseInt(obj["Year"].split("-")[0]);
    if (year >= start && year <= end) {
      let record = [];
      record.push(year);
      if (obj[category] !== null) {
        record.push(obj[category].toLocaleString("pt-BR"));
      } else {
        record.push("Não disponível");
      }
      dataset.push(record);
    }
  }
  return dataset
}

function tableCreate(dataset) {
  let body = document.getElementById("tables-div");
  let tbl = document.createElement('table');
  tbl.setAttribute("id", "table");
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  let tbdy = document.createElement('tbody');
  for (row of dataset) {
    let tr = document.createElement('tr');
    for (column of row) {
      let td = document.createElement('td');
      td.appendChild(document.createTextNode(column))
      tr.appendChild(td)
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}

function filterData() {
  removeTable();
  let startSelect = document.getElementById("yearFilterBegin");
  let start = parseInt(startSelect.options[startSelect.selectedIndex].value);
  let endSelect = document.getElementById("yearFilterEnd");
  let end = parseInt(endSelect.options[endSelect.selectedIndex].value);
  let categorySelect = document.getElementById("category");
  let category = categorySelect.options[categorySelect.selectedIndex].value;
  let orderSelect = document.getElementById("orderList");
  let order = orderSelect.options[orderSelect.selectedIndex].value;
  let dataset = getData(start, end, category);
  sortByYear(dataset, order);
  tableCreate(dataset);
}

function removeTable() {
  let table = document.getElementById("table");
  table.parentNode.removeChild(table);
}

function sortByYear(dataset, order) {
  dataset.sort(function (a, b) {
    if (order === "asc") {
      return a[0] - b[0];
    } else {
      return b[0] - a[0];
    }
  });
}

let allDataBase = []
for(let i in INJURIES){
  if(i>=12){
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

const allData = allDataBase.slice(0,20)
console.log(allData)

const reducer = (accumulator, currentValue) => accumulator + currentValue;

google.charts.load('current', {'packages':['corechart']});

function drawHomeChartBus() {

  let data = google.visualization.arrayToDataTable([
    ['Anos', 'Acidentes por ano'],
    ['1996', allData[0][0]+allData[1][0]+
    allData[2][0]+allData[3][0]+allData[4][0]],
    [' ', allData[5][0]+allData[6][0]+
    allData[7][0]+allData[8][0]+allData[9][0]],
    [' ', allData[10][0]+allData[11][0]+
    allData[12][0]+allData[13][0]+allData[14][0]],
    ['2015', allData[15][0]+allData[16][0]+
    allData[17][0]+allData[18][0]+allData[19][0]],
  ]);

  let options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: 'none',
    width: 400,
    height: 400,
    backgroundColor: 'transparent'
  };

  var chart = new google.visualization.LineChart(document.getElementById('allDataBus'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawHomeChartBus);

google.charts.load('current', {'packages':['corechart']});
function drawHomeChartMoto() {

  let data = google.visualization.arrayToDataTable([
    ['Anos', 'Acidentes por ano'],
    ['1996', allData[0][1]+allData[1][1]+
    allData[2][1]+allData[3][1]+allData[4][1]],
    [' ', allData[5][0]+allData[6][1]+
    allData[7][1]+allData[8][1]+allData[9][1]],
    [' ', allData[10][1]+allData[11][1]+
    allData[12][1]+allData[13][1]+allData[14][1]],
    ['2015', allData[15][1]+allData[16][1]+
    allData[17][1]+allData[18][1]+allData[19][1]],
  ]);

  let options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: 'none',
    width: 400,
    height: 400,
    backgroundColor: 'transparent'
  };
  var chart = new google.visualization.LineChart(document.getElementById('allDataMoto'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawHomeChartMoto);

google.charts.load('current', {'packages':['corechart']});
function drawHomeChartCar() {

  let data = google.visualization.arrayToDataTable([
    ['Anos', 'Acidentes por ano'],
    ['1996', allData[0][2]+allData[1][2]+
    allData[2][2]+allData[3][2]+allData[4][2]],
    [' ', allData[5][2]+allData[6][2]+
    allData[7][2]+allData[8][2]+allData[9][2]],
    [' ', allData[10][2]+allData[11][2]+
    allData[12][2]+allData[13][2]+allData[14][2]],
    ['2015', allData[15][2]+allData[16][2]+
    allData[17][2]+allData[18][2]+allData[19][2]],
  ]);

  let options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: 'none',
    width: 400,
    height: 400,
    backgroundColor: 'transparent'
  };

  var chart = new google.visualization.LineChart(document.getElementById('allDataCar'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawHomeChartCar);

google.charts.load('current', {'packages':['corechart']});
function drawHomeChartBike() {

  let data = google.visualization.arrayToDataTable([
    ['Anos', 'Acidentes por ano'],
    ['1996', allData[0][3]+allData[1][3]+
    allData[2][3]+allData[3][3]+allData[4][3]],
    [' ', allData[5][3]+allData[6][3]+
    allData[7][3]+allData[8][3]+allData[9][3]],
    [' ', allData[10][3]+allData[11][3]+
    allData[12][3]+allData[13][3]+allData[14][3]],
    ['2015', allData[15][3]+allData[16][3]+
    allData[17][3]+allData[18][3]+allData[19][3]],
  ]);

  let options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: 'none',
    width: 400,
    height: 400,
    backgroundColor: 'transparent'
  };

  var chart = new google.visualization.LineChart(document.getElementById('allDataBike'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawHomeChartBike);

google.charts.load('current', {'packages':['corechart']});
function drawHomeChartPedestrian() {

  let data = google.visualization.arrayToDataTable([
    ['Anos', 'Acidentes por ano'],
    ['1996', allData[0][4]+allData[1][4]+
    allData[2][4]+allData[3][4]+allData[4][4]],
    [' ', allData[5][4]+allData[6][4]+
    allData[7][4]+allData[8][4]+allData[9][4]],
    [' ', allData[10][4]+allData[11][4]+
    allData[12][4]+allData[13][4]+allData[14][4]],
    ['2015', allData[15][4]+allData[16][4]+
    allData[17][4]+allData[18][4]+allData[19][4]],
  ]);

  let options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: 'none',
    width: 400,
    height: 400,
    backgroundColor: 'transparent'
  };
  var chart = new google.visualization.LineChart(document.getElementById('allDataPedestrian'));

  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawHomeChartPedestrian);
