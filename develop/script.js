// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
//creates empty array to be added to by input
const collectEmployees = function() {
  //Prompts employee to enter First and Last as well as salary info.
  //while loop allows continuous input until cancel is selected
  let employeesArray = []; 
  while(true) {
    let firstName = ""
    firstName = prompt(`First Name Please`)
    if (firstName === null) break
    console.log(`Thank you ${firstName}`)
    
    let lastName = ""
    lastName = prompt(`Last Name Please`)
    if (lastName === null) break
    console.log(`Thank you ${lastName}`)
    
    let salary = ""
    salary = prompt(`Annual Salary`)
    if (salary === null) break
    console.log(`Salary input ${salary}`)
    //creates variables to be pushed into array
    let employee = {
      firstName: firstName, 
      lastName: lastName,
      salary: salary
    }
    employeesArray.push(employee)
    console.log(employeesArray)
  }
  return employeesArray;
}
// Display the average salary
//selects the salary variable from the employeesArray and calculates the average to the console
const displayAverageSalary = function(employeesArray) {
  let total = 0
  for (let i = 0; i < employeesArray.length; i++) {
    console.log(employeesArray[i]);
    //turns the string of salary variable into integer
    total += +employeesArray[i].salary
  }
  let avg = total / employeesArray.length;
  console.log(avg)
}

// Select a random employee
//randomly selects employee from array and displays their information
function getRandomEmployee(employeesArray) {

  const randomEmployeeIndex = Math.floor(Math.random() * employeesArray.length)

  const randomEmployee = employeesArray[randomEmployeeIndex]

  console.log(randomEmployee)
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
