$('#add').on('click', function(){
   // hey!
    $('#dashboard').empty();
    $('#dashboard').append('<div><input id="name" placeholder="Name"/></div>');
    $('#dashboard').append('<div><input id="officeNumber" placeholder="Office Number"/></div>');
     $('#dashboard').append('<div><input id="phone" placeholder="Phone Number"/></div>');
     $('#dashboard').append('<div><button id="submit">Submit</button></div>');

});

//A `View` option that displays all employee info
$("#view").on('click', function(){
    $('#dashboard').empty();

    for(let i = 0; i < employeeList.length; i++ ){

        const card = $('<div>').addClass('card'); // create the reference to the main card
        const cardBody = $('<div>').addClass('card-body'); // create reference to card body

        // build the dynamic employee info string
        const employeeInfo = `<p>${employeeList[i].name}</p><p>Office Number: ${employeeList[i].officeNum}</p><p>Phone Number: ${employeeList[i].phoneNum}</p>`;

        // add employee info HTML string to the card body
        cardBody.html(employeeInfo);

        // add the card body inside of the main card element
        card.append(cardBody);

        // display in the dashboard
        $('#dashboard').append(card);
         
    }
      
    
           
});

//An `Add` option that allows users to input name, office number, and phone number and then renders the updated employee list.
$('#submit').on('click', function(){
    let newEmployee = {
        name: $('#name').val(),
        officeNumber: $('#officeNumber').val(),
        phone: $('#phone').val()
    }
    employeeList.push(newEmployee);
    console.log (employeeList);
    $('#dashboard').empty();
    alert("Employee added!!!")
        
});






// const view = function() {
//     let print = '';
//     for (let i=0; i<employeeList.length; i++) {
//         print+='<div>'+employeeList[i].name+'</div>';
//     }
//     render(print);
// }

// const render = function(print) {
//     $('.employee').html(print);
// }

//An `Add` option that allows users to input name, office number, and phone number and then renders the updated employee list.

// const add = function() {
//     let name=$('#name').val();
//     let officenumber=$('#officenumber').val();
//     let phonenumber=$('#phonenumber').val();
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
// $('#submit').on('click',add);



// //A `Verify` option that allows users to input a name and renders `yes` if the employee exists and `no` otherwise.

// const Verify = function() {
//     let name=$('#name').val();
//     let officenumber=$('#officenumber').val();
//     let phonenumber=$('#phonenumber').val();
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
// $('#submit').on('click',add);

// //An `Update` option that allows the user to input name, office number, and phone number and updates the office number and phone number of the employee that matches the input name, and then renders the updated employee list.

// const Update = function() {
//     let name=$('#name').val();
//     let officenumber=$('#officenumber').val();
//     let phonenumber=$('#phonenumber').val();
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
// $('#submit').on('click',add);

// //A `Delete` option that deletes the employee with the matching name and then renders the updated employee list.

// const delete = function() {
//     let name=$('#name').val();
//     let officenumber=$('#officenumber').val();
//     let phonenumber=$('#phonenumber').val();
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
// $('#submit').on('click',add);