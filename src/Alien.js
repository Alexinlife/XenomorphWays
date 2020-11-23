
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
    }

    inVents() {

    }

    outVents() {

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