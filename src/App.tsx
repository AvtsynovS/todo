import React from "react";
import Navbar from "./components/NavBar/Navbar";
import styles from "./styles.module.scss";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.test}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
        consequatur commodi reiciendis repellat rem quae iste! Minima tempora
        animi placeat repellat doloribus laudantium perferendis aperiam magni
        eveniet, assumenda nesciunt nisi.
      </div>
    </>
  );
};

export default App;
