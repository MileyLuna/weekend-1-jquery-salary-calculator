$(onReady);

function onReady(){
    console.log('in onReady');

    $('#submit').on('click', hitIt);
};

function hitIt(){
    console.log('in hitIt');
    
    //create variable 
    let employeeName = $('.firstIn').val();
    let employeeLast = $('.lastIn').val();
    let employeeId = $('.employeeIn').val();
    let employeeTitle = $('.titleIn').val();
    let employeeAnnual = $('.annualIn').val();
    //check if button works and input submits into table
    // if statement to not input empty value that will create white space

    $('.table').append(
        `<tr>`,`<td>${employeeName}</td>`,
        `<td>${employeeLast}</td>`,`</tr>`,
        `<td>${employeeId}</td>`,
        `<td>${employeeTitle}</td>`,
        `<td>${employeeAnnual}</td>`
    );


    //empty input values
    $('.firstIn').val('');
    $('.lastIn').val('');
    $('.employeeIn').val('');
    $('.titleIn').val('');
    $('.annualIn').val('');

};

//
//I want to loop all inputs 
//loop by appending and creating a new .tr.td once button click
//