const employee = {
    name: 'Larry',
    streetAdress: "106 Janet Ave",
}; 
 function updateEmployeeWithKeyAndValue(obj, key, value) {
    let newEmplyee = {...obj};
    newEmplyee[key] = value
    return newEmplyee
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value
    return employee
};
function deleteFromEmployeeByKey(employee, key) {
    let newEmplyee = {...employee};
    delete newEmplyee[key]
    return newEmplyee
};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}


