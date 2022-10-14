import React, {Component} from "react";


export default class ArchiveItem extends Component {

    render() {
        const {img, title, text, button, modifier} = this.props

        return <div className={modifier !== undefined ? `row-news row-news--${modifier}` : "row-news"}>

            <div className="row-news__image">
                <img src={img} alt=""/>
            </div>

            <div className="row-news__text-wrapper">
                <div className="row-news__wrapper">
                    <h6 className="row-news__title">{title}</h6>
                    <p className="row-news__text">{text}</p>
                </div>

                {button !== undefined ? <button className="row-news__button">Завантажити</button> : null}
            </div>

        </div>
    }
}