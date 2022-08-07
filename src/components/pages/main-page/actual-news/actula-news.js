import React, {Component} from "react";
import a from './1.jpg'
import b from './2.jpg'
import c from './3.jpg'
import d from './4.jpg'
import e from './5.jpg'
import f from './6.jpg'
import g from './7.jpg'
import h from './8.jpg'

import './actual-news.scss'

export default class ActualNews extends Component {

    render() {

        return <div className="actual-news">
            <h3 className="actual-news__title">Актуальні новини</h3>

            <div className="actual-news__wrapper">

                <div className="actual-news__column actual-news__column--1">

                    <div className="actual-news__new">
                        <img src={a} alt=""/>
                        <h5 className="actual-news__new-title">Ласкаво просимо до Одеського національного технологічного університету шановні першокурсники!</h5>
                        <span className="actual-news__new-date">1 Вересня, 12:00</span>
                    </div>

                </div>

                <div className="actual-news__column actual-news__column--2">

                    <div className="actual-news__new">
                        <img src={b} alt=""/>
                        <h5 className="actual-news__new-title">ЗАКАРПАТТЯ – ЦЕ МІСЦЕ, КУДИ ХОЧЕТЬСЯ ПОВЕРТАТИСЯ ЗНОВУ І ЗНОВУ</h5>
                        <span className="actual-news__new-date">1 Вересня, 12:00</span>
                    </div>

                    <div className="actual-news__new">
                        <img src={c} alt=""/>
                        <h5 className="actual-news__new-title">Ласкаво просимо до Одеського національного технологічного університету шановні першокурсники!</h5>
                        <span className="actual-news__new-date">1 Вересня, 12:00</span>
                    </div>

                    <div className="actual-news__new">
                        <img src={d} alt=""/>
                        <h5 className="actual-news__new-title">Ласкаво просимо до Одеського національного технологічного університету шановні першокурсники!</h5>
                        <span className="actual-news__new-date">1 Вересня, 12:00</span>
                    </div>

                    <div className="actual-news__new">
                        <img src={e} alt=""/>
                        <h5 className="actual-news__new-title">Ласкаво просимо до Одеського національного технологічного університету шановні першокурсники!</h5>
                        <span className="actual-news__new-date">1 Вересня, 12:00</span>
                    </div>

                </div>

            </div>

            <div className="actual-news__wrapper-bottom">

                <div className="actual-news__new">
                    <img src={f} alt=""/>
                    <h5 className="actual-news__new-title">Краткий гид: кредиты под 0% для бизнеса</h5>
                </div>

                <div className="actual-news__new">
                    <img src={g} alt=""/>
                    <h5 className="actual-news__new-title">Краткий гид: кредиты под 0% для бизнеса</h5>
                </div>

                <div className="actual-news__new">
                    <img src={h} alt=""/>
                    <h5 className="actual-news__new-title">Краткий гид: кредиты под 0% для бизнеса</h5>
                </div>

            </div>

        </div>
    }
}