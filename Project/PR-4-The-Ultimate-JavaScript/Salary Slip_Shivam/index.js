// Header Section Starts 
let company_name = "Red And White";
let company_location = "Navsari";
let payslip_title = "Salary Slip – September 2025";
let employee_department = "IT";
let emp_name = prompt("Enter Employee Name :");
let emp_id = prompt("Enter Employee Id :");
let pay_period = "Month";
// Header Section Ends

// Earnings Section Starts
let basic_salary = parseInt(prompt("Enter Employee Salary :"));
let emp_hra = basic_salary / 40;
let emp_da = basic_salary / 10;
let emp_ta = 1600;
let emp_ma = 1250;
let gross_salary = (basic_salary - emp_hra - emp_da - emp_ta - emp_ma);
// Earnings Section Ends

// Deductions Section Starts
let emp_pf = 2000;
let emp_pt = 200;
let emp_tds = 1800;
let deductions = (emp_pf + emp_pt + emp_tds);
// Deductions Section Ends

// Net Salary Section Starts
let net_salary = gross_salary - deductions;
// Net Salary Section Ends


// Footer Section Starts
let bank_account_number = "1234XXXX5678";
let payment_mode = "Bank Transfer";
let today = new Date();
let date_of_payment = today.toLocaleDateString();
// Footer Section Ends

// // =====================
// // Printing Salary Slip
// // =====================
// console.log("=====================================");
// console.log(company_name);
// console.log(payslip_title);
// console.log("=====================================");
// console.log("Employee Name  : " + emp_name);
// console.log("Employee ID    : " + emp_id);
// console.log("Pay Period     : " + pay_period);
// console.log("-------------------------------------");
// console.log("EARNINGS");
// console.log("Basic Salary   : " + basic_salary);
// console.log("HRA            : " + emp_hra);
// console.log("DA             : " + emp_da);
// console.log("TA             : " + emp_ta);
// console.log("MA             : " + emp_ma);
// console.log("Gross Salary   : " + gross_salary);
// console.log("-------------------------------------");
// console.log("DEDUCTIONS");
// console.log("PF             : " + emp_pf);
// console.log("PT             : " + emp_pt);
// console.log("TDS            : " + emp_tds);
// console.log("Total Deduction: " + deductions);
// console.log("-------------------------------------");
// console.log("Net Salary     : " + net_salary);
// console.log("-------------------------------------");
// console.log("Bank Account   : " + bank_account_number);
// console.log("Payment Mode   : " + payment_mode);
// console.log("Date of Payment: " + date_of_payment);
// console.log("Authorized Signatory: HR Department");
// console.log("=====================================");

document.getElementById('company_name').innerHTML += `${company_name}`;
document.getElementById('current_date').innerHTML += `${date_of_payment}`;
document.getElementById('employee_name').innerHTML += `${emp_name}`;
document.getElementById('employee_department').innerHTML += `${employee_department}`;
document.getElementById('employee_department').innerHTML += `${employee_department}`;
document.getElementById('employee_bank_account').innerHTML += `${bank_account_number}`;
document.getElementById('employee_location').innerHTML += `${company_location}`;
document.getElementById('basic_salary').innerHTML += `${basic_salary}`;
document.getElementById('emp_da').innerHTML += `${emp_da}`;
document.getElementById('emp_hra').innerHTML += `${emp_hra}`;
document.getElementById('emp_ta').innerHTML += `${emp_ta}`;
document.getElementById('emp_ma').innerHTML += `${emp_ma}`;
document.getElementById('emp_gross').innerHTML += `${gross_salary}`;
document.getElementById('emp_net_salary').innerHTML += `${net_salary}`;
document.getElementById('emp_pt').innerHTML += `${emp_pt}`;
document.getElementById('emp_tds').innerHTML += `${emp_tds}`;
document.getElementById('emp_pf').innerHTML += `${emp_pf}`;
document.getElementById('dedcution').innerHTML += `${deductions}`;