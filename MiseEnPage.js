

// separer en deux  colonne
let colum =document.body.querySelector("#colum");
colum.style.width       ="50%"
colum.style.float       = "right"
colum.style.display    = "inline-block"
let colum2 =document.body.querySelector("#colum2");
colum2.style.width      ="50%"
colum2.style.display    = "inline-block"
colum.style.float       = "left"

// creer un class center
let centers=document.getElementsByClassName("center")
for (const e of centers) {e.style.textAlign="center"}

// Justifier a gauche le journale de combats
let journalCombat=document.body.querySelector("#journal")
journalCombat.style.display="inline-block";
journalCombat.style.textAlign="left";
// ajout de padding et gestion des couleurs
journalCombat.style.padding = "20px"
journalCombat.style.backgroundColor = "White"
journalCombat.style.color = "black"


document.body.style.backgroundImage = "url(images/fond.jpg)"
document.body.style.color = "white"

colum.style.backgroundColor = "#BD1321"
colum.style.opacity = "0.75"
colum2.style.backgroundColor = "#4954EC"
colum2.style.opacity = "0.75"

// mise en forme du titre 
let h1 = document.body.querySelector("h1")
h1.style.fontFamily="Arial"
h1.style.fontSize="4em"



