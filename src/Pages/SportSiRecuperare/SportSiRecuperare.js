import React from 'react'
import './SportSiRecuperare.scss'

import sport1 from '../../Images/SportSiRecuperare/sport1.jpeg'
import sport2 from '../../Images/SportSiRecuperare/sport2.jpeg'
import sport3 from '../../Images/SportSiRecuperare/sport3.jpeg'
import sport4 from '../../Images/SportSiRecuperare/sport4.jpeg'
import sport5 from '../../Images/SportSiRecuperare/sport5.jpeg'
import sport6 from '../../Images/SportSiRecuperare/sport6.jpeg'
import sport7 from '../../Images/SportSiRecuperare/sport7.jpeg'
import sport8 from '../../Images/SportSiRecuperare/sport8.jpeg'
import sport9 from '../../Images/SportSiRecuperare/sport9.jpeg'
import sport10 from '../../Images/SportSiRecuperare/sport10.jpeg'
import sport11 from '../../Images/SportSiRecuperare/sport11.jpeg'
import sport12 from '../../Images/SportSiRecuperare/sport12.jpeg'
import sport13 from '../../Images/SportSiRecuperare/sport13.jpeg'


export default class SportSiRecuperare extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    sportSiRecuperare = [
        {id: 1, title: 'F.C. Universitatea Cluj', imgUrl: sport1, url: 'https://www.fcucluj.ro/'},
        {id: 2, title: 'Fitness Cluj Arena', imgUrl: sport2, url: 'https://clujarenafitness.ro/'},
        {id: 3, title: 'Kinetikmed', imgUrl: sport3, url: 'https://www.kinetikmed.ro/'},
        {id: 4, title: 'CSM Atletism', imgUrl: sport4, url: 'http://csmcj.ro/category/atletism/'},
        {id: 5, title: 'U Cluj Atletism', imgUrl: sport5, url: 'https://u-cluj.ro/atletism/'},
        {id: 6, title: 'CSS Viitorul Atletism', imgUrl: sport6, url: 'http://www.cssviitorulcluj.ro/sectii-sportive/atletism/'},
        {id: 7, title: 'C.S. M.M.A Transilvania', imgUrl: sport7, url: 'https://www.facebook.com/mmatransilvania/'},
        {id: 8, title: 'Kinetomed', imgUrl: sport8, url: 'http://kinetomed.ro/'},
        {id: 9, title: 'CSM Lupte', imgUrl: sport9, url: 'http://csmcj.ro/lupte/'},
        {id: 10, title: 'TRX Cluj Arena', imgUrl: sport10, url: 'https://www.facebook.com/TRXClujArena/'},
        {id: 11, title: 'A.C.S Judo Napoca', imgUrl: sport11, url: 'https://www.facebook.com/Judo.Napoca/'},
        {id: 12, title: 'CSM Haltere', imgUrl: sport12, url: 'http://csmcj.ro/haltere/'},
        {id: 13, title: 'KM Performance', imgUrl: sport13, url: 'https://kinetomed.ro/kmperformance/'},
    ]


    render() {
        return (
            <div className={'SportSiRecuperare'}>
                <div className={'flipCardsContainer'}>
                    {this.sportSiRecuperare.map((flipCard) => {
                        return (
                            <div onClick={() => {window.open(flipCard.url, '_blank')}} key={flipCard.id} className={'flipCardItem'}>
                                <div className={'flipCardItemImg'}>
                                    <img src={flipCard.imgUrl} alt={flipCard.title} />
                                </div>
                                <div className={'flipCardItemTest'}>{flipCard.title}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}