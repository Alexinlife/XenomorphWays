import BehaviourTree from "./BehaviourTree";

/**
 * @author 1838304 - Alex Lajeunesse
 * 
 * @class Alien
 * 
 * @classdesc Gère les interactions de son BT selon les informations envoyées par l'interface
 */
class Alien {

    /**
     * @author Alex Lajeunesse
     * 
     * @description Constructeur d'Alien
     * 
     * @params null
     * @returns null
     */
    constructor() {
        // Création du behaviour tree du Xenomorph
        this.bt = new BehaviourTree();

        // branche nostimuli
        this.bt.createBehaviour(0, "decorator", "nostimuli");
        this.bt.createBehaviour(1, "leaf", "wander", "Le Xenomorph est dans les parrages...");

        // branche heardsound
        this.bt.createBehaviour(0, "selector", "heardsound");
        this.bt.createBehaviour(3, "leaf", "approach", "Le Xenomorph est si près !");
        this.bt.createBehaviour(3, "sequence", "search");
        this.bt.createBehaviour(5, "leaf", "searchobject", "Tu le vois chercher sa proie.");
        this.bt.createBehaviour(5, "decorator", "sawsomething");
        this.bt.createBehaviour(7, "leaf", "kill", "Le Xenomorph t'as vu et t'as tué.");

        this.peacefulness = 15;
        this.alienState = "";
        this.alienBehaviour = null;
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Choisis  le comportement de l'Alien selon le stimulus et le BT
     * 
     * @param {*} stimulus Le stimulus envoyé par les actions du joueur
     * @returns null
     */
    chooseNextMove(stimulus) {
        var behaviour = this.bt.getBehaviourByName(stimulus);
        // Si le comportement existe
        if (behaviour) {
            // Changer le state pour le premier comportement découlant du parent
            this.alienState = this.bt.getNthChild(behaviour.name, 0).description;
            this.alienBehaviour = this.bt.getNthChild(behaviour.name, 0);
        }
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Applique la séquence de la branche "search" du BT
     */
    search() {
        this.chooseNextMove("search");
        if (this.getRndInteger(0, this.peacefulness) === 0) {
            this.chooseNextMove("sawsomething");
        }
    }

    /**
     * @author W3Schools
     * 
     * @description This JavaScript function always returns a random number between min (included) and max (excluded)
     * @see https://www.w3schools.com/js/js_random.asp
     * 
     * @param {*} min La valeur minimale inclusive
     * @param {*} max La valeur maximale exclusive
     */
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

export default Alien;