import React, {Component} from "react";

import img1 from '../news-page/1.jpg'
import img2 from '../news-page/2.jpg'
import img3 from '../news-page/3.jpg'
import img4 from '../news-page/4.jpg'
import img5 from '../news-page/5.jpg'
import img6 from '../news-page/6.jpg'

import Paginator from "../../paginator/paginator";
import ArchiveItem from "./archive-item";

export default class Archive extends Component {

    state = {
        news: [
            {image: img1, title: 'У Китаї розпочато виробництво', text: 'У Китаї розпочато виробництво пробної партії безпілотних прибиральних машин Robosweeper. Вже до кінця травня 50 таких вантажівок почнуть працювати у Гуанчжоу. Про це повідомляє сайт CarNewsChina...'},
            {image: img2, title: 'ВЧЕНІ ЗНАЙШЛИ ДЕШЕВИЙ СПОСІБ ВИГЛЯДАТИ У 40 РОКІВ НА 16 РОКІВ МОЛОДШЕ', text: 'Нове дослідження вчених з Університету Лестера показало, що секрет «вічної молодості» таїться у нашому повсякденному житті...'},
            {image: img3, title: 'Дослідники з Лестерського Університету провели генетичний аналіз ', text: 'Також вони використовували спеціальні пристрої на зап\'ястях, які відстежували фізичну активність. Виявилося, що учасники, які під...'},
            {image: img4, title: 'Наші результати показують, що швидка ходьба призводить не лише до покращення стану здоров\'я', text: 'В результаті дослідження з\'ясувалося, що різниця в довжині теломер між тими, хто ходить повільно і тими...'},
            {image: img5, title: 'Вчені вважають, що швидша ходьба сприяє покращенню здоров\'я ', text: 'За словами Йейтса, швидший темп ходьби справді може призвести до того, що людина не тільки краще почуватиметься, але і виглядатиме молодшою. '},
            {image: img6, title: 'У WeRide також створили онлайн-платформу для керування групою ', text: 'Штучний інтелект сам розподіляє та коригує їх маршрути та стежить за прибиранням у режимі реального часу.'}
        ]
    }

    render() {

        return <div className="news-page container">
            <h1 className="news-page__title">Новини технологій і науки</h1>

            <div className="news-page__wrapper">

                {this.state.news.map((item, index) => {
                    return <ArchiveItem key={index} button={true} modifier='news-page' img={item.image} title={item.title} text={item.text} />
                })}

            </div>

            <Paginator />
        </div>
    }
}