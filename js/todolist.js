'use strict';

function addtodo() {
    var newToDoInput = $('#newtodo').val();
    var todolist = $('#todolist');

    todolist.append("<li>" + newToDoInput + "</li>");
}

function init() {
    // add button event listener
    $('#addtodo').on('click', function(){
        addtodo();
    });
}

module.exports = init;