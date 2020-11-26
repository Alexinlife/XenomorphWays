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
        this.alienDistance = 100;
        this.alien = new Alien();

        this.state = {
            alienState: "Le Xenomorph n'est pas dans les parrages..."
        }
    }

    run() {
        this.alienDistance -= 25;
        this.changeAlienState(this.alien.heardSound(2));
    }

    walk() {
        this.changeAlienState(this.alien.heardSound(1));
    }

    hideObject() {
        this.changeAlienState(this.alien.heardSound(1));
    }

    hideLocker() {

    }

    crouch() {

    }

    scream() {
        this.changeAlienState(this.alien.heardSound(3));

    }

    throwObject() {
        this.changeAlienState(this.alien.heardSound(2));

    }

    useTracker() {
        this.changeAlienState(this.alien.heardSound(1));
    }

    changeAlienState(alienState) {
        this.setState({
            alienState: alienState
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
                <Button className="button" variant="contained">Marcher</Button>
                <Button className="button" variant="contained">S'arrêter</Button>
                <p>Furtivité</p>
                <Button className="button" variant="contained">Se cacher</Button>
                <Button className="button" variant="contained">S'accroupir</Button>
                <p>Actions</p>
                <Button className="button" color="secondary" variant="contained">Crier</Button>
                <Button className="button" variant="contained">Lancer un objet</Button>
                <Button className="button" color="primary" variant="contained">Utiliser le traceur</Button>
            </div>
        );
    }
}

export default Interface;