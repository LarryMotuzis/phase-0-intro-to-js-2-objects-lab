const employee = {
    name: "Sam",
    streetAdress: "11 Broadway",
}; 
function updateEmployeeWithKeyAndValue(employee, key, value)  {
    let updatedEmployee = {...employee}
    updatedEmployee[key] = value;
    return updatedEmployee 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)   {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key)  {
    let newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key] 
    return employee     
}

