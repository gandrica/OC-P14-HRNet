import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../features/employees/employeesSlice.js";

const store = configureStore({
  reducer: { employees: employeesReducer },
});

export default store;
