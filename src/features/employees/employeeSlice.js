import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeesList: [],
  tableHeaders: [
    { firstName: "First Name" },
    { lastName: "Last Name" },
    { startDate: "Start Date" },
    { department: "Department" },
    { birthDate: "Date of Birth" },
    { street: "Street" },
    { city: "City" },
    { state: "State" },
    { zipCode: "Zip Code" },
  ],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employeesList = [...state.employeesList, action.payload];
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
