import React from 'react';
import './404.scss'

export default class NotFoundPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return(
            <section className="page_404">
                <div className={'container'}>
                    <h1>Se pare ca te-ai pierdut</h1>
                    <div className="four_zero_four_bg">
                        <h1 className="text-center ">404</h1>
                    </div>
                    <h1>Pagina pe care ai incercat-o din pacate nu exista!</h1>
                </div>
            </section>
        )
    }
}