import React from "react";
import './Istoric.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Istoric extends React.Component {
    render() {
        return (
            <div className={'Istoric'}>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgba(100, 100, 100, 0.8)', color: 'rgb(222,222,222)' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgba(100, 100, 100, 0.8)' }}
                        date="1908"
                        iconStyle={{ background: 'rgba(100, 100, 100, 0.8)', color: 'black' }}
                    >
                        <h3 className="vertical-timeline-element-title">STEFAN SOMODI</h3>
                        <p>
                            La 21 iulie 1908 atletul clujean Ștefan Somodi a obținut locul 2 la Olimpiada de la Londra. Având în vedere faptul că acesta se antrena prin curțile școlilor, edilii orașului Cluj au hotărât construirea unui stadion pe un teren din Parcul Orașului.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="1911"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">STADIONUL ORAȘULUI</h3>
                        <p>
                            Construcția Stadionului Orașului, cum s-a numit inițial, a început în anul 1908. Inaugurarea oficială a avut loc în anul 1911, printr-un meci amical între o selecționată a Clujului și echipa turcă Galatasaray Istanbul,meci castigat de selectionata Clujului cu scorul de 8 - 1 .Inițial stadionul a avut o tribună din lemn cu o capacitate de 1.500 de locuri, număr extrem de mare pentru acele vremuri. În 1960, tribuna de lemn a fost mutată la Câmpia Turzii, unde se află și în prezent pe stadionul ISCT.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgba(100, 100, 100, 0.8)', color: 'rgb(222,222,222)' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgba(100, 100, 100, 0.8)' }}
                        date="1961"
                        iconStyle={{ background: 'rgba(100, 100, 100, 0.8)', color: 'black' }}
                    >
                        <h3 className="vertical-timeline-element-title">INAUGURAREA NOULUI STADION</h3>
                        <p>
                            În 1961 a fost inaugurat noul stadion, construit în formă de potcoavă, în cinstea echipei studențești ce folosea arena: „U”. Stadionul Municipal avea o capacitate de 28.000 locuri, clasându-se pe locul 3 în topul arenelor din România. În 2004 au început lucrările de renovare a arenei însă acestea au fost sistate de către Cosiliul Județean Cluj în 2005, după ce s-au cheltuit 8 miliarde de lei vechi, pentru consolidarea stâlpilor de susținere.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2009"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">CLUJ ARENA</h3>
                        <p>
                            Construcția noului stadion a început în anul 2009 și a fost finalizată la sfărșitul anului 2011, fiind amplasat pe locul fostului stadion Ion Moina. Proprietarul stadionului este Consiliul Județean Cluj, însă principali beneficiari sunt cele 11 cluburi sportive și 16 societăți comerciale cu diverse activități de cativitate( club, restaurant, școala de formare profesională, cofetărie). Cea mai importantă întrebuințare a arenei sunt partidele de fotbal, dar stadionul poate susține și competiții olimpice datorită pistei de atletism de care dispune, sau concerte.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgba(100, 100, 100, 0.8)', color: 'rgb(222,222,222)' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgba(100, 100, 100, 0.8)' }}
                        date="1961"
                        iconStyle={{ background: 'rgba(100, 100, 100, 0.8)', color: 'black' }}
                    >
                        <h3 className="vertical-timeline-element-title">FINALIZARE CONSTRUCȚIEI</h3>
                        <p>
                            Compus din două tribune și două peluze, stadionul are o capacitate de 30.201 locuri, majoritatea acoperite. Fiind construită la cele mai înalte standarde, noua arenă este cotată ca fiind un stadion din categoria UEFA Elite.Inaugurarea stadionului a avut loc in 8 octombrie 2011, prilej cu care au concertat trupele Scorpions si Smokie.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        );
    }
}