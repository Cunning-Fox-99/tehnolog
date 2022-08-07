import React, {Component} from "react";
import new1 from './1.jpg'
import new2 from './2.jpg'
import new3 from './3.jpg'
import new4 from './4.jpg'
import './world-news.scss'

export default class WorldNews extends Component {

    render() {

        return <div className="world-news">

            <div className="container">
                <h6 className="world-news__title">Cвітові Новини</h6>

                <div className="world-news__card-wrapper">

                    <div className="world-news__card">
                        <img src={new1} alt=""/>
                        <p className="world-news__card-text">Штучний інтелект сам розподіляє та коригує їх маршрути та
                            стежить за прибиранням у режимі реального часу.</p>
                    </div>

                    <div className="world-news__card">
                        <img src={new2} alt=""/>
                        <p className="world-news__card-text">За словами Йейтса, швидший темп ходьби справді може
                            призвести до того, що людина не тільки краще почуватиметься, але і виглядатиме
                            молодшою. </p>
                    </div>

                    <div className="world-news__card">
                        <img src={new3} alt=""/>
                        <p className="world-news__card-text">В результаті дослідження з'ясувалося, що різниця в довжині
                            теломер між тими, хто ходить повільно і тими...</p>
                    </div>

                    <div className="world-news__card">
                        <img src={new4} alt=""/>
                        <p className="world-news__card-text">За словами Йейтса, швидший темп ходьби справді може
                            призвести до того, що людина не тільки краще почуватиметься, але і виглядатиме
                            молодшою. </p>
                    </div>

                </div>

            </div>

        </div>
    }
}