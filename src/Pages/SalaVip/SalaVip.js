import React from 'react'
import './SalaVip.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

import vip1 from '../../Images/ConferinteSiEvenimente/SalaVip/vvip-accesa.jpeg'
import vip2 from '../../Images/ConferinteSiEvenimente/SalaVip/vvip-accesa1.jpeg'
import vip3 from '../../Images/ConferinteSiEvenimente/SalaVip/vvip-accesa2.jpeg'
import vip4 from '../../Images/ConferinteSiEvenimente/SalaVip/rev_sunset.jpeg'


export default class SalaVip extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    constructor(props) {
        super(props);
        this.state = {
            carousel: [
                {id: 1, imgUrl: vip1 },
                {id: 2, imgUrl: vip2},
                {id: 3, imgUrl: vip3},
                {id: 4, imgUrl: vip4},
            ]
        }
    }

    render() {
        return (
            <div className={'SalaVip'}>
                <div className={'CarouselContainer'}>
                    <Carousel>
                        {this.state.carousel.map((item) => {
                            return (
                                <div>
                                    <img alt={'vip room cluj arena'} key={item.id} src={item.imgUrl}/>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                <div className={'paragraphs'}>
                    <p>Cele mai reușite evenimente se desfășoară întotdeauna într-un cadru elegant și cu un spațiu generos.</p>
                    <p>Sala VIP vă aigură o ambianță plăcută, ideală pentru cele mai speciale evenimente din viață dumneavoastră. </p>
                    <p>Aflata în incinta Stadionului Cluj Arena, in zona centrală a orasului, dispune de o terasă exterioară de 380 mp, oferind o experiență de neuitat într-o atmosferă cochetă.</p>
                </div>
            </div>
        )
    }
}