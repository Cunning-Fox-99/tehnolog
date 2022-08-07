import React, {Component} from "react";
import topImg from './news-main-1.jpg'
import img1 from './news-main-2.jpg'
import img2 from './news-main-3.jpg'

import './news-main.scss'

export default class NewsMain extends Component {

    render() {

        return <div className="news-main">
            <h3 className="news-main__title">Тема номера</h3>

            <div className="news-main__item news-main__item--main">
                <img src={topImg} alt=""/>

                <div className="news-main__text-wrapper">
                    <h4 className="news-main__item-title">Ласкаво просимо до Одеського національного технологічного університету шановні першокурсники!</h4>
                    <span className="news-main__item-info">1 Вересня, 12:00</span>
                </div>

            </div>

            <h4 className="news-main__title">Гість Номера</h4>

            <div className="news-main__wrapper">

                <div className="news-main__item">
                    <img src={img1} alt=""/>
                </div>

                <div className="news-main__item">
                    <img src={img2} alt=""/>
                </div>

            </div>
        </div>
    }
}