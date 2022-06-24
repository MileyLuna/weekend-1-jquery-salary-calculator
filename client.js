$(onReady);

function onReady() {
    console.log('in onReady');
    //call submit button on hitIt function
    $('#submit').on('click', hitIt);

    //perform deleteButton function when the deleteNow button is click
    $(document).on('click', '.deleteBtn', deleteButton);

}

let employees = [];

//submit button function
function hitIt() {
    console.log('in hitIt');

    //create objects to collect values from inputs
    let employeeInfo = {

        name: $('.firstIn').val(),
        last: $('.lastIn').val(),
        empId: $('.employeeIn').val(),
        title: $('.titleIn').val(),
        annualSal: $('.annualIn').val()
    };

    //send vaules to the table
    $('#target').append(
        `<tr>
        <td>${employeeInfo.name}</td>
        <td>${employeeInfo.last}</td>
        <td>${employeeInfo.empId}</td>
        <td>${employeeInfo.title}</td>
        <td>${employeeInfo.annualSal}</td>
        <td><button class="deleteBtn"> Delete </button></td>
        </tr>`
    );


    //empty input values
    $('.firstIn').val('');
    $('.lastIn').val('');
    $('.employeeIn').val('');
    $('.titleIn').val('');
    $('.annualIn').val('');

    //push object into empty array to use for monthly total
    employees.push(employeeInfo);
    //call totalSalary to action
    totalSalary();

};

//funtion to calculate monthly total
function totalSalary() {
    //loop through annual salary and divide by 12 for monthly total
    console.log('in totalSalary');
    let sum = 0;
    for (let i = 0; i < employees.length; i++) {
        //turn string into number
        sum += Number(employees[i].annualSal);
    };
    //create new variable and divide annual salaray by 12 to get monthly total
    let totalMonthly = Math.round(sum / 12);

    if (totalMonthly > 20000) {
        $('.calculations').css('color','red');

    };
    //send the new variable value over to HTML paragraph
    $('.monthlySum').html(`$  ${totalMonthly}`);

};

//function to delete selected row
function deleteButton() {
    console.log('in deleteButton');
    //'this' button to remove closest table row
    $(this).closest('tr').remove();
}


