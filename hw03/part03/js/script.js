$(document).ready(function(){
    
    $('#change_color').click(function() {
        $('#sum').addClass('invert');
        return false;
    });

    $('#submit').click(function (){
        result = ''
        balance = parseFloat($('#balance').val()); 
        charge = parseFloat($('#charge').val()); 
        applied = parseFloat($('#applied').val()); 
        limit  = parseFloat($('#limit').val()); 

        new_balance = balance + charge - applied;
        result += 'the new balance is $' + new_balance;
        new_limit = limit - new_balance;
        if(new_limit < new_balance) {
            result += "\n Credit limit exceeded by $" + (new_balance - limit);
        }else {
            result += "\n Credit available $" + (limit - new_balance);    
        }

        $('#sum').val(result)
        return false;        
   });
});
