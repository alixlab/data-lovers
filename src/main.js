let btnFilter = document.getElementById("btnSelect");
btnFilter.addEventListener("click", filterData);
let dataset = getData(1996, 2015, 'Total_Injured_Persons_Pedestrians');
sortByYear(dataset, 'asc');
tableCreate(dataset);
medianText(dataset);

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
        record.push(obj[category]);
      } else {
        record.push(0);
      }
      dataset.push(record);
    }
  }
  return dataset
}

function tableCreate(dataset) {
  let body = document.getElementById("tables");
  let tbl = document.createElement('table');
  tbl.setAttribute("id", "table");
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  let tbdy = document.createElement('tbody');
  for (row of dataset) {
    let tr = document.createElement('tr');
    for (idx in row) {
      let td = document.createElement('td');
      td.appendChild(document.createTextNode(idx == 1 ? row[idx].toLocaleString("pt-BR") : row[idx]))
      tr.appendChild(td)
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}

function sortByYear(array, order) {
  let header = [array[0]];
  let data = array.slice(1)

  data.sort(function (a, b) {
    if (order === 'asc') {
      return a[0] > b[0] ? 1 : -1;
    } else {
      return a[0] < b[0] ? 1 : -1;
    }
  });
  return header.concat(data);
}

function filterData() {
  removeTable();
  removeMedian();
  let startSelect = document.getElementById("yearFilterBegin");
  let start = parseInt(startSelect.options[startSelect.selectedIndex].value);
  let endSelect = document.getElementById("yearFilterEnd");
  let end = parseInt(endSelect.options[endSelect.selectedIndex].value);
  let categorySelect = document.getElementById("category");
  let category = categorySelect.options[categorySelect.selectedIndex].value;
  let orderSelect = document.getElementById("orderList");
  let order = orderSelect.options[orderSelect.selectedIndex].value;
  let dataset = getData(start, end, category);
  dataset = sortByYear(dataset, order);
  medianText(dataset);
  tableCreate(dataset);
  google.charts.setOnLoadCallback(function () { drawHomeChart(dataset); });
  window.location.href = href="#tables";
}

function medianCalc(dataset) {
  let median = dataset.slice(1).reduce(function (r, a) {
    a.forEach(function (b, i) {
      r[i] = (r[i] || 0) + b;
    });
    return r;
  }, []);
  return parseInt(median[1] / (dataset.length - 1));
}

function medianText(dataset) {
  let result = document.createElement('h3');
  result.setAttribute("id", "medianText");
  let median = document.getElementById("median");

  result.textContent = "Média anual de " + dataset[0][1] + ": " + medianCalc(dataset).toLocaleString("pt-BR");
  median.appendChild(result);
}

function removeTable() {
  let table = document.getElementById("table");
  table.parentNode.removeChild(table);
}

function removeMedian() {
  let median = document.getElementById("medianText");
  median.parentNode.removeChild(median);
}

google.charts.load('current', { 'packages': ['corechart'] });

function drawHomeChart(dataset) {
  let tmpData = [["", "Acidentes: "]];
  for (row of dataset.slice(1)) {
    tmpData.push([row[0], (row[1])])
  }
  let data = google.visualization.arrayToDataTable(tmpData);
  let options = {
    title: 'Tipo de acidente: ' + dataset[0][1],
    curveType: 'function',
    legend: 'none',
    width: 1150,
    height: 400,
    vAxis: {format: 'short'},
    hAxis: {format: '0',
    gridlines: {color: 'transparent'}},
    backgroundColor: 'transparent',
  };

  var chart = new google.visualization.LineChart(document.getElementById('allDataBus'));
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(function () { drawHomeChart(dataset); });