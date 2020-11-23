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
     * @returns null
     */
    constructor(id, parent_id, type, description) {
        this.id = id;
        parent_id = parent_id;
        this.type = type;
        this.description = description;
    }
}

export default Behaviour;