let emp_name = document.getElementById("e_name");
let emp_salary = document.getElementById("e_salary");
let emp_hra = document.getElementById("e_hra");
let emp_da = document.getElementById("e_da");
let emp_ta = document.getElementById("e_ta");
let emp_ma = document.getElementById("e_ma");
let emp_pf = document.getElementById("e_pf");
let emp_tds = document.getElementById("e_tds");
let emp_pt = document.getElementById("e_pt");

const displaySalarySlip = () => {
  let employee_name = emp_name.value;
  let employee_salary = parseInt(emp_salary.value);
  let employee_hra = parseInt(emp_hra.value);
  let employee_da = parseInt(emp_da.value);
  let employee_ta = parseInt(emp_ta.value);
  let employee_ma = parseInt(emp_ma.value);
  let employee_pf = parseInt(emp_pf.value);
  let employee_tds = parseInt(emp_tds.value);
  let employee_pt = parseInt(emp_pt.value);

  let employee_hra_1 = (employee_salary * employee_hra) / 100;
  let employee_da_1 = (employee_salary * employee_da) / 100;
  let employee_ta_1 = (employee_salary * employee_ta) / 100;
  let employee_ma_1 = (employee_salary * employee_ma) / 100;
  let employee_pf_1 = (employee_salary * employee_pf) / 100;
  // let employee_tds_1 = employee_salary * tdsource / 100;
  let employee_pt_1 = (employee_salary * employee_tds) / 100;

  let gross =
    employee_salary +
    employee_hra_1 +
    employee_da_1 +
    employee_ta_1 +
    employee_ma_1;
  let deduction = employee_pf_1 + employee_tds_1 + employee_pt_1;
  let net = gross - deduction;

  let empname = (document.getElementById('employe_name').innerText = employee_name);
  let basics = (document.getElementById('employe_salary').innerText =
    "₹ " + employee_salary);
  let housea = (document.getElementById('employe_hra').innerText = "₹ " + employee_hra_1);
  let dearnessa = (document.getElementById('employe_da').innerText = "₹ " + employee_da_1);
  let travela = (document.getElementById('employe_ta').innerText = "₹ " + employee_ta_1);
  let medicala = (document.getElementById('employe_ma').innerText = "₹ " + employee_ma_1);
  let providentf = (document.getElementById('employe_pf').innerText =
    "₹ " + employee_pf_1);
  let taxs = (document.getElementById('employe_tds').innerText = "₹ " + employee_tds_1);
  let professionalt = (document.getElementById('employe_pt').innerText =
    "₹ " + employee_pt_1);
  let gsalary = (document.getElementById('gross_salary').innerText = "₹ " + gross);
  let deduct = (document.getElementById('deduct_salary').innerText = "₹ " + deduction);
  let nsalary = (document.getElementById('net_salary').innerText = "₹ " + net);

  
    // ename.value = '';
    // bsalary.value = '';
    // hra.value = '';
    // da.value = '';
    // ta.value = '';
    // ma.value = '';
    // pf.value = '';
    // tds.value = '';
    // pt.value = '';

    document.getElementById('result').classList.remove("d-none");
};

