import React, {Component} from "react";
import './row-news.scss'

export default class RowNews extends Component {

    render() {
        const {img, title, text, button} = this.props

        return <div className="row-news">

            <div className="row-news__image">
                <img src={img} alt=""/>
            </div>

            <div className="row-news__text-wrapper">
                <h6 className="row-news__title">{title}</h6>
                <p className="row-news__text">{text}</p>
                {button !== undefined ? <button className="row-news__button">Читати</button> : null}
            </div>

        </div>
    }
}