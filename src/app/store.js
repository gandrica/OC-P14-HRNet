import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../features/employees/employeeSlice.js";

const store = configureStore({
  reducer: { employees: employeesReducer },
});

export default store;
