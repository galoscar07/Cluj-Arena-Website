import React from "react";
import "./Tarife.scss"

import Pdf from '../../Images/Tarife.pdf'

export default class Tarife extends React.Component {
    render() {
        return (
            <div className={'Tarife'}>
                <div className={'rounded-card'}>
                    <p>Conform Hotărârii nr. 4 din 2019 anexa IV, privind aprobarea taxelor și tarifelor pentu anul fiscal 2019.</p>
                    <a href={Pdf} without rel="noopener noreferrer" target="_blank">
                        <div className={'button-container'}>
                            <div className={'action-button'}>Citeste aici!</div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}