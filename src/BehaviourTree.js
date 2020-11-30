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
     * @param parentId l'identifiant du noeud parent à celui qui sera créé
     * @param type le type de comportement :
     * "selector"     donne plusieurs choix de comportement
     * "sequence"     donne une suite de comportement à suivre
     * "decorator"    parent d'un seul noeud
     * "leaf"         feuille d'une branche
     * @returns null
     */
    createBehaviour(parentId, type, description) {
        var valide = true

        // Validation de la description unique
        for (let i = 0; i < this.behaviours.length; i++) {
            if (this.behaviours[i].description === description) {
                valide = false;
            }
        }
        // Si la description est unique
        if (valide) {
            this.behaviours.push(new Behaviour(this.currentId, parentId, type, description));
            this.currentId++;
        }
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Trouve le comportement avec la description correspondante.
     * 
     * @param {*} desc La description du comportement
     */
    getBehaviourByDesc(desc) {

        for (let i = 0; i < this.behaviours.length; i++) {

            if (desc === this.behaviours[i].description) {
                return this.behaviours[i];
            }
        }
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Trouve les enfants directement lié au comportement ayant la description demandé
     * 
     * @param {*} desc La description du comportement
     * @returns Un tableau contenant les enfants directement liés au comportement demandé
     */
    getChildrenByDesc(desc) {
        var parent = this.getBehaviourByDesc(desc);
        var children = [];

        for (let i = 0; i < this.behaviours.length; i++) {

            if (parent.id === this.behaviours[i].parentId) {
                children.push(this.behaviours[i]);
            }
        }
        return children;
    }
}

export default BehaviourTree;