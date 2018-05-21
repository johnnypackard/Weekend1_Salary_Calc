$(document).ready(onReady);

const employeeArray = [];
let totalSum = [];

function onReady() { // create function for submit button
    $("#addButton").on('click', inputFun);
    // will add later $( `#deleteEmp` ).on( `click`, deleteFun ); // that sounds horrible! Don't delete the fun!
}; // end onReady function

function inputFun() { // create function to take info on submit and input into table
    const firstIn = $('#firstIn').val();
    const lastIn = $('#lastIn').val();
    const empIdIn = $('#empIdIn').val();
    const titleIn = $('#titleIn').val();
    const salaryIn = $('#salaryIn').val();
    // let monthEarn = Math.round( salaryIn / 12 );

    const employee = new Employee(firstIn, lastIn, empIdIn, titleIn, salaryIn);

    employeeArray.push(employee);
    appendEmployees();
    
}; // end outputFun function

function appendEmployees() {
    clearTable();

    let monthlyCosts = 0;

    for (const employee of employeeArray) {

        monthlyCosts += parseInt(employee.salaryIn)/12;

        const tableRow = `<tr>
                            <td>${employee.firstIn}</td>
                            <td>${employee.lastIn}</td>
                            <td>${employee.empIdIn}</td>
                            <td>${employee.titleIn}</td>
                            <td>${employee.salaryIn}</td>
                            </tr>`;

    $("#tableTarget").append(tableRow);
    }

    appendMonthlyCalc(monthlyCosts);
}

function appendMonthlyCalc(monthlyCosts) {
    $("#totalCash").append(
        `<h2>Total Monthly Cost: $${monthlyCosts.toFixed(2)}</h2>`);

    if(monthlyCosts > 20000) {
        $("#totalCash").addClass('red')
    } else {
        $("totalCash").removeClass('red')
        }
    }

function clearTable(){
    $("#tableTarget").empty();
}

function clearInputs() {
    $('#firstIn').val('');
    $('#lastIn').val('');
    $('#empIdIn').val('');
    $('#titleIn').val('');
    $('#salaryIn').val('');
}

class Employee {
    constructor(firstIn, lastIn, empIdIn, titleIn, salaryIn) {
    this.firstIn = firstIn;
    this.lastIn = lastIn;
    this.empIdIn = empIdIn;
    this.titleIn = titleIn;
    this.salaryIn = salaryIn;
    }
}
