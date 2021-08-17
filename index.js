// Write your solution in this file!

var employee = {
        name: "Adam",
        streetAddress: "349 Cherry Ln",
}

function updateEmployeeWithKeyAndValue() {
    return {
        ...employee,
        name: "Sam",
        streetAddress: "11 Broadway"
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway";
    return employee;

}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {...employee}; 
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;

}
