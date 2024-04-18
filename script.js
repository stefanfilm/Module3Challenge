// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeesArray = [];


// Collect employee data
const collectEmployees = function() {
    let addMoreEmployees = true;

    while (addMoreEmployees) {
        const firstName = prompt('Enter the first name:');
        const lastName = prompt('Enter the last name:');
        let salary = prompt('Enter the salary:');
        // If salary is a number the code will be true if it is not a number it will result in an error
        salary = isNaN(parseInt(salary)) ? 0 : parseInt(salary);

        employeesArray.push({
            firstName: firstName,
            lastName: lastName,
            salary: salary
        });

        addMoreEmployees = confirm('Do you want to add another employee?');

    return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
    // Calculate average salary logic here
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
    
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
