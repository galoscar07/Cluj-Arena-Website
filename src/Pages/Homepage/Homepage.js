import React from 'react'
import './Homepage.scss'
// Carousel Data
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import firstImg from '../../Images/Carousel/1.jpeg';
import secondImg from '../../Images/Carousel/2.jpeg';
import thirdImg from '../../Images/Carousel/3.jpeg';
import forthImg from '../../Images/Carousel/4.jpeg';
// Flip Card Data
import istoric from '../../Images/SmallClickImages/istoric.jpeg'
import panorama from '../../Images/SmallClickImages/360.jpeg'
import ceas from '../../Images/SmallClickImages/ceas.jpeg'
import obiective from '../../Images/SmallClickImages/obiective.jpeg'
import parcare from '../../Images/SmallClickImages/parcare.jpeg'
import sectorizare from '../../Images/SmallClickImages/sectorizare.jpeg'
import {NavLink} from "react-router-dom";


export default class Homepage extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0)
    }

    constructor(props) {
        super(props);
        this.state = {
            carousel: [
                {id:1, imgURL: firstImg},
                {id:2, imgURL: secondImg},
                {id:3, imgURL: thirdImg},
                {id:4, imgURL: forthImg}
            ],
            flipCards: [
                {id: 1, title: 'Orar Functionare', imgUrl: ceas, redirectUrl: '/orar'},
                {id: 2, title: 'Orar Parcare', imgUrl: parcare, redirectUrl: '/parcare'},
                {id: 3, title: 'Sectorizare', imgUrl: sectorizare, redirectUrl: '/sectorizare'},
                {id: 4, title: 'Istoric', imgUrl: istoric, redirectUrl: '/istoric'},
                {id: 5, title: 'Obiective turistice', imgUrl: obiective, redirectUrl: '/obiective-turistice'},
            ]
        }
    }

    renderFlipCards() {
        return (
            <React.Fragment>
                {this.state.flipCards.map((flipCard) => {
                    return (
                        <NavLink to={flipCard.redirectUrl}>
                            <div key={flipCard.id} className={'flipCardItem'}>
                                <div style={{backgroundImage: flipCard.imgUrl}} className={'flipCardItemImg'}>
                                    <img src={flipCard.imgUrl} alt={flipCard.title} />
                                </div>
                                <div className={'flipCardItemTest'}>{flipCard.title}</div>
                            </div>
                        </NavLink>
                    )
                })}
            </React.Fragment>
        )
    }

    render() {
        return (
            <div className={'Homepage'}>
                <div className={'CarouselContainer'}>
                    <Carousel>
                        {this.state.carousel.map((item) => {
                            return (
                                <div key={item.id}>
                                    <img alt={'imagini reprezentative cluj arena'} src={item.imgURL}/>
                                </div>
                            )
                        })}

                    </Carousel>
                </div>
                <div className={'flipCardsContainer'}>
                    {this.renderFlipCards()}
                </div>
            </div>

        )
    }
}