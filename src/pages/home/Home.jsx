import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

function Home() {
  return (
    <>
      <header className={styles.home}>
        <h1>HRnet</h1>
        <Link to="/employees">View Current Employees</Link>
      </header>
      <main>
        <h2>Create Employee</h2>
      </main>
    </>
  );
}

export default Home;
