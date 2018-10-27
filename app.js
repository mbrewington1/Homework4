let choice = '';
const hideform = function () {
    $("#form").hide();
}
hideform();

//A `View` option that displays all employee info
$("#view").on('click', function () {
       let employeeInfo = '';
    for (let i = 0; i < employeeList.length; i++) {
        console.log(employeeList[i]);

        // build the dynamic employee info string
        employeeInfo += `<div class="card card-body"><p>${employeeList[i].name}</p><p>Office Number: ${employeeList[i].officeNum}</p><p>Phone Number: ${employeeList[i].phoneNum}</p></div>`;

        }
    // display in the dashboard
    $('#dashboard').html(employeeInfo);
    console.log(employeeInfo);
});

//An `Add` option that allows users to input name, office number, and phone number and then renders the updated employee list.
$('#add').on('click', function () {
    // hey!
    let choice = 'add';
    $('#dashboard').empty();
    $('#form').show();

});
const switcher = function (event) {
    event.preventDefault();
    switch (choice) {
        case 'add':
            add();
            console.log('switcher is working');
            break;
        case 'verify':
            break;
        case 'update':
            break;
        case 'delete':
            break;
    }
}
const add = function () {
    let newEmployee = {
        name: $('#name').val(),
        officeNumber: $('#officeNum').val(),
        phone: $('#phoneNum').val()
    }
    employeeList.push(newEmployee);
    console.log(employeeList);
    $('#dashboard').empty();
    view();
    alert("Employee added!!!")

};
$('#submit').on('click', switcher);



// // //A `Verify` option that allows users to input a name and renders `yes` if the employee exists and `no` otherwise.
// $('#submit').on('click', function () {
//     prompt('Please input the name you would like to verify.');
//     let name=document.employeeList["employeeList"] ["name"].val;
//     if (x=="") {
//         alert("Please enter name or I can't verify!!!");
//         return false;
//     }
// } 

// //An `Update` option that allows the user to input name, office number, and phone number and updates the office number and phone number of the employee that matches the input name, and then renders the updated employee list.
// $('#submit').on('click', function () {
//     const Update = function () {
//         let name = $('#name').val();
//         let officenumber = $('#officeNum').val();
//         let phonenumber = $('#phoneNum').val();
//         employeeList.push({
//             name: name,
//             officeNum: officenumber,
//             phoneNum: phonenumber
//         });
//         view();
//         event.preventDefault();
//         console.log(employeeList);
//         console.log(name);
//     }
// });

// //A `Delete` option that deletes the employee with the matching name and then renders the updated employee list.

// const delete = function() {
//     let name=$('#name').val();
//     let officenumber=$('#officeNum').val();
//     let phonenumber=$('#phoneNum').val();
//     employeeList.push({
//         name: name,
//         officeNum: officenumber,
//         phoneNum: phonenumber
//     });
//     view();
//     event.preventDefault();
//     console.log (employeeList);
//     console.log (name);
// }
// $('#submit').on('click',Delete);