import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://flask-api-six-xi.vercel.app/api/time');
        const data = await response.json();
        setCurrentTime(data.time);
      } catch (error) {
        console.error("Something happened");
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(intervalId);
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
        <p>The current time is {currentTime}</p>
      </header>
    </div>
  );
}

export default App;
