import { Table } from "react-hrnet-table-gandrica";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Employees.module.scss";
import "react-hrnet-table-gandrica/style.css";

function Employees() {
  const employees = useSelector((state) => state.employees);

  return (
    <>
      <header className={styles.employees}>
        <h1>Current Employees</h1>
      </header>
      <main>
        <Table
          tableHeaders={employees.tableHeaders}
          list={employees.employeesList}
        />
      </main>
      <footer>
        <Link to="/">Home</Link>
      </footer>
    </>
  );
}

export default Employees;
