function appendLigne(div,text){
    div.innerHTML += `${text} <br> <br>`;    
}


function victoire( combattant,XP){
    appendLigne(journalCombat,`${combattant.nom} à gagner`)
    appendLigne(journalCombat,`${combattant.nom} gagne ${XP} XP`)
    combattant.XP +=XP
    appendLigne(journalCombat,`${combattant.information}`)
}

function desactiverBouton(parent) {
    var childNodes = parent.getElementsByTagName('*'); // permet la selection tous les elements dans une div : creer un tableau
    for (var node of childNodes) {
    node.disabled = true;
}}

function desactiverBoutonArmeGuerrier(parent) {
    var childNodes = parent.getElementsByTagName('*'); // permet la selection tous les elements dans une div : creer un tableau
    for (var node of childNodes) {
    node.disabled = true;
}}

function getNom (parent) {
    noms=parent.getElementsByTagName("input")
    nom=noms[0].value
}

function heure () {
    var Maintenant = new Date();
    var heures = Maintenant.getHours();
    var minutes = Maintenant.getMinutes();
    var secondes = Maintenant.getSeconds();
    heures = ((heures < 10) ? " 0" : " ") + heures;
    minutes = ((minutes < 10) ? ":0" : ":") + minutes;
    secondes = ((secondes < 10) ? ":0" : ":") + secondes;
    document.formhorloge.horloge.value = heures + minutes + secondes;
    setTimeout("heure()",1000);
}

function modificationSort(combatant,sort,nombreSort){
    combatant.sort = sort
    combatant.nombreSort=nombreSort
}


function modificationArme(combatant,arme,degats){
    combatant.arme = arme
    combatant.degat=degats
}

function afficherChoixArme(parent,combatant){
    let choixArme=document.createElement("div")
    parent.append(choixArme)
    choixArme.innerHTML+= "<p>Choix de votre arme</p> <button id='epee'>Epée et bouclier </button> <button id='marteau'> Marteau à 2 main </button>  <button id='hache'> Double hache </button> "
    let buttons             =choixArme.getElementsByTagName("button");
    let buttonEpee          = buttons[0];
    let buttonMarteau       = buttons[1];
    let buttonHache         = buttons[2];

    
    buttonEpee.addEventListener("click",()=>{        
        modificationArme(combatant,'Epée et bouclier',3);
        let parent = buttonEpee.parentNode;
        desactiverBouton(parent)
    
    })
    buttonMarteau.addEventListener("click",()=>{
    
        modificationArme(combatant,'Marteau à 2 main',7);
        let parent = buttonMarteau.parentNode;
        desactiverBouton(parent)
    
    })
    buttonHache.addEventListener("click",()=>{
    
        modificationArme(combatant,'Double hache',6);
        let parent = buttonHache.parentNode;
        desactiverBouton(parent)
    
    })


}

function afficherChoixSort (parent,combatant){
    var choixSort=document.createElement("div")
    parent.append(choixSort)
    choixSort.innerHTML+="<p>Choix de votre sort</p> <button id='feu'>Boule de feu </button> <button id='glace'> Lance de glace </button>  <button id='eclair'> Eclair foudroyant </button>"
    let buttons             =choixSort.getElementsByTagName("button");
    let buttonFeu           = buttons[0];
    let buttonGlace         = buttons[1];
    let buttonEclair        = buttons[2];

    
    buttonFeu.addEventListener("click",()=>{        
        modificationSort(combatant,'Boule de feu',0);
        let parent = buttonFeu.parentNode;
        desactiverBouton(parent)
    
    })
    buttonGlace.addEventListener("click",()=>{
    
        modificationSort(combatant,'Lance de glace',1);
        let parent = buttonGlace.parentNode;
        desactiverBouton(parent)
    
    })
    buttonEclair.addEventListener("click",()=>{
    
        modificationSort(combatant,'Eclair foudroyant',2);
        let parent = buttonEclair.parentNode;
        desactiverBouton(parent)
    
    })

}



window.onload = heure;