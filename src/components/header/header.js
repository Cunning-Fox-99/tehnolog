import React, {Component} from "react";
import {Link} from "react-router-dom";
import LanguageSwitcher from './language-switcher'

import logo from './logo.jpg'
import search from './search.svg'
import cabinet from './cabinet.svg'

import './header.scss'

export default class Header extends Component {

    state = {
        links : [
            {status: true, text: 'Головна', link: '/'},
            {status: false, text: 'Новини', link: '/news'},
            {status: false, text: 'Гість номеру', link: '/guest'},
            {status: false, text: 'Порада єксперта', link: '/advice'},
            {status: false, text: 'ВШПМ', link: '/vshmp'},
            {status: false, text: 'Оголошення', link: '/advert'},
            {status: false, text: 'Архів', link: '/archive'},
            {status: false, text: 'Контакти', link: '/contacts'}
            ],
        active: false
    }

    showMenu = () => {
        this.setState((state) => {
            return {active: !state.active}
        })
    }

    render() {

        const {active} = this.state

    return <div className="header">

        <div className="header__logo">
            <img src={logo} alt=""/>
        </div>

       <div className="header__body">

           <div className="container">
               <div className={active === false ? "mobile-button" : "mobile-button active"} onClick={this.showMenu}>
                   <button className="mobile-button__button" />
               </div>
               <ul className={active === false ? "header__navigation" : "header__navigation active"}>

                   {this.state.links.map((item, index) => {
                       return <li key={index} onClick={this.showMenu} className={item.status === false ? "header__navigation-item" : "header__navigation-item active"}>
                           <Link to={item.link} >{item.text}</Link>
                       </li>
                   })}

                   <li className="header__navigation-item">
                       <button className="header__button">
                           <img src={search} alt=""/>
                       </button>
                   </li>

                   <li className="header__navigation-item">
                       <Link to='/panel' className="header__button">
                           <img src={cabinet} alt=""/>
                       </Link>
                   </li>

                   <li className="header__navigation-item">
                       <LanguageSwitcher />
                   </li>

               </ul>
           </div>

       </div>

    </div>

    }
}


