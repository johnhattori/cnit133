$(document).ready(function() {
    
    op1 = Math.floor(Math.random() * 10);
    op2 = Math.floor(Math.random() * 10);
    
    $('#b').click(function(){
        $('#prob').text('');    
        $('#ans').val('');
        $('#prob').text("How much is " + op1 + " times " + op2 + "?");    
    });    
   
    $('#a').click(function() {
        answer = parseInt($('#ans').val());
        calc(answer);        
        
    });

    $('#ans').focus(function() {
        $(this).val('');
        $('p:last').text('');

    });
});

function calc(input) {
    while (input !== (op1 * op2)) {
        $('#ans').val(''); 
        $('p:last').text("Try again.");
        calc(input);
    } 
    $('#ans').val(''); 
    $('p:last').text("Yup");
    return;
}    
