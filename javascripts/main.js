var arr = [];
var i = 0;
var error = []
var myplanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

while(arr.length < 8){
   var r = Math.floor(Math.random() * 8) + 1;
   if(arr.indexOf(r) === -1) arr.push(r);
}

var currPlanet=arr[0];
var nextPlanet=arr[0];
document.getElementById("button").value = arr[0]

draggableElements.forEach(elem => {
   elem.addEventListener("dragstart", dragStart);
})

droppableElements.forEach(elem => {
   elem.addEventListener("dragenter", dragEnter);
   elem.addEventListener("dragover", dragOver);
   elem.addEventListener("dragleave", dragLeave);
   elem.addEventListener("drop", drop);
})

    if ('speechSynthesis' in window) {
      let rate = 1, pitch = 1.5, volume = 1;
      let text = document.getElementById("instruct").innerText;
    
      speak(text, voices[5], rate, pitch, volume);
    
    }else{
      console.log(' Speech Synthesis Not Supported 😞'); 
    }

function dragStart(event) {
   document.getElementById("button").style.display = 'none';
   wrong_pos = "Going wrong somewhere...<br>Take a closer look"
   switch(nextPlanet){
      case 1:
         if (event.target.id === "mercury") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "It is Mercury.<br>It is closest to the sun!";
         }
         else {
            Pos = wrong_pos + '<img src="closeup-images/Mercury.jpg"></img>'
         }
         break
      case 2:
         if (event.target.id === "venus") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "This is Venus which is the hottest planet but comes after Mercury<br>(not the sun)";
         }
         else {
            if(event.target.id === "jupiter"){
               wrong_pos = "Going wrong somewhere? The correct planet is smaller in size than this.<br> Take a closer look."
               Pos = wrong_pos + '<img src="closeup-images/Venus.jpg"></img>'
            }
            if(event.target.id === "saturn"){
               wrong_pos = "Going wrong somewhere? The correct planet does not have rings.<br> Take a closer look."
               Pos = wrong_pos + '<img src="closeup-images/Venus.jpg"></img>'
            }
            else {
               Pos = wrong_pos + '<img src="closeup-images/Venus.jpg"></img>'
            }
         }
         break
      case 3:
         if (event.target.id === "earth") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "The planets before the Milky way are Terrestrial Planets. Earth is the second-last Terrestrial planet.";
         }
         else {
            if(event.target.id === "neptune"){
               wrong_pos = "Going wrong somewhere? The correct planet also has green spots which represents the land.<br> Take a closer look.";
               Pos = wrong_pos + '<img src="closeup-images/Earth.jpg"></img>'
            }
            if(event.target.id === "uranus"){
               wrong_pos = "Going wrong somewhere? The correct planet does not have rings.<br> Take a closer look.";
               Pos = wrong_pos + '<img src="closeup-images/Earth.jpg"></img>';
            }
            else {
               Pos = wrong_pos + '<img src="closeup-images/Earth.jpg"></img>'
            }
         }
         break
      case 4:
         if (event.target.id === "mars") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "Yes, Mars!!<br>It comes right before the milky way.";
         }
         else {
            if(event.target.id === "jupiter"){
               wrong_pos = "Going wrong somewhere? The correct planet is smaller in size than this.<br> Take a closer look."
               Pos = wrong_pos + '<img src="closeup-images/Mars.jpg"></img>'
            }
            else {
               Pos = wrong_pos + '<img src="closeup-images/Mars.jpg"></img>'
            }
         }
         break
      case 5:
         if (event.target.id === "jupiter") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "That's right. Jupiter!<br>It comes right after the milky way."
         }
         else {
            if(event.target.id === "venus"){
               wrong_pos = "Going wrong somewhere? The correct planet is larger in size than this.<br> Take a closer look."
               Pos = wrong_pos + '<img src="closeup-images/Jupiter.jpg"></img>'
            }
            if(event.target.id === "mars"){
               wrong_pos = "Going wrong somewhere? The correct planet is not completely red.<br> Take a closer look."
               Pos = wrong_pos + '<img src="closeup-images/Jupiter.jpg"></img>'
            }
            if(event.target.id === "saturn"){
               wrong_pos = "Going wrong somewhere? The correct planet does not have rings.<br> Take a closer look.";
               Pos = wrong_pos + '<img src="closeup-images/Jupiter.jpg"></img>';
            }
            else {
               Pos = wrong_pos + '<img src="closeup-images/Jupiter.jpg"></img>'
            }
         }
         break
      case 6:
         if (event.target.id === "saturn") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "You are right, Saturn.<br>The planets after the Milky way are Jovian Planets. It is the second Jovian planet.";
         }
         else {
            if(event.target.id === "uranus"){
               wrong_pos = "Going wrong somewhere? The correct planet is yellowish in color with rings around it.<br> Take a closer look.";
               Pos = wrong_pos + '<img src="closeup-images/Saturn.jpg"></img>';
            }
            else {
               Pos = wrong_pos + '<img src="closeup-images/Saturn.jpg"></img>'
            }
         }
         break
      case 7:
         if (event.target.id === "uranus") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "That's correct, Uranus!<br>It is the second-last planet in the solar system and is a neighbour of Saturn!";
         }
         else {
            if(event.target.id === "saturn"){
               wrong_pos = "Going wrong somewhere? The correct planet is blue in color with rings around it.<br> Take a closer look.";
               Pos = wrong_pos + '<img src="closeup-images/Uranus.jpg"></img>';
            }
            if(event.target.id === "neptune"){
               wrong_pos = "Going wrong somewhere? The correct planet has rings around it.<br> Take a closer look.";
               Pos = wrong_pos + '<img src="closeup-images/Uranus.jpg"></img>';
            }
            else {
               Pos = wrong_pos + '<img src="closeup-images/Uranus.jpg"></img>'
            }
         }
         break
      case 8:
         if (event.target.id === "neptune") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "It is Neptune.<br>It is the last planet in the solar system.";
         }
         else {
            if(event.target.id === "mercury"){
               wrong_pos = "Going wrong somewhere? The correct planet is blue in color.<br> Take a closer look.";
               Pos = wrong_pos + '<img src="closeup-images/Neptune.jpg"></img>';
            }
            if(event.target.id === "uranus"){
               wrong_pos = "Going wrong somewhere? The correct planet does not have rings around it.<br> Take a closer look.";
               Pos = wrong_pos + '<img src="closeup-images/Neptune.jpg"></img>';
            }
            else {
               Pos = wrong_pos + '<img src="closeup-images/Neptune.jpg"></img>'
            }
         }
         break     
   }
   document.getElementById("instruct").innerHTML = Pos;
   currPlanet=nextPlanet;

   dexter_voice();
}

function removeDuplicates(arr) {
   return arr.filter((item,
       index) => arr.indexOf(item) === index);
}

function dragEnter(event) {
   if (!event.target.classList.contains("dropped")) {
      event.target.classList.add("droppable-hover");
   }
}

function dragOver(event) {
   event.preventDefault();
}

function dragLeave(event) {
   event.target.classList.remove("droppable-hover");
}

function insertionSort(arr, n)
{
	let i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;		
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

function drop(event) {
   event.target.classList.remove("droppable-hover");
   event.preventDefault();
   const draggableElementData = event.dataTransfer.getData("text");
   const droppableElementData = event.target.getAttribute("data-draggable-id")
   document.getElementById("button").innerHTML = "NEXT";
   if (draggableElementData === droppableElementData) {
      currPlanet=arr[i]
      document.getElementById("button").style.display = 'flex';
      if(currPlanet===1){
         document.getElementById("mercury1").className = "mercury-revolve";
      }
      if(currPlanet===2){
         document.getElementById("venus1").className = "venus-revolve";
      }
      if(currPlanet===3){
         document.getElementById("earth1").className = "earth-revolve";
      }
      if(currPlanet===4){
         document.getElementById("mars1").className = "mars-revolve";
      }
      if(currPlanet===5){
         document.getElementById("jupiter1").className = "jupiter-revolve";
      }
      if(currPlanet===6){
         document.getElementById("saturn1").className = "saturn-revolve";
      }
      if(currPlanet===7){
         document.getElementById("uranus1").className = "uranus-revolve";
      }    
      if(currPlanet===8){
         document.getElementById("neptune1").className = "neptune-revolve";
      }
      event.target.classList.add("dropped");
      const draggableElement = document.getElementById(draggableElementData);
      draggableElement.classList.add("dragged");
      draggableElement.setAttribute("draggable", "false");
      event.target.appendChild(document.getElementById(draggableElementData));
      error.push(arr[i]);
      i=i+1; 
      document.getElementById("button").value = nextPlanet = arr[i];
      if(i===8){
         document.getElementById("draggable-elements").className = "complete-ss";
         document.getElementById("guide").className = "complete-ss";
      }
   }
   else if(myplanets[currPlanet-1].toLowerCase() == draggableElementData){
      error.push(arr[i]);
      error = removeDuplicates(error);
      insertionSort(error, error.length);
      index = error.indexOf(arr[i]);

      p= myplanets[error[index]-1];
      
      p1=myplanets[error[index-1]-1];
      p2=myplanets[error[index+1]-1];

      if(error[index-1]==undefined && error[index+1]!=undefined){
         if (error[index]<=4){
            document.getElementById("instruct").innerHTML= p+" lies between sun and "+ p2;
         }
         else{
            document.getElementById("instruct").innerHTML= p+ " lies between milkyway and "+p2;
         }
      }

      else if(error[index-1]!=undefined && error[index+1]==undefined){
         if (error[index]<=4){
            document.getElementById("instruct").innerHTML= p+" lies between " + p1 +" and milkyway";
         }
         else{
            document.getElementById("instruct").innerHTML= p+" lies after "+p1;
         }
      }

      else if(error[index+1]==undefined && error[index-1]==undefined){
         if (error[index]<=4){
            document.getElementById("instruct").innerHTML= p+" lies between sun and milkyway";
         }
         else{
            document.getElementById("instruct").innerHTML= p+" lies after milkyway";
         }
      }

      else{
         document.getElementById("instruct").innerHTML= p+" lies between " + p1 +" and " + p2;
      }
      dexter_voice();
   }
   displayFacts();
   
   
}

function displayFacts(){
   var display_fact;
   display_fact = (Math.random())
   if( display_fact < 0.33){
      nasaRequest();
   }
}
