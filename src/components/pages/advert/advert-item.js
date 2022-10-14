import React, {Component} from "react";

export default class AdvertItem extends Component {

    render() {

        const {item} = this.props

        return <div className="advert__item">
            <img src={item.image} alt=""/>

            <div className="advert__text-wrapper">
                <h5>{item.title}</h5>
                <p>{item.text}</p>
            </div>
        </div>
    }
}