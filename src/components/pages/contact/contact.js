import React, {Component} from "react";
import img from './image.svg'
import './contact.scss'
import './form-block.scss'

export default class Contact extends Component {

    render() {

        return <div className="contact container">

            <div className="contact__wrapper">

                <div className="contact__column contact__column--1">
                    <h1 className="contact__title">Контакти</h1>

                    <div className="contact__info">
                        <b>Про нас</b>
                        <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм
                            деятельности в значительной степени обуславливает создание системы обучения кадров,
                            соответствует насущным потребностям. С другой стороны постоянный количественный рост и сфера
                            нашей активности требуют определения и уточнения направлений прогрессивного развития.
                            Повседневная практика показывает, что рамки и место обучения кадров в значительной степени
                            обуславливает создание направлений прогрессивного развития.</p>
                    </div>
                </div>

                <div className="contact__column contact__column--2">
                    <img src={img} alt=""/>
                </div>

            </div>

            <form className="form-block">

                <div className="form-block__wrapper">

                    <label htmlFor="" className="form-block__item"> І’мя
                        <input type="text"/>
                    </label>

                    <label htmlFor="" className="form-block__item"> Email
                        <input type="text"/>
                    </label>

                    <label htmlFor="" className="form-block__item"> Тема
                        <input type="text"/>
                    </label>

                    <label htmlFor="" className="form-block__item"> Повідомлення
                        <textarea />
                    </label>

                </div>

                <button type="submit">ВІДПРАВИТИ</button>

            </form>

        </div>
    }
}