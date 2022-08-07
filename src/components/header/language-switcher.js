import React, {Component} from "react";
import icon from './language-icon.svg'
import './language-switcher.scss'

export default class LanguageSwitcher extends Component {

    state = {
        language: [
            {name: 'укр', selected: true},
            {name: 'En', selected: false},
        ]
    }

    render() {

        let langList = this.state.language.map((item, index) => {
            return <li key={index} className="language-switcher__item">{item.name}</li>
        })

        return <div className="language-switcher">

            <img src={icon} alt=""/>

            <ul className="language-switcher__wrapper">
                {langList}
            </ul>

        </div>
    }
}