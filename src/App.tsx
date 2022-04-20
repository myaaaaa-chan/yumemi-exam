import './App.css';

import { useEffect } from 'react';

import { PrefectureLogic } from './libs/logic/PrefectureLogic';
import logo from './logo.svg';

export const App = () => {
  useEffect(() => {
    (async () => {
      const logic = new PrefectureLogic();
      await logic.getPrefectures();
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
};

export default App;
