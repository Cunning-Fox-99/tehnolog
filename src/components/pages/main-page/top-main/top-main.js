import React, {Component} from "react";
import './top-main.scss'
import img from './img.png'

export default class TopMain extends Component {

    render() {

        return <div className="top-main">
            <div className="top-main__wrapper container">
                <img src={img} alt=""/>
                <div className="top-main__text-wrapper">
                    <h4 className="top-main__title">«Допомагати іншій людині під час важкого періоду – це той вчинок, якого починається цивілізація»</h4>
                    <span className="top-main__text">Маргарет Мід, американська антропологиня.</span>
                </div>
            </div>
        </div>
    }
}