import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { palette } from '@material-ui/system';
import './style.css';

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

    render() {
        return (
            <div className="content">
                <Card className="card">
                    <CardContent>
                        <p>Le Xenomorph n'est pas dans les parrages...</p>
                    </CardContent>
                </Card>
                <p>Mouvements</p>
                <Button className="button" color="secondary" variant="contained">Courir</Button>
                <Button className="button" variant="contained">Marcher</Button>
                <Button className="button" variant="contained">S'arrêter</Button>
                <p>Se cacher</p>
                <Button className="button" variant="contained">Sous un objet</Button>
                <Button className="button" variant="contained">Dans un casier</Button>
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