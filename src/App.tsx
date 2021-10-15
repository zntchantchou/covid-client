import React from 'react';
import styles from './App.module.css';
import Navbar from 'src/components/Navbar/Navbar';
import CovidDashboard from "src/views/CovidDashboard/CovidDashboard";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Navbar title="Covid graphs" />
      <CovidDashboard/>
    </div>
  );
}

export default App;
