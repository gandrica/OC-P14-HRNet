import { Table } from "react-hrnet-table-gandrica";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Employees.module.scss";
import "react-hrnet-table-gandrica/style.css";

function Employees() {
  const employees = useSelector((state) => state.employees);

  return (
    <main className={styles.employeesContainer}>
      <header className={styles.employeesHeader}>
        <h1>Current Employees</h1>
      </header>
      <section>
        <Table
          tableHeaders={employees.tableHeaders}
          list={employees.employeesList}
        />
      </section>
      <div className={styles.employeesFooter}>
        <Link to="/">Home</Link>
      </div>
    </main>
  );
}

export default Employees;
