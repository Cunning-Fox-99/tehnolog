import React, {Component} from "react";
import './panel.scss'

export default class Panel extends Component {

    render() {

        return <div className="panel container">

            <form action="" className="panel__form">

                <label htmlFor=""> Login
                    <input type="text"/>
                </label>

                <label htmlFor=""> Password
                    <input type="text"/>
                </label>

                <button type='submit'>Submit</button>

            </form>

        </div>
    }
}