import React, { useState } from 'react';
import './App.css';
import AdminPixelBoard from "./components/AdminPixelBoard/AdminPixelBoard";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import PixelBoard from "./components/PixelBoard/PixelBoard";
<<<<<<< HEAD
import Login from './components/Login/Login';
import useToken from './useToken';
=======
import Navbar from './components/Navbar/Navbar';
>>>>>>> 9e01285465f934f034d3b61710206e0ec1b9aa6e

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
            <Navbar />
                <Route path={"/pixelBoard/:id"} children={<PixelBoard/>}/>
            </Switch>
            </BrowserRouter>
        </div>

    );


}


export default App;
