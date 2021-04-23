import React from 'react'
import './Footer.scss'
import grafics from '../../Images/grafica-stadion-3.png'
import cjc from '../../Images/cjc.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";


export default class Footer extends React.Component {

    render() {
        return (
            <div className={'Footer'}>
                <div className={'footer-first-row'}>
                    <div className={'more-info'}>
                        <img src={grafics} alt={'Cluj arena'}/>
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
                    <div className={'usefull-links'}>
                        <div className={'social-media'}>
                            <a href={'https://www.facebook.com/clujarena/'} target="_blank" rel="noreferrer"><FontAwesomeIcon size={'2x'} icon={faFacebook} /></a>
                            <a href={'https://twitter.com/cluj'} target="_blank" rel="noreferrer"><FontAwesomeIcon size={'2x'} icon={faTwitter} /></a>
                            <a href={'https://www.youtube.com/watch?v=Q7q5KPnDL_I'} target="_blank" rel="noreferrer"><FontAwesomeIcon size={'2x'} icon={faYoutube} /></a>
                            <a href={'https://www.instagram.com/explore/locations/219166604/cluj-arena/'} target="_blank" rel="noreferrer"><FontAwesomeIcon size={'2x'} icon={faInstagram} /></a>
                        </div>
                        <a href={'http://www.cjcluj.ro/'} target={'_blank'} rel="noreferrer"><img src={cjc} alt={'Consiliul Judetean Cluj'} /></a>
                    </div>
                    <div className={'facebook'}>
                        <iframe
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fclujarena&amp;tabs=timeline&amp;width=340&amp;height=300&amp;small_header=true&amp;adapt_container_width=false&amp;hide_cover=true&amp;show_facepile=true&amp;appId"
                            width="340" height="300" scrolling="no" frameBorder="0" title={'facebook cj cluj'}
                            allow="encrypted-media"></iframe>
                    </div>
                </div>
                <div className={'footer-second-row'}>
                    © 2021 Cluj Arena
                </div>
            </div>
        )
    }
}