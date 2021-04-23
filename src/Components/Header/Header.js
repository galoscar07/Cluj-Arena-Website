import React from 'react'
import './Header.scss'
import logo from '../../Images/logo-arena.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this)
        this.toggleArenaIfOpen = this.toggleArenaIfOpen.bind(this)
        this.headerRef = React.createRef();
        this.dropdown = React.createRef();
        this.secondRow = React.createRef();
        this.state = {
            openArena: false,
            openHamburgerMenu: false,
        }
    }

    onScroll(event) {
        const w = window.innerWidth;
        if (w < 1024) return
        const scrollFromTop = event.target.documentElement.scrollTop
        if (scrollFromTop > 60) {
            const w = window.innerWidth;
            if (w < 1024) {
                this.headerRef.current.style.flexDirection = 'column'
            } else {
                this.headerRef.current.style.flexDirection = 'row'
            }
            this.headerRef.current.style.justifyContent = 'space-around'
            this.headerRef.current.style.height = '80px'
            this.headerRef.current.style.boxShadow = '0 3px 6px rgba(0,0,0,0.3)'
            this.secondRow.current.style.boxShadow = 'unset'
            this.secondRow.current.style.marginBottom = 'unset'
        } else {
            this.headerRef.current.style.flexDirection = 'column'
            this.headerRef.current.style.height = 'unset'
            const w = window.innerWidth;
            if (w < 1024) {
                this.headerRef.current.style.justifyContent = 'space-between'
            } else {
                this.headerRef.current.style.justifyContent = 'center'
            }
            this.secondRow.current.style.boxShadow = '0 3px 6px rgba(0,0,0,0.3)'
            this.headerRef.current.style.boxShadow = 'unset'
            this.secondRow.current.style.marginBottom = '5px'
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll)
        document.addEventListener('click', this.toggleArenaIfOpen)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll)
        document.removeEventListener('click', this.toggleArenaIfOpen)
    }

    toggleArenaIfOpen(event) {
        if (this.dropdown.current) {
            if (this.state.openArena && !this.dropdown.current.contains(event.target)) {
                this.setState({openArena: false})
            }
        }
    }

    toggleArena() {
        this.setState({openArena: !this.state.openArena})
    }

    toggleHamburgerMenu = () => {
        if (window.innerWidth < 1024) {
            this.setState({openHamburgerMenu: !this.state.openHamburgerMenu})
        }
    }

    renderMenu() {
        return (
            <React.Fragment>
                <div><NavLink onClick={this.toggleHamburgerMenu} to='/' exact>Home</NavLink></div>
                <div onClick={() => this.toggleArena()} className={'dropdown'} ref={this.dropdown}>
                    Arena <FontAwesomeIcon icon={this.state.openArena ? faChevronUp : faChevronDown} />
                    <span style={{display: this.state.openArena ? "block" : "none"}} className={'dropdown-list'}>
                            <div><NavLink onClick={this.toggleHamburgerMenu} to='/stiri' exact>Stiri / Evenimente</NavLink></div>
                            <div><NavLink onClick={this.toggleHamburgerMenu} to='/orar' exact>Orar Functionare</NavLink></div>
                            <div><NavLink onClick={this.toggleHamburgerMenu} to='/parcare' exact>Parcare</NavLink></div>
                            <div><NavLink onClick={this.toggleHamburgerMenu} to='/servicii' exact>Servicii</NavLink></div>
                            <div><NavLink onClick={this.toggleHamburgerMenu} to='/tarife' exact>Tarife</NavLink></div>
                            <div><NavLink onClick={this.toggleHamburgerMenu} to='/sectorizare' exact>Sectorizare Stadion</NavLink></div>
                            <div><NavLink onClick={this.toggleHamburgerMenu} to='/istoric' exact>Istoric</NavLink></div>
                            <div><NavLink onClick={this.toggleHamburgerMenu} to='/obiective-turistice' exact>Obiective Turistice</NavLink></div>
                        </span>
                </div>
                <div><NavLink onClick={this.toggleHamburgerMenu} to='/conferinte-si-evenimente' exact>Conferinte & Evenimente</NavLink></div>
                <div><NavLink onClick={this.toggleHamburgerMenu} to='/sport-si-recuperare' exact>Sport & Recuperare</NavLink></div>
                <div><NavLink onClick={this.toggleHamburgerMenu} to='/shop-si-restaurant' exact>Shop & Restaurant</NavLink></div>
                <div><NavLink onClick={this.toggleHamburgerMenu} to='/galerie' exact>Galerie Foto/Video</NavLink></div>
                <div><NavLink onClick={this.toggleHamburgerMenu} to='/contact' exact>Contact</NavLink></div>
            </React.Fragment>
        )
    }


    render() {
        return (
            <React.Fragment>
                <div ref={this.headerRef}className={'Header'}>
                    <div className={'first-row'}>
                        <NavLink to='/' exact><img alt={'logo cluj arena'} className={'logo-arena'} src={logo} /></NavLink>
                        <FontAwesomeIcon onClick={this.toggleHamburgerMenu} icon={faBars} className={'logo-menu'} size={'2x'}/>
                    </div>
                    {this.state.openHamburgerMenu &&
                        <div className={'navbar-hamburger'}>
                            {this.renderMenu()}
                        </div>
                    }
                    <div ref={this.secondRow} className={'second-row'}>
                        {this.renderMenu()}
                    </div>
                </div>
                {this.state.openHamburgerMenu &&
                    <div onClick={()=>this.setState({openHamburgerMenu: false})} className={'overlay'} />
                }
            </React.Fragment>
        )
    }
}