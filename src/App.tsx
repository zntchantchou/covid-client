import React from 'react';
import styles from './App.module.css';
import Navbar from 'src/components/nav/Navbar';
import CovidDashboard from "src/views/CovidDashboard/CovidDashboard";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      <CovidDashboard/>
    </div>
  );
}

export default App;
