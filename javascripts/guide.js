function dexter_voice(){
  function getVoices() {
    let voices = speechSynthesis.getVoices();
    if(!voices.length){
      // some time the voice will not be initialized so we can call spaek with empty string
      // this will initialize the voices 
      let utterance = new SpeechSynthesisUtterance("");
      speechSynthesis.speak(utterance);
      voices = speechSynthesis.getVoices();
    }
    return voices;
  }
  
  
  function speak(text, voice, rate, pitch, volume) {
    // create a SpeechSynthesisUtterance to configure the how text to be spoken 
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = volume; // From 0 to 1
    speakData.rate = rate; // From 0.1 to 10
    speakData.pitch = pitch; // From 0 to 2
    speakData.text = text;
    speakData.lang = 'en';
    speakData.voice = voice;
    
    // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
    speechSynthesis.speak(speakData);
  
  }
 
  if ('speechSynthesis' in window) {
 
    let voices = getVoices();
    let rate = 1, pitch = 0, volume = 1;
    let text = document.getElementById("instruct").innerText;
  
    speak(text, voices[5], rate, pitch, volume);
  
  }else{
    console.log(' Speech Synthesis Not Supported 😞'); 
  }
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
      Text = "Drag our home! A combination of water and land! It is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons and plains.";
    } 
    if(document.getElementById("button").value==='4'){
      Text = "Drag the red planet! It got the colour red because of the rusty iron on its surface.";
    } 
    if(document.getElementById("button").value==='5'){
      Text = "Drag the largest planet in the solar system! It is a gas giant and its colour changes with storms and wind in the planet's atmosphere.";           
    } 
    if(document.getElementById("button").value==='6'){
      Text = "Drag the planet with rings! It has a set of 7 main rings with spaces between them.";
    } 
    if(document.getElementById("button").value==='7'){
      Text = "Drag the planet which is blue in colour and has faint rings.";
    } 
    if(document.getElementById("button").value==='8'){
      Text = "Drag the dark, cold and windy planet!<br>(It's colour is dark blue.)";
    } 
    document.getElementById("instruct").innerHTML = Text

    dexter_voice();
 }
