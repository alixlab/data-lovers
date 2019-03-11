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
  let body = document.getElementById("tables");
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

function sortByYear(array, order) {
  array.sort(function (a, b) {
    if (order === 'asc') {
      return a[0] > b[0] ? 1 : -1;
    } else {
      return a[0] < b[0] ? 1 : -1;
    }
  });
}

let dataset = getData(1996, 2015, "Total_Injured_Persons_Pedestrians");
sortByYear(dataset, 'asc');
tableCreate(dataset);

google.charts.load('current', { 'packages': ['corechart'] });

function drawHomeChart(dataset) {
  let tmpData = [[dataset[0][0], "Acidentes por ano"]];
  for (row of dataset.slice(1)) {
    tmpData.push([row[0], row[1]])
  }
  console.log(tmpData)
  let data = google.visualization.arrayToDataTable(tmpData);
  let options = {
    title: 'Pessoas Envolvidas em Acidentes de ' + dataset[0][1],
    curveType: 'function',
    legend: 'none',
    width: 200,
    height: 200,
    backgroundColor: 'transparent'
  };
  console.log(options)
  var chart = new google.visualization.LineChart(document.getElementById('id01'));
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawHomeChart(dataset));
