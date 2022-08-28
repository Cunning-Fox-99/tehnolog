import React, {Component} from "react";
import './paginator.scss'

export default class Paginator extends Component {

    render() {

        return <div className="paginator">
            <div className="paginator__item paginator__item--prev" />
            <div className="paginator__item">1</div>
            <div className="paginator__item">2</div>
            <div className="paginator__item">...</div>
            <div className="paginator__item">321</div>
            <div className="paginator__item paginator__item--next" />
        </div>
    }
}