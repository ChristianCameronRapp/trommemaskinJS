// Referanser til HTML-elementer
const audio = document.querySelectorAll("audio");
const divTrommer = document.querySelectorAll(".tromme");

// Globale variabler
const knapper = ["a","s","d","f","g","h","j","k","l"];

// Hendelsesfunksjoner
document.onkeydown = function(event){
  console.log(event);

  for(let i = 0;i < 9; i++){
    if(event.key === knapper[i]){
      divTrommer[i].classList.add("valgtTromme");
      audio[i].play();
      audio[i].currentTime = 0;
    }
  }

  /*
  if(event.key === "a"){
    audio[1].play();
  }
  if(event.key === "s"){
    audio[2].play();
  }
  if(event.key === "d"){
    audio[3].play();
  }
  if(event.key === "f"){
    audio[4].play();
  }
  if(event.key === "g"){
    audio[5].play();
  }
  if(event.key === "h"){
    audio[6].play();
  }
  if(event.key === "j"){
    audio[7].play();
  }
  if(event.key === "k"){
    audio[8].play();
  }
  if(event.key === "l"){
    audio[9].play();
  }
  */
}

document.onkeyup = function(event){
  for(let i = 0;i < 9; i++){
    divTrommer[i].classList.remove("valgtTromme");
  }
}
