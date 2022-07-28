import React, {Fragment} from "react";
import Header from "../header/header";
import {Route, Routes} from "react-router-dom";
import './App.css'

function Test () {
    return <div className='container' />
}

function App()  {
    return <Fragment>
        <Header />

        <Routes>
            <Route path='*' index element={Test} />
        </Routes>
    </Fragment>
}

export default App;
