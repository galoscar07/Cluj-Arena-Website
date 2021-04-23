import React from 'react'
import './SalaMultifunctionala.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

import vip1 from '../../Images/ConferinteSiEvenimente/SalaMultifunctionala/multi1.jpeg'
import vip2 from '../../Images/ConferinteSiEvenimente/SalaMultifunctionala/multi2.jpeg'
import vip3 from '../../Images/ConferinteSiEvenimente/SalaMultifunctionala/multi3.jpeg'


export default class SalaMultifunctionala extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    constructor(props) {
        super(props);
        this.state = {
            carousel: [
                {id: 1, imgUrl: vip1},
                {id: 2, imgUrl: vip2},
                {id: 3, imgUrl: vip3},
            ]
        }
    }

    render() {
        return (
            <div className={'SalaMultifunctionala'}>
                <div className={'CarouselContainer'}>
                    <Carousel>
                        {this.state.carousel.map((item) => {
                            return (
                                <div>
                                    <img alt={'sala multifunctionala cluj arena'} key={item.id} src={item.imgUrl}/>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                <div className={'paragraphs'}>
                    <p>Zilele de naștere sau petrecerile supriză au nevoie de două elemente speciale: sala perfectă și oameni deosebiți. Pentru primul detaliu vă venim în întâmpinare cu sala multifuncțională iar pe lângă decorul elegant, priveliștea vă poate scoate evenimentul din anonimat. Dacă vă gândiți să găzduiți un eveniment privat, Cluj Arena își deschide porțile pentru a vă asigura de o zi de neuitat.</p>
                    <p>Sala multifunctională beneficiază de o terasa de 100 metri patrati care vă ofera o priveliște spectaculoasă spre interiorul stadionului.</p>
                </div>
            </div>
        )
    }
}
