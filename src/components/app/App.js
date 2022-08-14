import React, {Fragment} from "react";
import Header from "../header/header";
import {Route, Routes} from "react-router-dom";
import './App.css'
import './misc.scss'
import MainPage from "../pages/main-page/main-page";
import Footer from "../footer/footer";

function App()  {
    return <Fragment>
        <Header />

        <Routes>
            <Route path='/' index element={<MainPage />} />
        </Routes>

        <Footer />
    </Fragment>
}

export default App;
