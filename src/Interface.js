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

    constructor(props) {
        super(props);
        this.alienDistance = 10;
        this.alien = new Alien();

        this.alien.chooseNextMove("nostimuli");

        this.state = {
            alienState: this.alien.alienState
        }
    }

    run() {
        // L'Alien entendra du son
        this.alien.chooseNextMove("heardsound");

        // Si l'Alien s'approche, avertir l'interface que la distance a changé
        if (this.alien.alienBehaviour.name === "approach") {
            this.changeAlienDistance(-2);
        }
        // Si l'Alien est très près du joueur, lui donner l'action de chercher
        if (this.alienDistance <= 2.5) {
            this.alien.chooseNextMove("search");
        }
        this.changeAlienState();
    }

    walk() {
        
    }

    hide() {

    }

    crouch() {

    }

    scream() {

    }

    throwObject() {
        this.changeAlienDistance(-10);
    }

    useTracker() {
        this.alien.alienState = "Le Xenomorph est à " + this.alienDistance + " mètres.";
        this.changeAlienState();
    }

    changeAlienDistance(value) {
        this.alienDistance += value;
    }

    changeAlienState() {
        this.setState({
            alienState: this.alien.alienState
        });
    }

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
                <Button className="button" color="secondary" variant="contained" onClick={this.scream.bind(this)}>Crier</Button>
                <Button className="button" variant="contained" onClick={this.throwObject.bind(this)}>Lancer un objet</Button>
                <Button className="button" color="primary" variant="contained" onClick={this.useTracker.bind(this)}>Utiliser le traceur</Button>
            </div>
        );
    }
}

export default Interface;