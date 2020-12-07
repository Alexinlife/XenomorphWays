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
     * 
     * @params null
     * @returns null
     */
    constructor() {
        this.behaviours = [];
        this.currentId = 0;
        this.cursor = 0;

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
     * @param name le nom donné au comportement
     * @param description la description du comportement, peut donner plus de contexte
     * @returns null
     */
    createBehaviour(parentId, type, name, description) {
        var valide = true

        // Validation du nom unique
        for (let i = 0; i < this.behaviours.length; i++) {
            if (this.behaviours[i].name === name) {
                valide = false;
            }
        }
        // Si le nom est unique
        if (valide) {
            this.behaviours.push(new Behaviour(this.currentId, parentId, type, name, description));
            this.currentId++;
        }
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Trouve le comportement avec le nom correspondant.
     * 
     * @param {*} name Le nom du comportement
     * @returns le comportement s'il existe, sinon false
     */
    getBehaviourByName(name) {

        for (let i = 0; i < this.behaviours.length; i++) {
            if (name === this.behaviours[i].name) {
                this.cursor = this.behaviours[i].id;
                return this.behaviours[i];
            }
        }
        return false;
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Trouve les enfants directement lié au comportement ayant le nom demandé
     * 
     * @param {*} name Le nom du comportement
     * @returns Un tableau contenant les enfants directement liés au comportement demandé
     */
    getChildrenByName(name) {
        var parent = this.getBehaviourByName(name);
        var children = [];

        if (parent) {
            this.cursor = parent.id;
        }
        for (let i = 0; i < this.behaviours.length; i++) {
            if (parent.id === this.behaviours[i].parentId) {
                children.push(this.behaviours[i]);
            }
        }
        return children;
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Obtient l'enfant d'un parent selon la position demandé dans l'ordre des identifiants.
     * 
     * @param {*} name Le nom du parent
     * @param {*} pos La position du comportement cherché
     */
    getNthChild(name, pos) {
        return this.getChildrenByName(name)[pos];
    }
}

export default BehaviourTree;