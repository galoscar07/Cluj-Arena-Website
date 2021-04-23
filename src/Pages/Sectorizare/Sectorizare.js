import React from 'react';
import './Sectorizare.scss';

import sectorizareIMG from '../../Images/sectorizare.jpeg'

export default class Sectorizare extends React.Component {
    render() {
        return (
            <div className={'Sectorizare'}>
                <h1>SECTORIZARE STADION</h1>
                <img src={sectorizareIMG} alt={'Sectorizare Stadion'}/>
            </div>
        );
    }
}