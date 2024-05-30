import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {
  useEffect(() => {
    // Make a GET request to the backend endpoint
    fetch('http://localhost:8080')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
  }, []);

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
}

export default App;
