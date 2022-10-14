import React, {Fragment} from "react";
import Header from "../header/header";
import {Route, Routes} from "react-router-dom";
import './App.css'
import './misc.scss'
import MainPage from "../pages/main-page/main-page";
import Footer from "../footer/footer";
import NewsPage from "../pages/news-page/news-page";
import Article from "../pages/article/article";
import Contact from "../pages/contact/contact";
import Error from "../pages/404/error";
import Panel from "../pages/panel/panel";
import Archive from "../pages/archive/archive";
import Advert from "../pages/advert/advert";

function App() {
    return <Fragment>
        <Header/>
        <main>
            <Routes>
                <Route path='/' index element={<MainPage/>}/>
                <Route path='/news' index element={<NewsPage/>}/>
                <Route path='/advert' index element={<Advert/>}/>
                <Route path='/archive' index element={<Archive/>}/>
                <Route path='/guest' index element={<Article/>}/>
                <Route path='/advice' index element={<Article/>}/>
                <Route path='/contacts' index element={<Contact/>}/>
                <Route path='/panel' index element={<Panel/>}/>
                <Route path='*' index element={<Error/>}/>
            </Routes>
        </main>
        <Footer/>
    </Fragment>
}

export default App;
