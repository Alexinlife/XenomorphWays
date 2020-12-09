import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './style.css';
import Alien from './Alien';

/**
 * @author 1838304 - Alex Lajeunesse
 * 
 * @class Interface
 * 
 * @classdesc Gère l'interface de l'application ainsi que les interactions avec celle-ci
 * @classdesc Affiche les boutons, le texte contextuel et fait les appels appropriés aux fonctions
 * @classdesc Sert, en quelque sorte, à guider l'intelligence artificielle et lui donner des stimuli
 */
class Interface extends React.Component {

    /**
     * @author Alex Lajeunesse
     * 
     * @description Constructeur d'Interface
     * 
     * @param props Les propriétés React
     * 
     * @returns null
     */
    constructor(props) {
        super(props);
        this.alienDistance = 10;
        this.alien = new Alien();

        this.alien.chooseNextMove("nostimuli");

        this.state = {
            alienState: this.alien.alienState
        }
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Guide l'Alien lorsque le joueur clique sur le bouton "Courir"
     * 
     * @params null
     * 
     * @returns null
     */
    run() {
        this.setAlienReaction(-3, -1, -4, -1);
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Guide l'Alien lorsque le joueur clique sur le bouton "Marcher"
     * 
     * @params null
     * 
     * @returns null
     */
    walk() {
        this.setAlienReaction(-2, 2, -2, 2);
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Guide l'Alien lorsque le joueur clique sur le bouton "S'accroupir"
     * 
     * @params null
     * 
     * @returns null
     */
    crouch() {
        this.setAlienReaction(-1, 2, -2, 3);
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Guide l'Alien lorsque le joueur clique sur le bouton "Se cacher"
     * 
     * @params null
     * 
     * @returns null
     */
    hide() {
        this.setAlienReaction(-1, 4, -1, 4);
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Guide l'Alien lorsque le joueur clique sur le bouton "Lancer un objet"
     * 
     * @params null
     * 
     * @returns null
     */
    throwObject() {
        if (this.alienDistance <= 5) {
            this.setAlienReaction(-3, 0, -4, -1);
        } else {
            this.setAlienReaction(-3, 0, -4, -1);
        }
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Affiche la distance de l'Alien par rapport au joueur à l'écran
     * 
     * @params null
     * 
     * @returns null
     */
    useTracker() {
        this.alien.alienState = "Le Xenomorph est à " + this.alienDistance + " mètres.";
        this.changeAlienState();
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Prépare le changement des propriétés de l'Alien pour triggerAlien()
     * 
     * @param {*} minP Le niveau de tranquilité minimum
     * @param {*} maxP Le niveau de tranquilité maximum
     * @param {*} minD La distance minimum
     * @param {*} maxD La distance maximum
     * 
     * @returns null
     */
    setAlienReaction(minP, maxP, minD, maxD) {
        // Niveau de tranquilité aléatoire
        var p = this.getRndInteger(minP, maxP);
        // Distance aléatoire
        var d = this.getRndInteger(minD, maxD);
        // Application des paramètres
        this.triggerAlien(p, d);
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Donne les informations nécessaire à l'Alien pour réagir lorsqu'un son est produit
     * 
     * @param {*} peacefulness La valeur tranquilité à ajouter
     * @param {*} distance La distance à ajouter
     * 
     * @returns null
     */
    triggerAlien(peacefulness, distance) {
        this.changeAlienPeacefulness(peacefulness);
        // L'Alien entendra du son
        this.alien.chooseNextMove("heardsound");

        // Si l'Alien s'approche, avertir l'interface que la distance a changé
        if (this.alien.alienBehaviour.name === "approach") {
            this.changeAlienDistance(distance);
        }
        // Si l'Alien est très près du joueur, lui donner l'action de chercher
        if (this.alienDistance <= 2.5 || this.alien.peacefulness <= 5) {
            this.alien.search();
        }
        this.changeAlienState();
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Change la distance de l'Alien par rapport au joueur
     * 
     * @param {*} value La distance à ajouter à la valeur actuelle
     * 
     * @returns null
     */
    changeAlienDistance(value) {
        if (this.alienDistance + value >= 0) {
            this.alienDistance += value;
        }
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Change le niveau de tranquilité de l'Alien
     * @description Plus cette valeur est basse, plus l'Alien trouvera facilement le joueur
     * 
     * @param {*} value Le niveau de tranquilité à soustraire
     * 
     * @returns null
     */
    changeAlienPeacefulness(value) {
        if (this.alien.peacefulness + value >= 0) {
            this.alien.peacefulness += value;
        }
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Change le state de l'Alien selon son propre état
     * 
     * @params null
     * 
     * @returns null
     */
    changeAlienState() {
        this.setState({
            alienState: this.alien.alienState
        });
    }

    /**
    * @author W3Schools
    * 
    * @description This JavaScript function always returns a random number between min (included) and max (excluded)
    * @see https://www.w3schools.com/js/js_random.asp
    * 
    * @param {*} min La valeur minimale inclusive
    * @param {*} max La valeur maximale exclusive
    * 
    * @returns null
    */
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /**
     * @author Alex Lajeunesse
     * 
     * @description Rendu de la page Web pour Interface
     * 
     * @params null
     * 
     * @returns null
     */
    render() {
        return (
            <div className="content">
                <Card className="card">
                    <CardContent>
                        <p name="alien-context" id="alien-state">{this.state.alienState}</p>
                    </CardContent>
                </Card>
                <p>Mouvements</p>
                <Button className="button" color="secondary" variant="contained" onClick={this.run.bind(this)}>Courir</Button>
                <Button className="button" variant="contained" onClick={this.walk.bind(this)}>Marcher</Button>
                <p>Furtivité</p>
                <Button className="button" variant="contained" onClick={this.hide.bind(this)}>Se cacher</Button>
                <Button className="button" variant="contained" onClick={this.crouch.bind(this)}>S'accroupir</Button>
                <p>Actions</p>
                <Button className="button" variant="contained" onClick={this.throwObject.bind(this)}>Lancer un objet</Button>
                <Button className="button" color="primary" variant="contained" onClick={this.useTracker.bind(this)}>Utiliser le traceur</Button>
            </div>
        );
    }
}

export default Interface;