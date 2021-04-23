import React from 'react'
import './Stiri.scss'
import Tabletop from "tabletop";

import img1 from '../../Images/Stiri/1.jpeg'
import img2 from '../../Images/Stiri/2.jpeg'
import img3 from '../../Images/Stiri/3.jpeg'
import img5 from '../../Images/Stiri/5.jpeg'
import SpinnerLoader from "../../Components/SpinnerLoader/SpinnerLoader";


const newsIfDataFromServerNotComing = [
    {id: 1, title: '', content: 'Champions League se întoarce pe Cluj Arena. Echipa feminină a Universității Cluj va întâlni în data de 3 noiembrie de la ora 15:00 echipa malteză Birkirkara F.C. Olimpia Cluj a reușit să se impună în edițiile anterioare 2012/2013 și 2018/2019. Învingătoarea dintre “U” Olimpia Cluj și Birkirkara se va califica în turul doi preliminar al UEFA Women’s Champions League, care va avea loc în perioada 18-19 noiembrie 2020.', imageURL: img1, redirectURL: 'https://www.facebook.com/UOlimpiaCluj/'},
    {id: 2, title: '', content: 'Judo este un sport din categoria artelor marțiale originar din Japonia, care se practică purtând un Judogi (kimono). Sportul se axează pe prinderea adversarului, obiectivul fiind de a-l face pe acesta să se prăbușească pe spate într-un perimetru stabilit, pe tatami. Dacă crezi ca judo-ul este sportul potrivit pentru copilul tău, Clubul Judo Napoca vă invită la cursurile de judo adresate copiilor cu vârste cuprinse între 6 și 14 ani în zilele de Luni, Miercuri și Vineri între orele 18:30-20:00. Iată câteva motive pentru care judo-ul este benefic pentru copii: • Dezvoltare fizică • Respectarea regulilor • Perseverență • Sport accesibil • Gestionarea stresului într-o competiție. Mai multe informații despre program si programări puteți afla cu un simplu click pe poza evenimentului.', imageURL: img2, redirectURL: 'https://www.facebook.com/Judo.Napoca/'},
    {id: 3, title: '', content: 'Născut în cadrul trupelor SEAL, TRX Training este un tip de antrenament complex, care folosește greutatea corporală pentru a dezvolta simultan forță, flexibilate și stabilitate. Dacă crezi că e pentru tine programează-te la un antrenament. Tel. 0742151329; 0769683231', imageURL: img3, redirectURL: 'https://www.facebook.com/TRXClujArena/'},
    {id: 4, title: '', content: 'În lupta împotriva răspândirii SARS-CoV-2, Consiliul Județean Cluj, prin Directia de Administrare si Exploatare a Stadionului Cluj Arena a achiziționat un aparat pentru realizarea dezinfecției prin nebulizare în interiorul dușurilor, vestiarelor, sălilor de fitness și aerobic și în spațiile comune închise folosite de sportivi și nu numai. Precizăm că dezinfecția prin nebulizare se face pe timp de noapte, o data pe săptămână și nu afectează programul sălilor de sport. Se recomandă aerisirea sălilor și a tuturor spațiilor timp de 15 min înaintea folosirii acestora. * Menționăm faptul că în cazul încăperilor climatizate prin recircularea aerului Ordinul Ministerului Tineretului și Sportului nr. 1219/22.09.2020 și Ordinul Ministerului Sănătății nr. 1634/23.09.2020 stabilește regulile generale de protecție sanitară împotriva răspândirii SARS-CoV-2 prin efectuarea unei nebulizări o dată pe săptămână, în afara programului de lucru.', imageURL: null, redirectURL: 'https://www.facebook.com/TRXClujArena/'},
    {id: 5, title: '', content: 'Copilul tău aleargă toată ziua și e plin de energie? Înscrie-l la unul din cluburile de atletism din incinta Cluj Arena!', imageURL: img5, redirectURL: 'https://clujarena.ro/sportrecuperare/'}
]

export default class Stiri extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stiri: [],
            loading: true,
        }
    }

    componentDidMount() {
        window.scrollTo(0,0)
        Tabletop.init({
            key: "10arj_riV_aiODgysj_GmLzs_ofdiCcpcM9wKpHFoYGg",
            simpleSheet: true
        }).then((data) => {this.setState({stiri: data, loading:false})})
            .catch((err) => {this.setState({stiri: newsIfDataFromServerNotComing, loading: false})});
    }

    renderNewsCard(el) {
        return (
            <div key={el.id} className={'info-card'}>
                <div className={'left-side'}>
                    <a target={'_blank'} rel="noreferrer" href={el.redirectURL}>
                        {el.imageURL
                            ? <img alt={el.content} src={el.imageURL}/>
                            : <div className={'filler'} />
                        }
                    </a>
                </div>
                <div className={'right-side'}>
                    {el.title && <h1>{el.title}</h1>}
                    <h3>{el.content}</h3>
                </div>
            </div>
        )
    }

    renderNewsCardsContainer() {
        return this.state.stiri.map(el => this.renderNewsCard(el))
    }

    render() {
        return (
            <div className={'Stiri'}>
                <div className={'container'}>
                    {this.state.loading
                        ? <SpinnerLoader />
                        : this.renderNewsCardsContainer()
                    }
                </div>
            </div>
        );
    }
}