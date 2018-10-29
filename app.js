let choice = '';
const hideform = function () {
    $("#form").hide();
}
hideform();

//A `View` option that displays all employee info
const view= function () {
    let employeeInfo = '';
    for (let i = 0; i < employeeList.length; i++) {
        console.log(employeeList[i]);

        // build the dynamic employee info string
        employeeInfo += `<div class="card card-body"><p>${employeeList[i].name}</p><p>Office Number: ${employeeList[i].officeNum}</p><p>Phone Number: ${employeeList[i].phoneNum}</p></div>`;

    }
    // display in the dashboard
    $('#dashboard').html(employeeInfo);
    console.log(employeeInfo);
};

//An `Add` option that allows users to input name, office number, and phone number and then renders the updated employee list.
$('#add').on('click', function () {
    choice = 'add';
    $('#dashboard').empty();
    $('#form').show();

});


$('#verify').on('click', function () {
choice='verify';
$('#dashboard').empty();
$('#form').show();
$('#hideme').hide();
})
const switcher = function (event) {
    console.log("switcher method");
    
    event.preventDefault();
    switch (choice) {
        case 'add':
            add();
            break;
        case 'verify':
            verify();
            break;
        case 'update':
            break;
        case 'delete':
            break;
    }
}
const add = function () {
    
        const name= $('#name').val();
        const officeNumber= $('#officeNumber').val();
        const phone= $('#phone').val();
    
 
    alert("Name added!!");
    employeeList.push({
        name:name,
        officeNum:officeNumber,
        phoneNum:phone
    });
    view();
            console.log(employeeList);
};

$('#submit').on('click', switcher);
$('#view').on('click', view);


// //A `Verify` option that allows users to input a name and renders `yes` if the employee exists and `no` otherwise.
const verify = function () {
    const name= $('#name').val();
    let answer='no';
    for (let i = 0; i < employeeList.length; i++) {
        console.log(employeeList[i]);
        if (employeeList[i].name==name){
            answer='yes';
        }
    }
    $('#dashboard').html(answer);
    };



// //An `Update` option that allows the user to input name, office number, and phone number and updates the office number and phone number of the employee that matches the input name, and then renders the updated employee list.
$('#update').on('click', function () {
    choice = 'update';
    $('#dashboard').empty();
    $('#form').show();

});

// //A `Delete` option that deletes the employee with the matching name and then renders the updated employee list.

const remove = function () {
    const name= $('#name').val();
    // let answer='no';
    // for (let i = 0; i < employeeList.length; i++) {
    //     console.log(employeeList[i]);
    //     if (employeeList[i].name==name){
    //         answer='yes';
    //     }
    // }
    // $('#dashboard').html(answer);
    };

    $('#delete').on('click', function () {
        choice = 'delete';
        $('#dashboard').empty();
        $('#form').show();
    $('#hideme').hide();
    });