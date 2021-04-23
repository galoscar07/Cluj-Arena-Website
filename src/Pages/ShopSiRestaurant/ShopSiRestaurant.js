import React from 'react'
import './ShopSiRestaurant.scss'
import Tabletop from "tabletop";
import SpinnerLoader from "../../Components/SpinnerLoader/SpinnerLoader";

const defaultFlipCardsValues = [
    {id: 1, title: 'Fragment', imageUrl: '', url:'https://fragment.ro/en/'},
    {id: 2, title: '/Form Space', imageUrl: '', url:'https://www.facebook.com/formspace.ro/'},
    {id: 3, title: 'Pralina', imageUrl: '', url:'http://www.pralina.ro/magazine/cluj-arena'},
    {id: 4, title: 'Magazin Universitatea Cluj', imageUrl: '', url:'https://www.fcucluj.ro/shop/'},
]

export default class ShopSiRestaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            flipCards: []
        }
    }

    componentDidMount() {
        window.scrollTo(0,0)
        Tabletop.init({
            key: "1msPDrBjMLAMFZA8s042wt9aUW7Brz5TdvARAvSuCySc",
            simpleSheet: true
        }).then((data) => {this.setState({flipCards: data, loading:false})})
            .catch((err) => {this.setState({flipCards: defaultFlipCardsValues, loading: false})});
    }

    renderFlipCard() {
        return this.state.flipCards.map((flipCard) => {
            return (
                <a href={flipCard.url} rel="noreferrer" target='_blank' key={flipCard.id} className={'flipCardItem'}>
                    <div style={{backgroundImage: flipCard.imgUrl}} className={'flipCardItemImg'}>
                        <img src={flipCard.imageUrl} alt={flipCard.title} />
                    </div>
                    <div className={'flipCardItemTest'}>{flipCard.title}</div>
                </a>
            )
        })
    }

    render() {
        return (
            <div className={'ShopSiRestaurant'}>
                <div className={'flipCardsContainer'}>
                    {this.state.loading
                        ? <SpinnerLoader />
                        : this.renderFlipCard()
                    }
                </div>
            </div>
        )
    }
}