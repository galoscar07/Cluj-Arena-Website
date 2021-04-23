import React from 'react'
import './Parcare.scss'
import { Parallax } from 'react-parallax';
import paralax from '../../Images/parcare.jpeg'
import Pdf from "../../Images/Parcare.pdf";
import Tabletop from "tabletop";

export default class Parcare extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
        Tabletop.init({
            key: "1ouErMj1Mt4VXZrJB-I4S7ckurmF375GRgqO7k-EuTHE",
            simpleSheet: true
        }).then((data) => {
            debugger
            this.setState({parcare: data})})
            .catch((err) => console.warn(err));
    }

    constructor(props) {
        super(props);
        this.state = {
            parcare: []
        }
    }

    render() {
        return(
            <div className={'Parcare'}>
                <Parallax bgImage={paralax} bgImageAlt="cluj arena parcare parallax" strength={200} />
                <h1>303 locuri de parcare</h1>
                <div className={'rounded-card-container'}>
                    {this.state.parcare.map(el =>
                        <div key={el.id} className={'rounded-card'}>
                            <h1>{el.title}</h1>
                            <hr />
                            <h3>{el.subtitle}</h3>
                            <hr />
                            {el.hasButton === 'TRUE'
                                ? <a href={Pdf}
                                     without dangerouslySetInnerHTML={{ __html: el.content }}
                                     rel="noopener noreferrer" target="_blank" />
                                : <p dangerouslySetInnerHTML={{ __html: el.content }} />
                            }
                        </div>
                    )}
                </div>
            </div>
        )
    }
}