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
        // Création du behaviour tree du Xenomorph
        this.bt = new BehaviourTree();

        // branche nostimuli
        this.bt.createBehaviour(0, "decorator", "nostimuli");
        this.bt.createBehaviour(1, "leaf", "wander", "Le Xenomorph est dans les parrages...");

        // branche heardsound
        this.bt.createBehaviour(0, "selector", "heardsound");
        this.bt.createBehaviour(3, "leaf", "approach", "Le Xenomorph s'approche !");
        this.bt.createBehaviour(3, "sequence", "search");
        this.bt.createBehaviour(5, "leaf", "searchobject", "Tu le vois chercher sa proie. Il est si près.");
        this.bt.createBehaviour(5, "decorator", "sawsomething");
        this.bt.createBehaviour(7, "leaf", "kill", "Le Xenomorph t'as vu et t'as tué.");

        this.aggressivity = 0;
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
        var children = [];
        if (behaviour) {
            children = this.bt.getChildrenByName(behaviour.name);
            this.alienState = children[0].description;
            this.alienBehaviour = children[0];
        }
    }
}

export default Alien;