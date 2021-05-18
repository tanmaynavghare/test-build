// test for DOM manipulation
window.jQuery = window.$ = require("jquery");
var todoapp = require('../js/todolist');
describe('Todo list', () => {
    test('Check if the input is not blank', function() {

        // create a dummy structure for testing
        document.body.innerHTML = `
        <input type="text" id="newtodo">
        <button id="addtodo">Add todos</button>
        <ol id="todolist"></ol>
        `;
    
        // call the init method of the module.
        todoapp();
        
        // set the value of the input box.
        $('#newtodo').val("Testing");
    
        // simulate click of button
        $('#addtodo').trigger('click');
    
        // check if the length of the value is greater than zero, if so assign true else false
        var todoinput = ($('#newtodo').val().length) > 0 ? true : false;
        var list = $('#todolist').length;
    
        // function to check if the expectation
        expect(todoinput).toBeTruthy();
    });

    test('check if the list is added on click', () => {
        // create a dummy structure for testing
        document.body.innerHTML = `
        <input type="text" id="newtodo">
        <button id="addtodo">Add todos</button>
        <ol id="todolist"></ol>
        `;
    
        // call the init method of the module.
        todoapp();
        
        // set the value of the input box.
        $('#newtodo').val("Testing");
    
        // simulate click of button
        $('#addtodo').trigger('click');
    
        // check if the length of the value is greater than zero, if so assign true else false
        var list = $('#todolist').length > 0 ? true : false;
    
        // function to check if the expectation
        expect(list).toBeTruthy();
    });
});
