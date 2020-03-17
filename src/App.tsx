import React from 'react';
import styles from './App.module.scss';
import MenuWindow from "./windows/MenuWindow/MenuWindow";
import MainContentWindow from "./windows/MainContentWindow/MainContentWindow";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App: React.FC = () => {
  return (
      <Router>
          <div className={styles.app}>
              <MenuWindow/>
              <MainContentWindow/>
          </div>
      </Router>
  );
}

export default App;
