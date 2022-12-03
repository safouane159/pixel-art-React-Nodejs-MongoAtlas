import React, { useState } from 'react';
import './App.css';
import AdminPixelBoard from "./components/AdminPixelBoard/AdminPixelBoard";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import PixelBoard from "./components/PixelBoard/PixelBoard";
import Login from './components/Login/Login';
import useToken from './useToken';

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {

    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
      }

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                <Route path="/pixelBoard">
                    <AdminPixelBoard/>
                </Route>
                </Switch>
            </BrowserRouter>
            <BrowserRouter>
            <Switch>
                <Route path={"/pixelBoard/:id"} children={<PixelBoard/>}/>
            </Switch>
            </BrowserRouter>
        </div>

    );


}


export default App;
