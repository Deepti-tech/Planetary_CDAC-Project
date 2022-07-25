var arr = [];
var i = 0;

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

function dragStart(event) {
   document.getElementById("button").style.display = 'none';
   switch(nextPlanet){
      case 1:
         if (event.target.id === "mercury") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "It is Mercury.<br>It is closest to the sun!";
            document.getElementById("instruct").innerHTML = Pos
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture<img src="closeup-images/Mercury.jpg"></img>'
         }
         currPlanet=1
         break
      case 2:
         if (event.target.id === "venus") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "This is Venus which is the hottest planet but comes after Mercury<br>(not the sun)";
            document.getElementById("instruct").innerHTML = Pos
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture<img src="closeup-images/Venus.jpg"></img>'
         }
         currPlanet=2
         break
      case 3:
         if (event.target.id === "earth") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "The planets before the Milky way are Terrestrial Planets. Earth is the second-last Terrestrial planet.";
            document.getElementById("instruct").innerHTML = Pos
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture<img src="closeup-images/Earth.jpg"></img>'
         }
         currPlanet=3
         break
      case 4:
         if (event.target.id === "mars") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "Yess, Mars!!<br>It comes right before the milky way.";
            document.getElementById("instruct").innerHTML = Pos
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture<img src="closeup-images/Mars.jpg"></img>'
         }
         currPlanet=4
         break
      case 5:
         if (event.target.id === "jupiter") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "That's right.<br>JUPITER!<br>It comes right after the milky way."
            document.getElementById("instruct").innerHTML = Pos
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture<img src="closeup-images/Jupiter.jpg"></img>'
         }
         currPlanet=5;
         break
      case 6:
         if (event.target.id === "saturn") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "You are right, saturn. One year of Saturn equals 29 Earth years!";
            document.getElementById("instruct").innerHTML = Pos
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture<img src="closeup-images/Saturn.jpg"></img>'
         }
         currPlanet=6
         break
      case 7:
         if (event.target.id === "uranus") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "This is Uranus.<br>It is the second-last planet in the solar system and is a neighbour of Saturn!";
            document.getElementById("instruct").innerHTML = Pos
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture<img src="closeup-images/Uranus.jpg"></img>'
         }
         currPlanet=7
         break
      case 8:
         if (event.target.id === "neptune") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "It is Neptune.<br>It is the last planet in the solar system.";
            document.getElementById("instruct").innerHTML = Pos
         }
         else {
            document.getElementById("instruct").innerHTML='Going wrong somewhere...<br>Look at this closer picture<img src="closeup-images/Neptune.jpg"></img>'
         }
         currPlanet=8
         break     
   }
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
      i=i+1; 
      document.getElementById("button").value = nextPlanet = arr[i];
      if(i===8){
         document.getElementById("draggable-elements").className = "complete-ss";
         document.getElementById("guide").className = "complete-ss";
      }
   }
   displayFacts();
}

function OKbutton(){
   document.getElementById("button").style.display = 'none'; 
   var Text;
   if(document.getElementById("button").value==='1'){
      Text = "Drag the dark grey planet that has wrinkles on it!";
   }   
   if(document.getElementById("button").value==='2'){
      Text = "Drag the yellowish-white planet with few brownish-red spots. These spots signify the volcanic rocks!";
   } 
   if(document.getElementById("button").value==='3'){
      Text = "Next is our home! A combination of water and land! It is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons and plains.";
   } 
   if(document.getElementById("button").value==='4'){
      Text = "Coming to the red planet! It got its colour red because of the rusty iron on its surface.";
   } 
   if(document.getElementById("button").value==='5'){
      Text = "Drag the largest planet in the solar system! It is a gas giant and its colour changes with storms and wind in the planet's atmosphere. Here, drag the planet yellowish-brown in colour!";           
   } 
   if(document.getElementById("button").value==='6'){
      Text = "Drag the planet with rings! It has a set of 7 main rings with spaces between them.";
   } 
   if(document.getElementById("button").value==='7'){
      Text = "Drag the planet which is blue in colour and has faint rings.";
   } 
   if(document.getElementById("button").value==='8'){
      Text = "Drag the dark, cold and windy planet!<br>(It's colour is dark blue'.)";
   } 
   document.getElementById("instruct").innerHTML = Text
}

function displayFacts(){
   display_fact = (Math.random())
   if( display_fact < 0.33){
      nasaRequest();
   }
}
