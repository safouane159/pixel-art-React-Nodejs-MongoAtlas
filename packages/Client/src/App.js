import React, {useState} from 'react';
import './App.css';
import AdminPixelBoard from "./components/AdminPixelBoard/AdminPixelBoard";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import PixelBoard from "./components/PixelBoard/PixelBoard";
import PixelBoards from "./components/PixelBoards/PixelBoards";
import Login from './components/Login/Login';
import useToken from './useToken';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PixelCard from './components/PixelCards/PixelCard'
import Properties from './components/Properties/Properties';

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

function App() {

    const {token, setToken} = useToken();


    return (
        <div className="App">
            <BrowserRouter>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/Properties">
                        <Properties/>
                    </Route>
                </Switch>

                <Switch>
                    <Route path="/PixelCard">

                    </Route>
                </Switch>

                <Switch>
                    <Route path="/pixelBoard">
                        <AdminPixelBoard/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path={"/pb/:id"} children={<PixelBoard/>}/>
                </Switch>

                <Switch>
                    <Route path={"/pixelBoards"}>
                        <PixelBoards/>
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </div>

    );


}


export default App;
