$(document).ready(function() {
    
    $('#submit').click(function () {
        var neg = 0;
        var pos = 0;
        var zero = 0;
        $('input').each (function() {
            if ($(this).val() < 0){
                neg += 1;
            }
            else if ($(this).val() > 0) {
                pos += 1;
            }
            else {
                zero += 1;
            }

            });        
        $('#result').text("You entered " + pos +  " positive numbers. " 
                            + neg  + " negative numbers. "
                            + "and " + zero +  " zeros");    
    });

    $('#reset').click(function(){
        $('#numForm').trigger('reset');
        $('#result').empty();
   });
    
    $('#fade').click(function(){
        $('#result').fadeTo("slow",0.7);
    });

});



