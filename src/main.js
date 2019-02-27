for (let item in INJURIES){
    let obj = INJURIES[item];
    if (parseInt(obj["Year"].split("-")[0]) > 2005 && parseInt(obj["Year"].split("-")[0]) < 2016) {
	    let dataValue = document.createElement("p");
        dataValue.textContent = obj["Year"].split("-")[0] + "\t" + 
                           obj["Total_Injured_Persons_Pedestrians"] + "\t" +
                           obj["Total_Injured_Persons_Bus_Occupants"] + "\t" +
                           obj["Total_Injured_Persons_Motorcyclists"] + "\t" +
                           obj["Total_Injured_Persons_Pedalcyclists"] + "\t" +
                           obj["Total_Injured_Persons_Passenger_Car_Occupants"];
        document.body.appendChild(dataValue); 
	}
}