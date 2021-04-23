import React from "react";
import './Contact.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faMapMarkedAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "@material-ui/core";

export default class Contact extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div className={'Contact'}>
                <iframe
                    title={'facebook arena'}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10931.303856710665!2d23.5717042!3d46.7683268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x23f7c32408a471a4!2sCluj%20Arena!5e0!3m2!1sro!2sro!4v1617952404972!5m2!1sro!2sro"
                    width="600" height="600" allowFullScreen="" loading="lazy"></iframe>
                <div className={'contact'}>
                    <div className={'contact-info'}>
                        <h1>Contact</h1>
                        <div className={'subtext'}>
                            <FontAwesomeIcon icon={faMapMarkedAlt} />
                            <a href="https://www.google.com/maps/place/Cluj+Arena/@46.768025,23.5680853,17z/data=!3m1!4b1!4m5!3m4!1s0x47490e8f2fa63813:0x726f9e698a06de8e!8m2!3d46.768025!4d23.570274" target="_blank" rel="noreferrer">Aleea Stadionului Nr 2, Cluj Napoca, Judetul Cluj.</a>
                        </div>
                        <div className={'subtext'}>
                            <FontAwesomeIcon icon={faAt} />
                            <a className="mailto" href="mailto:office@clujarena.ro">office@clujarena.ro</a>
                        </div>
                        <div className={'subtext'}>
                            <FontAwesomeIcon icon={faPhone} />
                            <a className="phoneto" href="tel:(+40) 364 403 184">(+40) 364 403 184</a>
                        </div>
                    </div>
                    <h1>Trimite-ne un mesaj</h1>
                    <div className={'input-same-line'}>
                        <TextField style={{width: '200px'}} id={'nume'} labelWidth={60} label="Nume" variant="outlined" />
                        <TextField style={{width: '200px'}} id={'email'} labelWidth={60} label="Adresa Email" variant="outlined" />
                    </div>
                    <div style={{width: '48%', height: '30px'}} />
                    <div id={'textarea'} style={{width: '90%'}}>
                        <TextField
                            placeholder=""
                            variant="outlined"
                            label={'Mesaj'}
                            multiline
                            rows={4}
                            columns={40}
                            rowsMax={6}
                            fullWidth
                        />
                    </div>
                    <div className={'button-container'}>
                        <div className={'action-button'}>Trimite</div>
                    </div>
                </div>
            </div>
        );
    }
}