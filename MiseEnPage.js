

// separer en deux  colonne
let colum =$("#colum");
colum.css({
    "width"     :"50%",
    "float"     :"left",
    "display"   :"inline-block",
    "backgroundColor" : "#BD1321",
    "opacity" : "0.75"

})
let colum2 =$("#colum2");
colum2.css({
    "width"     :"50%",
    "display"   :"inline-block",
    "float"     :"right",
    "backgroundColor" : "#4954EC",
    "opacity" : "0.75",
})


// creer un class center
let centers=$(".center")
centers.css({"text-align":"center"})

// Justifier a gauche le journale de combats
let journalCombat=$("#journal")
journalCombat.css({
    'display'           :"inline-block",
    "text-align"        :"left",
    // ajout de padding et gestion des couleurs
    "padding"           : "20px",
    "backgroundColor"   : "black",
    "color"             : "yellow",
    "fontFamily"        :  "Palatino",
})

$("body").css({
    'backgroundImage'       : "url(images/fond.jpg)",
    "color"                 : "white"
})



// mise en forme du titre 
let h1 = $("h1")
h1.css({
    "font-family"   :"Arial",
    "font-size"     :"4em"
})



