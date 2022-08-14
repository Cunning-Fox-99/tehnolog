import React, {Component} from "react";

import logo from './logo.svg'
import {Link} from "react-router-dom";
import './footer.scss'

export default class Footer extends Component {

    render() {

        return <div className="footer">

            <div className="footer__wrapper container">

                <div className="footer__left-content">
                    <img src={logo} className="footer__logo" alt=""/>
                    <span className="footer__copyright">
                        Copyright © 2021, USIONLINE.com. All Rights Reserved
                    </span>
                </div>

                <div className="footer__right-content">

                    <div className="footer__column footer__column--1">
                        <h4 className="footer__sub-title">РУБРИКИ</h4>

                        <Link to='/' className="footer__link">Новини</Link>
                        <Link to='/' className="footer__link">Гість номеру</Link>
                        <Link to='/' className="footer__link">Порада єксперта</Link>
                        <Link to='/' className="footer__link">ВШПМ</Link>
                        <Link to='/' className="footer__link">Оголошення</Link>
                        <Link to='/' className="footer__link">Архів</Link>
                    </div>

                    <div className="footer__column footer__column--2">
                        <h4 className="footer__sub-title">СОЦІАЛЬНІ МЕРЕЖІ</h4>

                        <Link to='/' className="footer__link">Facebook</Link>
                        <Link to='/' className="footer__link">Telegram</Link>
                        <Link to='/' className="footer__link">Instagram</Link>
                        <Link to='/' className="footer__link">YouTube</Link>
                    </div>

                    <div className="footer__column footer__column--3">
                        <h4 className="footer__sub-title">СПІВРОБІТНИЦТВО</h4>

                        <Link to='/' className="footer__link">Реклама</Link>
                        <Link to='/' className="footer__link">Контакти</Link>
                        <Link to='/' className="footer__link">Privacy Policy</Link>
                    </div>
                    
                </div>

            </div>

        </div>
    }
}