import './App.css';
import AdminPixelBoard from "./components/AdminPixelBoard/AdminPixelBoard";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";


function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/pixelBoard/create">
                    <AdminPixelBoard/>
                </Route>
                <Route path="/Mars">
                    <p>from Mars</p>
                </Route>
            </BrowserRouter>
        </div>

    );


}


export default App;
