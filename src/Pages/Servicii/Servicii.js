import React from 'react'
import './Servicii.scss'

import servicii1 from '../../Images/Servicii/servicii1.jpeg'
import servicii2 from '../../Images/Servicii/servicii2.jpeg'
import servicii3 from '../../Images/Servicii/servicii3.jpeg'
import servicii4 from '../../Images/Servicii/servicii4.jpeg'

export default class Servicii extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    constructor(props) {
        super(props);
        this.state = {
            flipCards: [
                {id: 1, title: 'Rendering.no', imageUrl: servicii1, url:'https://rendering.no/'},
                {id: 2, title: 'Eco Garden', imageUrl: servicii2, url:'http://www.ecogardenconstruct.com/'},
                {id: 3, title: 'Universifly', imageUrl: servicii3, url:'http://www.universifly.com/'},
                {id: 4, title: 'EGO Imobiliare', imageUrl: servicii4, url:'https://www.egoimobiliare.ro/'},
            ]
        }
    }

    render() {
        return (
            <div className={'Servicii'}>
                <div className={'flipCardsContainer'}>
                    {this.state.flipCards.map((flipCard) => {
                        return (
                            <a href={flipCard.url} rel="noreferrer" target='_blank' key={flipCard.id} className={'flipCardItem'}>
                                <div style={{backgroundImage: flipCard.imgUrl}} className={'flipCardItemImg'}>
                                    <img src={flipCard.imageUrl} alt={flipCard.title} />
                                </div>
                                <div className={'flipCardItemTest'}>{flipCard.title}</div>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    }
}