import React from 'react'
import './ObiectiveTuristice.scss'

export default class ObiectiveTuristice extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div className={'ObiectiveTuristice'}>
                <div className={'container'}>
                    <div className={'item'}>
                        <h1>Cluj Turism</h1>
                        <iframe src="http://clujtourism.ro/" title="description" />
                        <div className={'button-container'}>
                            <div onClick={() => window.location.replace("http://clujtourism.ro/")} className={'action-button'}>Intra aici</div>
                        </div>
                    </div>
                    <div className={'item'}>
                        <h1>Centrul de informare turistica</h1>
                        <iframe src="https://www.visitclujnapoca.ro/index.php?arg=despre-cluj/info-center" title="description" />
                        <div className={'button-container'}>
                            <div onClick={() => window.location.replace("https://www.visitclujnapoca.ro/index.php?arg=despre-cluj/info-center")} className={'action-button'}>Intra aici</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}