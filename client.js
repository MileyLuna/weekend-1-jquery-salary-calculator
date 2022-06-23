$(onReady);

function onReady(){
    console.log('in onReady');
    //call submit button on hitIt function
    $('#submit').on('click', hitIt);

    //on delete button click perform deleteButton function
    $(document).on('click', '.deleteNow', deleteButton);

}


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
        `<td><button class="deleteNow"> Delete </button></td>`,
        `</tr>`
    );


    //empty input values
    $('.firstIn').val('');
    $('.lastIn').val('');
    $('.employeeIn').val('');
    $('.titleIn').val('');
    $('.annualIn').val('');


//new variable for annualSum
        let newEmployee ={
            fName: employeeName,
            lName: employeeLast,
            id: employeeId,
            title: employeeId,
            annual: employeeAnnual
    };

    //monethlySum.push(newEmployee);


    
    //---------red background once limit is hit
    //changed background if total hit red  
    // if (sum = 20000){
        //$('.background').css('background-color','red');
    //}
    
    
}

//function to delete selected row
    function deleteButton(){
    console.log('in deleteButton');
    $(this).closest('tr').remove();
}





    // loop through value of employee annual / by 12 for monthly 

    

// };
// let sum = 0;
// let employeeAnnual = $('.annualIn').val();


// function totalMonthly(){
//     console.log('in totalMonthly');

// for (let i = 0; i < employeeAnnual.length; i++){
//     sum += employeeAnnual[i];
// }
// return sum;


// };

