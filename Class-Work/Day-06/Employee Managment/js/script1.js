let employee_data = JSON.parse(localStorage.getItem("employee_data")) || [];
let employee_name = document.getElementById("employeeName");
let employee_dept = document.getElementById("department");
let employee_role = document.getElementById("role");
let employee_basic_salary = document.getElementById("basicSalary");

const createEmployee = () => {
  employee_data = {
    emp_id: generateId(employee_dept),
    emp_name: employee_name.value,
    emp_dept: employee_dept.value,
    emp_role: employee_role.value,
    emp_basic_salary: parseFloat(employee_basic_salary.value) || 0,
  };

  console.log(employee_data);
};

const generateId = (dept) => {
  return dept + Date.now().toString().slice(-6);
};

const calculateSalaryComponents = (basicSalary) => {
  const HRA = basicSalary * 0.4;
  const DA = basicSalary * 0.01;
  const MA = 1250;
  const PF = basicSalary * 0.012;
  const PT = basicSalary * 0.08;

  const grossSalary = basicSalary + HRA + DA + MA;
  const totalEarning = grossSalary;
  const totalDeduction = PF + PT;
  const netSalary = grossSalary - totalDeduction;

  return {
    emp_HRA: HRA,
    emp_DA: DA,
    emp_MA: MA,
    emp_PF: PF,
    emp_PT: PT,
    gross_salary: grossSalary,
    total_earning: totalEarning,
    total_deduction: totalDeduction,
    net_salary: netSalary
  };
};


/*
// Get or initialize list of employees from localStorage — if none exist, start with empty array
let employeeList = JSON.parse(localStorage.getItem('users')) || [];

// Reference to the email input field in the form
let emailInputField = document.getElementById('email');

// Reference to the password input field in the form
let passwordInputField = document.getElementById('password');

// Reference to the table body where employee rows will be displayed
let tableBodyDisplay = document.querySelector('#userTbl tbody');

// Holds the ID of employee being edited; null means we're adding a new employee
let currentlyEditingEmployeeId = null;

// Set focus to email field when page loads for better user experience
emailInputField.focus();

/**
 * Function: Handles saving new employee OR updating existing employee
 * Triggered when user submits the form (Add or Edit)
 */
const getLoginData = () => {

    // Create an object containing current form values (email + password) — represents one employee's login data
    let newEmployeeData = {
        email: emailInputField.value,
        password: passwordInputField.value
    }
    
    // Check if we are in "edit mode" (i.e., editing existing employee)
    if(currentlyEditingEmployeeId == null){
        // Add new employee: push object into array with unique timestamp ID
        employeeList.push({...newEmployeeData, id: Date.now()});
    }else{
        // Update existing employee: map over array and replace matching employee's data
        employeeList = employeeList.map((employee)=>{

            // If this employee’s ID matches the one being edited
            if(employee.id == currentlyEditingEmployeeId){            
                // Replace old data with new form data, keeping other properties intact
                employee = {...employee, ...newEmployeeData};
            }
            // Return (possibly updated) employee object
            return employee;
        })
        // Reset edit mode — next submit will add new employee
        currentlyEditingEmployeeId = null;
    }

    // Re-render the employee table with updated data
    displayData();

    // Save updated employee list back to localStorage (as JSON string)
    localStorage.setItem('users',JSON.stringify(employeeList));

    // Clear form fields after save
    emailInputField.value = '';
    passwordInputField.value = '';
}

/**
 * Function: Renders all employees in the HTML table
 */
const displayData = () => {
    // Clear current table content before re-rendering
    tableBodyDisplay.innerHTML = '';

    // Refocus email field after rendering (optional UX improvement)
    emailInputField.focus();

    // Loop through each employee in the list
    employeeList.forEach((employee, index) => {
        // Destructure employee object to extract individual properties
        let {email, password, id} = employee; 

        // Create a new table row element for this employee
        let tableRow = document.createElement('tr');

        // Define inner HTML of the row: serial number, email, password, and action buttons
        tableRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${email}</td>
            <td>${password}</td>
            <td>
                <!-- Delete button: calls deleteUser function with employee’s ID -->
                <button class="btn btn-danger" onclick="deleteUser(${id})">Delete</button>
                <!-- Edit button: calls editUser function with employee’s ID -->
                <button class="btn btn-warning" onclick="editUser(${id})" >Edit</button>
            </td>
        `

        // Append the newly created row to the table body
        tableBodyDisplay.appendChild(tableRow);
    })
}

// Initial render: display any existing employees on page load
displayData();



// // Get or initialize list of employees from localStorage — if none exist, start with empty array
// let employeeList = JSON.parse(localStorage.getItem('users')) || [];

// // Reference to the email input field in the form
// let emailInputField = document.getElementById('email');

// // Reference to the password input field in the form
// let passwordInputField = document.getElementById('password');

// // Reference to the table body where employee rows will be displayed
// let tableBodyDisplay = document.querySelector('#userTbl tbody');

// // Holds the ID of employee being edited; null means we're adding a new employee
// let currentlyEditingEmployeeId = null;

// // Set focus to email field when page loads for better user experience
// emailInputField.focus();

// /**
//  * Function: Handles saving new employee OR updating existing employee
//  * Triggered when user submits the form (Add or Edit)
//  */
// const getLoginData = () => {

//     // Create an object containing current form values (email + password) — represents one employee's login data
//     let newEmployeeData = {
//         email: emailInputField.value,
//         password: passwordInputField.value
//     }
    
//     // Check if we are in "edit mode" (i.e., editing existing employee)
//     if(currentlyEditingEmployeeId == null){
//         // Add new employee: push object into array with unique timestamp ID
//         employeeList.push({...newEmployeeData, id: Date.now()});
//     }else{
//         // Update existing employee: map over array and replace matching employee's data
//         employeeList = employeeList.map((employee)=>{

//             // If this employee’s ID matches the one being edited
//             if(employee.id == currentlyEditingEmployeeId){            
//                 // Replace old data with new form data, keeping other properties intact
//                 employee = {...employee, ...newEmployeeData};
//             }
//             // Return (possibly updated) employee object
//             return employee;
//         })
//         // Reset edit mode — next submit will add new employee
//         currentlyEditingEmployeeId = null;
//     }

//     // Re-render the employee table with updated data
//     displayData();

//     // Save updated employee list back to localStorage (as JSON string)
//     localStorage.setItem('users',JSON.stringify(employeeList));

//     // Clear form fields after save
//     emailInputField.value = '';
//     passwordInputField.value = '';
// }

// /**
//  * Function: Renders all employees in the HTML table
//  */
// const displayData = () => {
//     // Clear current table content before re-rendering
//     tableBodyDisplay.innerHTML = '';

//     // Refocus email field after rendering (optional UX improvement)
//     emailInputField.focus();

//     // Loop through each employee in the list
//     employeeList.forEach((employee, index) => {
//         // Destructure employee object to extract individual properties
//         let {email, password, id} = employee; 

//         // Create a new table row element for this employee
//         let tableRow = document.createElement('tr');

//         // Define inner HTML of the row: serial number, email, password, and action buttons
//         tableRow.innerHTML = `
//             <td>${index + 1}</td>
//             <td>${email}</td>
//             <td>${password}</td>
//             <td>
//                 <!-- Delete button: calls deleteUser function with employee’s ID -->
//                 <button class="btn btn-danger" onclick="deleteUser(${id})">Delete</button>
//                 <!-- Edit button: calls editUser function with employee’s ID -->
//                 <button class="btn btn-warning" onclick="editUser(${id})" >Edit</button>
//             </td>
//         `

//         // Append the newly created row to the table body
//         tableBodyDisplay.appendChild(tableRow);
//     })
// }

// // Initial render: display any existing employees on page load
// displayData();

// /**
//  * Function: Deletes an employee by ID
//  * @param {number} employeeId - The unique ID of the employee to delete
//  */
// const deleteUser = (employeeId)=>{
//     // Filter out the employee whose ID matches the given ID
//     employeeList = employeeList.filter(employee => employee.id != employeeId);    

//     // Save updated list to localStorage
//     localStorage.setItem('users',JSON.stringify(employeeList));

//     // Re-render table to reflect deletion
//     displayData();   
// }

// /**
//  * Function: Prepares form for editing an existing employee
//  * @param {number} employeeId - The unique ID of the employee to edit
//  */
// const editUser = (employeeId)=>{
//     // Set global flag to indicate we’re editing this employee
//     currentlyEditingEmployeeId = employeeId;

//     // Find the employee object in the list that matches this ID
//     let employeeToEdit = employeeList.find((employee) => employee.id == employeeId);

//     // Pre-fill form inputs with this employee’s current data
//     emailInputField.value = employeeToEdit.email;
//     passwordInputField.value = employeeToEdit.password;
// }