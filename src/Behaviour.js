/**
 * @author 1838304 - Alex Lajeunesse
 * 
 * @class Behaviour
 * 
 * @classdesc Comportement en français. Composant de l'arbre de comportement contenant des données.
 * @classdesc Est lié à d'autres comportements avec des liens.
 * @classdesc Sert à définir les zones et leur couleur dans cette application.
 */
class Behaviour {
    
    /**
     * @author Alex Lajeunesse
     * 
     * @description Constructeur de Behaviour
     * 
     * @param id L'identifiant du noeud
     * 
     * @returns null
     */
    constructor(id, parentId, type, name, description) {
        this.id = id;
        this.parentId = parentId;
        this.type = type;
        this.name = name;
        this.description = description;
    }
}

export default Behaviour;