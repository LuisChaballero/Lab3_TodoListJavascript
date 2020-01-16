function addCheckbox(){
    $('.todoForm').on('submit', function(e){
        e.preventDefault();
    
        let listMember = $('.newTodo').val();
        let list = $('#listToDo');
        if(listMember !== ""){

            $(list).append(` <label><input type="checkbox" />${listMember}</label>`);
        }  
    });
}

function markChecks(){
    let members = $('#listToDo').children().children();
    
    $('.markAllButton').on('click', function(e){
        //let check = $(e.target).attr('checked');
        //$(members).attr('checked', true);
        $('input[type=checkbox]').attr('checked', true);
    });
}

function clearChecks(){
    
    $('.clearButton').on('click', function(e){
        $('input[type=checkbox]').attr('checked', false);
    });
}

function deleteList(){
    $('.deleteButton').on('click', function(e){
        $('#listToDo').empty();
    });
}


function init(){
    addCheckbox();
    markChecks();
    clearChecks();
    deleteList();
}

init();
