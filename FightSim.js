// Simulateur de combats
class Combattant {
    constructor(nom,PV,XP,) {
        this.nom = nom;
        this.PV = PV;
        this.XP = XP
        this.vie = true
        this.classe = "none"
    }
    get niveau (){
        return Math.floor(this.XP/100)
    }

    get information(){
        return (`${this.nom} à ${this.PV} PV et est niveau ${this.niveau}`)
    }

    enVie(){
        if (this.PV <0){
            appendLigne(journalCombat,`${this.nom} est mort`);
            this.vie = false
        }
    }

    sePresenter (){
        alert("Je m'appelle " + this.nom + " J'ai "+ this.PV +" PV et je suis niveau " + this.niveau)        
    }
}

class Guerrier extends Combattant {

    constructor(nom,PV,XP,arme,degat,){
        super(nom,PV,XP,)
        this.arme = arme;
        this.degat = degat;
    }

    attaquer (cible){
        if (this.vie) {  
            appendLigne(journalCombat,`Le guerrier ${this.nom} attaque avec son ${this.arme} ${cible.nom} pour ${this.degat} points de degats `)
            cible.PV -= this.degat
            cible.enVie()
            
        }         
    }    
    
}

class Magicien extends Combattant{
    constructor(nom,PV,XP,mana) {
        super(nom,PV,XP)
        this.mana = mana
        this.sort = "sort"
        this.nombreSort= 0
    }

    attaquer(cible){        
        if (this.nombreSort ==0){
            this.bouleDeFeu(cible)
        }
        else if (this.nombreSort==1){
            this.LanceDeGlace(cible)
        } else {
            this.EclairFoudroyant(cible)
        }
    }

    bouleDeFeu(cible){
        if (this.vie){
            if (this.mana>5){
                appendLigne(journalCombat,`Le magicien ${this.nom} utilise le sort "boule de feu" sur ${cible.nom} pour ${this.niveau * 4} points de degats`);
                cible.PV -= this.niveau * 4;
                this.mana -= 5}
            else {
                appendLigne(journalCombat,"Le magicien n'as pas assez de mana pour lancer un sort");
            }
            cible.enVie()
        }
    }

    LanceDeGlace(cible){
        if (this.vie){
            if (this.mana>2){
                appendLigne(journalCombat,`Le magicien ${this.nom} utilise le sort "lance de glace" sur ${cible.nom} pour ${this.niveau * 2} points de degats`);
                cible.PV -= this.niveau * 2;
                this.mana -= 2}
            else {
                appendLigne(journalCombat,"Le magicien n'as pas assez de mana pour lancer un sort");
            }
            cible.enVie()
        }
    }
    EclairFoudroyant(cible){
        if (this.vie){
            if (this.mana>2){
                appendLigne(journalCombat,`Le magicien ${this.nom} utilise le sort "Eclair foudroyant" sur ${cible.nom} pour ${this.niveau * 2} points de degats`);
                cible.PV -= this.niveau * 2;
                this.mana -= 2}
            else {
                appendLigne(journalCombat,"Le magicien n'as pas assez de mana pour lancer un sort");
            }
            cible.enVie()
        }
    }

}


function combat(combattant1,combattant2){
    //alert("Le combat va commencer")   

    while (combattant1.PV >0 && combattant2.PV >0){
        combattant1.attaquer(combattant2);
        combattant2.attaquer(combattant1);
    }
    if (!combattant1.vie){
        victoire(combattant2,50);

    } else {
        victoire(combattant1,50);
    }

}

// Attribuler les bouttons
let buttonMagicien1     = $('#Magicien');
let buttonGuerrier1     = $("#Guerrier");
let buttonValider1      = $("#valider1");
let buttonMagicien2     = $("#Magicien2");
let buttonGuerrier2     = $("#Guerrier2");
let buttonValider2      = $("#valider2");
let buttonCombat        = $("#Combat");



// declarer nos variable
//let journalCombat=document.body.querySelector("#journal")
let classe;let combattant1;let combattant2;let nom; let nom2;
let combatInd=0

// definir les actions des bouttons
buttonGuerrier1.on("click",()=>{
    combattant1 = new Guerrier("guerrier",25,200,"armes",5)
    combattant1.classe="Guerrier"    
    let parent = buttonGuerrier1.parent()
    desactiverBouton(parent)
    afficherChoixArme(parent,combattant1)
    
})

buttonMagicien1.on("click",()=>{
    combattant1 = new Magicien("magicien",15,100,40)
    combattant1.classe="Magicien"  ;    
    let parent = buttonMagicien1.parent();
    desactiverBouton(parent)   
    afficherChoixSort(parent,combattant1);    
})

buttonGuerrier2.on("click",()=>{
    combattant2 = new Guerrier("guerrier",25,200,"armes",5)
    combattant2.classe="Guerrier";   
    let parent = buttonGuerrier2.parent();
    desactiverBouton(parent);
    afficherChoixArme(parent,combattant2);
})

buttonMagicien2.on("click",()=>{
    combattant2 = new Magicien("magicien",15,100,40)
    combattant2.classe="Magicien"    ;
    let parent = buttonMagicien2.parent();
    desactiverBouton(parent);   
    afficherChoixSort(parent,combattant2);
})

buttonValider1.on("click",()=> {
    let parent =buttonValider1.parent();
    getNom(parent)
    combattant1.nom=nom
    // combattant1.sePresenter()    
    desactiverBouton(parent);  
})

buttonValider2.on("click",()=> {
    let parent = buttonValider2.parent();
    getNom(parent)
    combattant2.nom=nom
    //combattant2.sePresenter()    
    desactiverBouton(parent);  
})


buttonCombat.on("click",()=>{

    if (combatInd ==0){
        if (combattant1 || combattant2){
            combat(combattant1,combattant2)
            //buttonCombat.prop('disabled', true)
            buttonCombat.text("Restart")
            combatInd=1
        } else {
            alert("Merci de choisir vos combattants")
        }
    } else {
        location.reload(true)
    }    
})



    




