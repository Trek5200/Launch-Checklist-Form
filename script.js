let pilotNameInput = "";
let copilotNameInput = "";
let fuelLevelInput = "";
let cargoMassInput = "";

// Write your JavaScript code here!

window.addEventListener("load", function() {


   let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         pilotNameInput = document.querySelector("input[name=pilotName]").value;
         copilotNameInput = document.querySelector("input[name=copilotName]").value;
         fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
         cargoMassInput = document.querySelector("input[name=cargoMass]").value;
         
         function noEntryIsBlank(pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput){
         if (pilotNameInput === "" || copilotNameInput === "" || fuelLevelInput === "" || cargoMassInput === "") {
            alert("All fields are required!");
            event.preventDefault();
            return false
            } else {
               return true;
            }
         }

         function pilotNameIsString (pilotNameInput){            
            if (!isNaN(pilotNameInput) && pilotNameInput !== ""){
            alert("Check the name for the Pilot; You seem to have entered a number!");
            event.preventDefault();
            return false;
            } else {
               return true;
            }
         }

         function copilotNameIsString (copilotNameInput){            
            if (!isNaN(copilotNameInput) && copilotNameInput !== ""){
            alert("Check the name for the Co-pilot; You seem to have entered a number!");
            event.preventDefault();
            return false;
            } else {
               return true;
            }
         }
         
         function fuelLevelIsNumber (fuelLevelInput){            
            if (isNaN(fuelLevelInput) && fuelLevelInput !== ""){
            alert("Check the entered value for fuel level; You seem to have entered something other than a number!");
            event.preventDefault();
            return false;
            } else {
               return true;
            }
         }
         
         function cargoMassIsNumber (cargoMassInput){            
            if (isNaN(cargoMassInput) && cargoMassInput !== ""){
            alert("Check the entered value for cargo mass; You seem to have entered something other than a number!");
            event.preventDefault();
            return false;
            } else {
               return true;
            }
         }
         
         if (noEntryIsBlank(pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput) && pilotNameIsString(pilotNameInput) && copilotNameIsString(copilotNameInput) && fuelLevelIsNumber(fuelLevelInput) && cargoMassIsNumber(cargoMassInput)){
            console.log ("this WORKS!");
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput} is ready for launch.`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput} is ready for launch.`;   
         
         if ((fuelLevelInput < 10000) || (cargoMassInput > 10000)){

               document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
               document.getElementById("launchStatus").style.color = "red";
               document.getElementById("faultyItems").style.visibility = "visible";
               
               if (fuelLevelInput < 10000){
                  document.getElementById("fuelStatus").innerHTML = "Fuel level insufficient for launch";
                  document.getElementById("fuelStatus").style.color = "red";
               }
               
               if (cargoMassInput > 10000){
                  document.getElementById("cargoStatus").innerHTML = "Cargo mass is too high for launch";
                  document.getElementById("cargoStatus").style.color = "red";
               }
            } else {               
               document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
               document.getElementById("launchStatus").style.color = "green";
               document.getElementById("faultyItems").style.visibility = "visible";
                
               fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
                  response.json().then( function(json) {

                     const planetData = document.getElementById("missionTarget");

                     let randomizer = Math.floor(Math.random()*json.length);

                     planetData.innerHTML = `
                     <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${json[randomizer].name}</li>
                        <li>Diameter: ${json[randomizer].diameter}</li>
                        <li>Star: ${json[randomizer].star}</li>
                        <li>Distance from Earth: ${json[randomizer].distance}</li>
                        <li>Number of Moons: ${json[randomizer].moons}</li>
                     </ol>
                     <img src=${json[randomizer].image} alt="No pic"></img>
                     `
                  });
               });
            }
         }
        
         event.preventDefault();
      
      });

});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
