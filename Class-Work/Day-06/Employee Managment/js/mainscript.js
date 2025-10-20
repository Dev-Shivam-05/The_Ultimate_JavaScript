// Array to store employee objects
let emp_management = [];

// To keep track of the employee being edited
let editId = null;

// Form elements
const employee_name = document.getElementById("employeeName");
const employee_department = document.getElementById("department");
const employee_role = document.getElementById("role");
const employee_basic_salary = document.getElementById("basicSalary");
const employee_table_body = document.getElementById("employeeTableBody");

// Create or update employee
function createEmployee(event) {
  event.preventDefault(); // Prevent form submission

  const name = employee_name.value.trim();
  const dept = employee_department.value.trim();
  const role = employee_role.value.trim();
  const basic_salary = parseFloat(employee_basic_salary.value);

  if (!name || !dept || !role || isNaN(basic_salary)) {
    alert("Please fill all fields correctly.");
    return;
  }

  const emp_obj = {
    emp_id: editId !== null ? editId : generateId(dept),
    emp_name: name,
    emp_dept: dept,
    emp_role: role,
    emp_basic_salary: basic_salary,
  };

  if (editId === null) {
    // Add new employee
    emp_management.push(emp_obj);
  } else {
    // Update existing employee
    const index = emp_management.findIndex((emp) => emp.emp_id === editId);
    if (index !== -1) {
      emp_management[index] = emp_obj;
    }
    editId = null;
  }

  displayEmployees();
  resetFunc();
}

// Generate unique ID
function generateId(dept) {
  return dept.slice(0, 3).toUpperCase() + Date.now().toString().slice(-6);
}

// Display all employees in the table
function displayEmployees() {
  employee_table_body.innerHTML = "";

  emp_management.forEach((emp) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${emp.emp_id}</td>
            <td>${emp.emp_name}</td>
            <td>${emp.emp_dept}</td>
            <td>${emp.emp_role}</td>
            <td>₹${emp.emp_basic_salary.toFixed(2)}</td>
            <td class="action-btns">
                <button class="btn btn-sm btn-info me-1" onclick="editEmployee('${
                  emp.emp_id
                }')">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteEmployee('${
                  emp.emp_id
                }')">Delete</button>
            </td>
        `;

    employee_table_body.appendChild(row);
  });
}

// Edit an employee
function editEmployee(empId) {
  const emp = emp_management.find((e) => e.emp_id === empId);
  if (emp) {
    employee_name.value = emp.emp_name;
    employee_department.value = emp.emp_dept;
    employee_role.value = emp.emp_role;
    employee_basic_salary.value = emp.emp_basic_salary;
    editId = emp.emp_id;
  }
}

// Delete an employee
function deleteEmployee(empId) {
  if (confirm("Are you sure you want to delete this employee?")) {
    emp_management = emp_management.filter((emp) => emp.emp_id !== empId);
    displayEmployees();
  }
}

// Reset form fields
function resetFunc() {
  document.getElementById("employeeForm").reset();
  editId = null;
}
