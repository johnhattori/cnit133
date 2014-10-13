$(document).ready(function() {
    $(".show").click(function(){
        $(".inst").slideToggle("slow");
    });   
    $('#submit').click(function(){
        if($.isNumeric($("#input").val())){
            $('#errmsg').text('');
            listIt();
        }
        else{
            $('#errmsg').html("Please enter a 1 for an unordered list, 2 for an ordered number list or 3 for ordered letter list")
        }
     });
 
});

function validInput(numinput){
    if (isNaN(numinput) || numinput < 0){
        return true;
    }
}

function lists(){
    var list ="";
    for(var i = 1; i <= 3; i++)
        list = list + "<li>List item" + i + "</li>";
    return list;
}

function choice(list){
    switch(list){
        case 1: list = "<h3>Unordered List</h3>`<ul type='square'>" + lists() + "</ul>";
        break;
        case 2: list = "<h3>Ordered Number List</h3><ol>" + lists() + "</ol>";
        break;
        case 3: list = "<h3>Ordered Letter List</h3><ol type='A'>" + lists() + "</ol>";
        break;
        default: list = "<br><p style='color:red;'>Only 1, 2 and 3 are allowed as valid input.</p>" 
    }
    return list;
}
function listIt(){
    var value;
    value = parseInt(document.getElementById("input").value);
    document.getElementById("list").innerHTML = choice(value);
}
