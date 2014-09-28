$(document).ready(function(){
   
   $('#submit').click(function (){
        input = [];
        is_Error = false;
            $(".balance").each(function(){
                value = parseFloat($(this).val()); 
                
                if(isNaN(value)){
                    $('#sum').text("Please input a number.");
                    $('#sum').css({
                        "color":"white",
                        "background-color": "red"
                    });
                     isError = true;
                     return;
                }else {
                
                input.push(value);
                output = calculate(input);
                $('#sum').text(output);
                }
                });
   });
});
