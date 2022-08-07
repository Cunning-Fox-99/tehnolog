import React, {Fragment} from "react";
import Header from "../header/header";
import {Route, Routes} from "react-router-dom";
import './App.css'
import './misc.scss'
import MainPage from "../pages/main-page/main-page";

function App()  {
    return <Fragment>
        <Header />

        <Routes>
            <Route path='/' index element={<MainPage />} />

        </Routes>
    </Fragment>
}

export default App;
