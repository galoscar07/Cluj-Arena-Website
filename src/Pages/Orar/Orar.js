import React from 'react'
import './Orar.scss'
import { Parallax } from 'react-parallax';
import paralax from '../../Images/Carousel/3.jpeg'
import Tabletop from "tabletop";

export default class Orar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orar: []
        }
    }

    componentDidMount() {
        window.scrollTo(0,0)
        Tabletop.init({
            key: "1Sglc71IhDZhjkcwAIjC0axMUOI0KSDIEG-vFBbYzOGA",
            simpleSheet: true
        }).then((data) => {this.setState({orar: data})})
            .catch((err) => {this.setState({orar: [
                {id: 1, title: 'Orar săli de sport:', content: "Luni – Vineri 7:00 – 21:00 </br> Sâmbătă 9:00 -16:00 </br> Duminică – închis"},
                {id: 2, title: 'Orar Birouri:', content: 'Luni – Vineri 8:00 – 16:30'},
                {id: 3, title: 'Tur turistic:', content: 'Luni – Vineri 8:00 – 16:30 </br> Sâmbătă – Duminică. Cu programare în prealabil, pentru grupuri mai mari de 10 persoane.'}
            ]})});
    }

    render() {
        return(
            <div className={'Orar'}>
                <Parallax bgImage={paralax} bgImageAlt="cluj arena parallax" strength={200} />
                <div className={'container'}>
                    {this.state.orar.map((el) =>
                        <div key={el.id}>
                            <h1>{el.title}</h1>
                            <p dangerouslySetInnerHTML={{ __html: el.content }} />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}