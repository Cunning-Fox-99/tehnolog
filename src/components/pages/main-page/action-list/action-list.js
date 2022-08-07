import React, {Component} from "react";
import './action-list.scss'

export default class ActionList extends Component {

    state = {
        actions: [
            {text: 'КИЇВСТАР, VODAFONE ТА LIFECELL ВІДМОВЛЯТЬСЯ ВІД SIM-КАРТ'},
            {text: 'У ПІВДЕННІЙ КОРЕЇ СТВОРИЛИ ПЛАВАЮЧІ СОНЯЧНІ ПАНЕЛІ У ФОРМІ КВІТОК'},
            {text: 'ВЧЕНІ ЗНАЙШЛИ ДЕШЕВИЙ СПОСІБ ВИГЛЯДАТИ У 40 РОКІВ НА 16 РОКІВ МОЛОДШЕ'},
            {text: 'ДО ПРИБИРАННЯ ВУЛИЦЬ У КИТАЇ ПРИСТУПАЄ БЕЗПІЛОТНА ТЕХНІКА'},
            {text: 'ЗАКАРПАТТЯ – ЦЕ МІСЦЕ, КУДИ ХОЧЕТЬСЯ ПОВЕРТАТИСЯ ЗНОВУ І ЗНОВУ'},
            {text: 'ЗАКАРПАТТЯ – ЦЕ МІСЦЕ, КУДИ ХОЧЕТЬСЯ ПОВЕРТАТИСЯ ЗНОВУ І ЗНОВУ'},
        ]
    }

    render() {

        return <div className="action-list">
            <h2 className="action-list__title">Події</h2>

            {this.state.actions.map((item) => {
                return <div className='action-list__item'><span>{item.text}</span>
                <button>Читати..</button>
                </div>
            })}

        </div>
    }
}