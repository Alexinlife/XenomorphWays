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
        this.alienState = "Le Xenomorph n'est pas dans les parrages..."
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
}

export default Alien;