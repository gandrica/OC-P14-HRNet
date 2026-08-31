import { describe, it, expect } from "vitest";
import employeeReducer, { addEmployee } from "./employeeSlice";

describe("Employee Reducer", () => {
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

  it("doit retourner l'état initial par défaut au démarrage", () => {
    const nextState = employeeReducer(undefined, { type: "unknown" });
    expect(nextState).toEqual(initialState);
  });

  it("doit ajouter un nouvel employé dans employeesList lors de l'action addEmployee", () => {
    // Arrange : Les données du nouvel employé
    const newEmployee = {
      firstName: "Jean",
      lastName: "Dupont",
      department: "Engineering",
      city: "Paris",
    };

    // Act : On déclenche l'action addEmployee
    const nextState = employeeReducer(initialState, addEmployee(newEmployee));

    // Assert : Vérifications
    expect(nextState.employeesList.length).toBe(1); // La liste doit contenir 1 élément
    expect(nextState.employeesList[0]).toEqual(newEmployee); // L'élément doit être Jean Dupont

    // On s'assure au passage que tableHeaders n'a pas été écrasé ou modifié
    expect(nextState.tableHeaders.length).toBe(9);
  });

  it("doit ajouter plusieurs employés sans écraser les précédents", () => {
    // Arrange : État avec déjà un employé existant
    const stateWithOneEmployee = {
      ...initialState,
      employeesList: [{ firstName: "Jean", lastName: "Dupont" }],
    };
    const secondEmployee = { firstName: "Marie", lastName: "Curie" };

    // Act : Ajout du deuxième employé
    const nextState = employeeReducer(
      stateWithOneEmployee,
      addEmployee(secondEmployee),
    );

    // Assert : Vérifications
    expect(nextState.employeesList.length).toBe(2);
    expect(nextState.employeesList[0].firstName).toBe("Jean"); // Le 1er est toujours là
    expect(nextState.employeesList[1].firstName).toBe("Marie"); // Le 2ème a été ajouté à la fin
  });
});
