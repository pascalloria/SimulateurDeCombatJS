// simulateur de combats

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