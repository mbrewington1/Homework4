//A `View` option that displays all employee info

const view = function() {
    let print = '';
    for (let i=0; i<employeeList.length; i++) {
        print+='<div>'+employeeList[i].name+'</div>';
    }
    render(print);
}

const render = function(print) {
    $('.employee').html(print);
}

//An `Add` option that allows users to input name, office number, and phone number and then renders the updated employee list.

const add = function() {
    let name=$('#name').val();
    let officenumber=$('#officenumber').val();
    let phonenumber=$('#phonenumber').val();
    employeeList.push({
        name: name,
        officeNum: officenumber,
        phoneNum: phonenumber
    });
    view();
    event.preventDefault();
    console.log (employeeList);
    console.log (name);
}
$('#submit').on('click',add);



//A `Verify` option that allows users to input a name and renders `yes` if the employee exists and `no` otherwise.

const Verify = function() {
    let name=$('#name').val();
    let officenumber=$('#officenumber').val();
    let phonenumber=$('#phonenumber').val();
    employeeList.push({
        name: name,
        officeNum: officenumber,
        phoneNum: phonenumber
    });
    view();
    event.preventDefault();
    console.log (employeeList);
    console.log (name);
}
$('#submit').on('click',add);

//An `Update` option that allows the user to input name, office number, and phone number and updates the office number and phone number of the employee that matches the input name, and then renders the updated employee list.

const Update = function() {
    let name=$('#name').val();
    let officenumber=$('#officenumber').val();
    let phonenumber=$('#phonenumber').val();
    employeeList.push({
        name: name,
        officeNum: officenumber,
        phoneNum: phonenumber
    });
    view();
    event.preventDefault();
    console.log (employeeList);
    console.log (name);
}
$('#submit').on('click',add);

//A `Delete` option that deletes the employee with the matching name and then renders the updated employee list.

const delete = function() {
    let name=$('#name').val();
    let officenumber=$('#officenumber').val();
    let phonenumber=$('#phonenumber').val();
    employeeList.push({
        name: name,
        officeNum: officenumber,
        phoneNum: phonenumber
    });
    view();
    event.preventDefault();
    console.log (employeeList);
    console.log (name);
}
$('#submit').on('click',add);