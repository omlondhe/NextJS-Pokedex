import type { NextPage } from "next";
import styles from "../styles/pages/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>This is index page</p>
    </div>
  );
};

export default Home;
