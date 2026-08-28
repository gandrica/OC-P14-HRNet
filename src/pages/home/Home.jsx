import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import FormCreateEmployee from "../../components/formCreateEmployee/FormCreateEmployee";

function Home() {
  return (
    <>
      <header className={styles.home}>
        <h1>HRnet</h1>
        <Link to="/employees">View Current Employees</Link>
      </header>
      <main>
        <FormCreateEmployee />
      </main>
    </>
  );
}

export default Home;
