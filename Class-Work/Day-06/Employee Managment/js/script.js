// created an empty array that will store multiple employers data
let emp_management = [];

// employee data's
let employee_name = document.getElementById("employeeName");
let employee_department = document.getElementById("department");
let employee_role = document.getElementById("role");
let employee_basic_salary = document.getElementById("basicSalary");
let employee_tbody = document.querySelector("#employeeTableBody");

const createEmployee = () => {
  let emp_obj = {
    emp_id: generateId(employee_department.value),
    emp_name: employee_name.value,
    emp_dept: employee_department.value,
    emp_role: employee_role.value,
    emp_basic_salary: parseFloat(employee_basic_salary.value) || 0,
  };

  emp_management.push(emp_obj);

  displayEmployeeDatabase();
  employee_name = "";
  employee_department = "";
  employee_role = "";
  employee_basic_salary = "";
};

const displayEmployeeDatabase = () => {
  employee_tbody.innerHTML = "";
  emp_management.forEach((value, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${value.emp_id}</td>
      <td>${value.emp_name}</td>
      <td>${value.emp_dept}</td>
      <td>${value.emp_role}</td>
      <td>${value.emp_basic_salary}</td>
    `;
    employee_tbody.appendChild(row);
  });

};

displayEmployeeDatabase();

const deleteEmployee = () => {
  return 
}

const generateId = (dept) => {
  return dept +'-'+ Date.now().toString().slice(-6);
};

// Reset form fields
function resetFunc() {
  document.getElementById("employeeForm").reset();
  editId = null;
}
