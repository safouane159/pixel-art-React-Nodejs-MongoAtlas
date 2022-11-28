import './App.css';
import AdminPixelBoard from "./components/AdminPixelBoard/AdminPixelBoard";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import PixelBoard from "./components/PixelBoard/PixelBoard";


function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/pixelBoard">
                    <AdminPixelBoard/>
                </Route>
            </BrowserRouter>
            <BrowserRouter>
                <Route path={"/pixelBoard/:id"} children={<PixelBoard/>}/>
            </BrowserRouter>
        </div>

    );


}


export default App;
