$(onReady);

function onReady(){
    console.log('in onReady');

    $('#submit').on('click', hitIt);

    //$('#sumbit').change('click', 'td', totalMonthly);

};

function hitIt(){
    console.log('in hitIt');
    
    //create  new variables 
    let employeeName = $('.firstIn').val();
    let employeeLast = $('.lastIn').val();
    let employeeId = $('.employeeIn').val();
    let employeeTitle = $('.titleIn').val();
    let employeeAnnual = $('.annualIn').val();

    //check if button works and input submits into table
    // if statement to not input empty value that will create white space
    $('.table').append(
        `<tr>`,
        `<td>${employeeName}</td>`,
        `<td>${employeeLast}</td>`,
        `<td>${employeeId}</td>`,
        `<td>${employeeTitle}</td>`,
        `<td>${employeeAnnual}</td>`,
        `</tr>`
    );


    //empty input values
    $('.firstIn').val('');
    $('.lastIn').val('');
    $('.employeeIn').val('');
    $('.titleIn').val('');
    $('.annualIn').val('');



    //add annual salary and divide by 12 for monthly total
    
    //append monthly total

$('.monthlySum').text(employeeAnnual);



    

    //changed background if total hit red  
    // if (sum = 20000){
        //$('.background').css('background-color','red');
    //}


};

// let sum = 0;
// let employeeAnnual = $('.annualIn').val();


// function totalMonthly(){
//     console.log('in totalMonthly');

// for (let i = 0; i < employeeAnnual.length; i++){
//     sum += employeeAnnual[i];
// }
// return sum;


// };

// loop through value of employee annual / by 12 for monthly 
// append new value to $(.monthlysum).append(``)
// };
