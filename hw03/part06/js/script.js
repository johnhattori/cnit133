$(document).ready(function() {
    
    
    $('#b').click(function(){
        $('#prob').text('');    
        $('#ans').val('');
        operands = getRandom();
        $('#prob').text("How much is " + operands[0] + " times " + operands[1] + "?");    
        $('#b').text('Click for multiplication problem');
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
    if(input !== (op1 * op2)) {
    $('p:last').text("No. Please try again.");
        
    }else { 
        $('#ans').val(''); 
        $('p:last').text("Very good!");
        $('#prob').text('');
        $('#b').text('');
        $('#b').text('click to try another problem');
        return;
    }
}

function getRandom() {
    op1 = Math.floor(Math.random() * 10);
    op2 = Math.floor(Math.random() * 10);
    return [op1, op2]
}
