import React from 'react'
import './ConferinteSiEvenimente.scss'

import conferinta from '../../Images/ConferinteSiEvenimente/sala-conferinta.jpeg'
import vip from '../../Images/ConferinteSiEvenimente/sala-vip.jpeg'
import multifunctionala from '../../Images/ConferinteSiEvenimente/Untitled-1.jpeg'
import {NavLink} from "react-router-dom";

export default class ConferinteSiEvenimente extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    constructor(props) {
        super(props);
        this.state = {
            flipCards: [
                {id: 1, title: 'Sală conferință', imageUrl: conferinta, url:'sala-conferinte'},
                {id: 2, title: 'Sală multifuncțională', imageUrl: multifunctionala, url:'sala-multifunctionala'},
                {id: 3, title: 'Sală VIP', imageUrl: vip, url:'sala-vip'},
            ]
        }
    }

    render() {
        return (
            <div className={'ConferinteSiEvenimente'}>
                <div className={'flipCardsContainer'}>
                    {this.state.flipCards.map((flipCard) => {
                        return (
                            <NavLink to={flipCard.url} exact key={flipCard.id} className={'flipCardItem'}>
                                <div style={{backgroundImage: flipCard.imgUrl}} className={'flipCardItemImg'}>
                                    <img src={flipCard.imageUrl} alt={flipCard.title} />
                                </div>
                                <div className={'flipCardItemTest'}>{flipCard.title}</div>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        )
    }
}