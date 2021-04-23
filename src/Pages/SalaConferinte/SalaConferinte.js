import React from 'react'
import './SalaConferinte.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

import conf1 from '../../Images/ConferinteSiEvenimente/SalaConferinte/conf1.jpeg'
import conf2 from '../../Images/ConferinteSiEvenimente/SalaConferinte/conf2.jpeg'
import conf3 from '../../Images/ConferinteSiEvenimente/SalaConferinte/conf3.jpeg'
import conf4 from '../../Images/ConferinteSiEvenimente/SalaConferinte/conf4.jpeg'
import conf5 from '../../Images/ConferinteSiEvenimente/SalaConferinte/conf5.jpeg'
import conf6 from '../../Images/ConferinteSiEvenimente/SalaConferinte/conf6.jpeg'


export default class SalaConferinte extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    constructor(props) {
        super(props);
        this.state = {
            carousel: [
                {id: 1, imgUrl: conf1},
                {id: 2, imgUrl: conf2},
                {id: 3, imgUrl: conf3},
                {id: 4, imgUrl: conf4},
                {id: 5, imgUrl: conf5},
                {id: 6, imgUrl: conf6},
            ]
        }
    }

    render() {
        return (
            <div className={'SalaConferinte'}>
                <div className={'CarouselContainer'}>
                    <Carousel>
                        {this.state.carousel.map((item) => {
                            return (
                                <div>
                                    <img alt={'sala de conferinte cluj arena'} key={item.id} src={item.imgUrl}/>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                <div className={'paragraphs'}>
                    <p>Sala de conferință a stadionului Cluj Arena are o capacitate de 220 locuri. Aceasta dispune pe laterale de două culoare care permit organizarea de Coffee Break sau care pot fi utilizate ca spațiu expozițional. Configurarea sălii de conferință este de tip amfiteatru, acesta fiind ideală pentru prezentări cu mai mulți invitați. Asadar fie că doriți să organizați o conferintă, un training, un congres sau alte tipuri de evenimente, sala de conferință a stadionului Cluj Arena este soluția ideală pentru o reusită garantată.</p>
                    <p><strong>Dotări existente:</strong></p>
                    <ul>
                        <li>Microfoane fixe</li>
                        <li>Microafoane mobile</li>
                        <li>Videoproiector</li>
                        <li>Ecran proiecție</li>
                        <li>Traducere simultană</li>
                        <li>Sistem de sunet adițional</li>
                        <li>Parcare</li>
                    </ul>
                </div>
            </div>
        )
    }
}