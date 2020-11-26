import Behaviour from "./Behaviour";

/**
 * @author 1838304 - Alex Lajeunesse
 * 
 * @class BehaviourTree
 * 
 * @classdesc Arbre de comportement en français
 * @classdesc Graphe structuré de façon à organiser des actions selon certaines conditions
 * @see https://www.youtube.com/watch?v=uq8hnnkAxsw (inspiré d'une course sur Udemy)
 */
class BehaviourTree {

    /**
     * @author Alex Lajeunesse
     * 
     * @description Constructeur de BehaviourTree
     * @returns null
     */
    constructor() {
        this.behaviours = [];
        this.currentId = 0;

        this.createBehaviour(null, "selector", "root");
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Crée un comportement et l'ajoute à l'arbre
     * 
     * @param parent_id l'identifiant du noeud parent à celui qui sera créé
     * @param type le type de comportement :
     * "selector"     donne plusieurs choix de comportement
     * "sequence"     donne une suite de comportement à suivre
     * "decorator"    parent d'un seul noeud
     * "leaf"         feuille d'une branche
     * @returns null
     */
    createBehaviour(parent_id, type, description) {
        this.behaviours.push(new Behaviour(parent_id, type, description));
        this.currentId++;
    }

    getChildrenBehaviour() {
        
    }
}

export default BehaviourTree;