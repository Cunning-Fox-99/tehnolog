import React, {Component} from "react";
import TopMain from "./top-main/top-main";
import './main-page.scss'
import ActionList from "./action-list/action-list";

import NewsMain from "./news/news-main";
import ActualNews from "./actual-news/actula-news";

import advice from './advice.jpg'
import advice2 from './advice-2.jpg'
import RowNews from "./row-news/row-news";
import WorldNews from "./world-news/world-news";

export default class MainPage extends Component {

    state = {
        advice: [
            {img: advice, button: true, title: 'ЯК НЕ ЗАШКОДИТИ ЗДОРОВ’Ю ПІД ЧАС ПОСТУ', text: 'Продовжуємо давати рекомендації щодо здорового харчування під час Великого посту. Багато людей сприймають піст як гарний час для втрати ваги. Але під час безпечного схуднення потрібний правильний раціон з урахуванням достатнього надходження калорій, білків, жирів та вуглеводів. Тільки в цьому випадку зниження ваги відбувається за рахунок жирової тканини. У такому разі'},
            {img: advice2, button: true, title: 'ЯК НЕ ЗАШКОДИТИ ЗДОРОВ’Ю ПІД ЧАС ПОСТУ', text: 'Продовжуємо давати рекомендації щодо здорового харчування під час Великого посту. Багато людей сприймають піст як гарний час для втрати ваги. Але під час безпечного схуднення потрібний правильний раціон з урахуванням достатнього надходження калорій, білків, жирів та вуглеводів. Тільки в цьому випадку зниження ваги відбувається за рахунок жирової тканини. У такому разі'}
        ]
    }

    render() {

        return <div className='main-page'>
            <TopMain/>

            <div className="container">

                <div className="main-page__wrapper">
                    <ActionList />
                    <NewsMain />
                </div>

                <ActualNews />

                <section className="advice">

                 <h6 className="advice__title">Порада експерта</h6>

                    <div className="advice__wrapper">
                        {this.state.advice.map((item, index) => {
                            return <RowNews img={item.img} title={item.title} text={item.text} button={item.button} />
                        })}
                    </div>

                </section>

            </div>

            <WorldNews />

        </div>
    }
}