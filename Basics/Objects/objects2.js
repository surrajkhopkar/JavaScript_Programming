// Retrieve and modify data from the objects

const employee = {
    firstName: 'John',
    lastName: 'McGinn',
    empId: 123,
    job: 'engineer'
};

//dot notation
console.log(employee.lastName);


//bracket notation
console.log(employee['lastName']);

const input = prompt("What do you want to know about the employee?",
                     "first name, last name, job, id");

console.log(input);