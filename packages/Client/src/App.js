import './App.css';
import AdminPixelBoard from "./components/AdminPixelBoard/AdminPixelBoard";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import PixelBoard from "./components/PixelBoard/PixelBoard";
import Navbar from './components/Navbar/Navbar';


function App() {


    return (
        <div className="App">
     
            <BrowserRouter>
            <Navbar />
                <Route path={"/pixelBoard/:id"} children={<PixelBoard/>}/>
            </BrowserRouter>
        </div>

    );


}


export default App;
