import BehaviourTree from "./BehaviourTree";

/**
 * @author 1838304 - Alex Lajeunesse
 * 
 * @class Alien
 * 
 * @classdesc 
 */
class Alien {

    /**
     * @author Alex Lajeunesse
     * 
     * @description Constructeur d'Alien
     */
    constructor() {
        this.aggressivity = 0;
        this.alienState = 
        // Création du behaviour tree du Xenomorph
        this.bt = new BehaviourTree();
        // branche nostimuli
        this.bt.createBehaviour(0, "decorator", "nostimuli");
        this.bt.createBehaviour(1, "leaf", "donotbother");

        // branche heardsound
        this.bt.createBehaviour(0, "selector", "heardsound");
        this.bt.createBehaviour(3, "leaf", "approach");
        this.bt.createBehaviour(3, "sequence", "search");
        this.bt.createBehaviour(5, "leaf", "searchobject");
        this.bt.createBehaviour(5, "decorator", "sawsomething");
        this.bt.createBehaviour(7, "leaf", "kill");
    }

    /**
     * Gère le comportement de l'alien lorsqu'il entend un son
     * 
     * @param {*} intensity Le volume du bruit sur une échelle de 1 à 3
     */
    heardSound(intensity) {
        return "Oh boy.";
    }
    
    kill() {

    }

    searchObject() {

    }

    searchLocker() {

    }
}

export default Alien;