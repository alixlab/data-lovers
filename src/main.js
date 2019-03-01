function getData() {
        let dataset = [["Year", 
                        "Pedestrians",
                        "Bus Occupants",
                        "Motorcyclists",
                        "Pedalcyclists", 
                        "Passenger Car Occupants"]];
        for (obj of INJURIES){
          if (parseInt(obj["Year"].split("-")[0]) > 2005 && parseInt(obj["Year"].split("-")[0]) < 2016 ) {
            let record = [];
            record.push(obj["Year"].split("-")[0]);
            record.push(obj["Total_Injured_Persons_Pedestrians"]);
            record.push(obj["Total_Injured_Persons_Bus_Occupants"]);
            record.push(obj["Total_Injured_Persons_Motorcyclists"]);
            record.push(obj["Total_Injured_Persons_Pedalcyclists"]);
            record.push(obj["Total_Injured_Persons_Passenger_Car_Occupants"]);
            dataset.push(record);
          }
        }
        return dataset
      }
      
      function tableCreate(dataset) {
        let body = document.getElementById("tables-div");
        let tbl = document.createElement('table');
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
      
      let dataset = getData();
      tableCreate(dataset);
      