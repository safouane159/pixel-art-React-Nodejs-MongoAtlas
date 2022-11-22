import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"

function App() {
useEffect(() =>{
  
     fetch('http://localhost:8080/helloWorld').then((result) => {
         console.log(result)
     })
 
},[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
  useEffect(() =>{
  fetch('http://localhost:8080/helloWorld').then(  res => res.text().then( res1 => console.log("here "+ res1)  )   )
},[])



}


export default App;
