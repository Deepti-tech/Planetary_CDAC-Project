function tut(){
    document.getElementById("draggable-elements").style.opacity="0.5"
    document.getElementById("droppable-elements").style.opacity="0.5"
    document.getElementById("button").style.opacity="0.5"
    document.getElementById("guide-img").style.opacity="0.5"

    document.getElementById("heading").innerHTML = 'Instructions';
    document.getElementById("details").innerHTML = 'Guess the planet to be dragged using these instructions';
    document.getElementById("tut").style.display="block";
}
function closeTut(){
    document.getElementById("tut").style.display='none';
    document.getElementById("draggable-elements").style.opacity="1";
    document.getElementById("droppable-elements").style.opacity="1";
    document.getElementById("instruct").style.opacity="1";
    document.getElementById("button").style.opacity="1";
    document.getElementById("guide-img").style.opacity="1"

}
tut().onload;