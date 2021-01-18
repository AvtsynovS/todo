import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Exercise from "./Pages/Exercise/Exercise";
import styles from "./styles.module.scss";

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Exercise />
      </div>
    </>
  );
};

export default App;
