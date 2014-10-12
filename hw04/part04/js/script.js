$(document).ready(function() {
    $('button').click(function() {
        i = parseInt($('input').val());
        if(isNaN(i) || i < 10000 || i > 99999){
            $('#message').text("Please enter a five-digit number not beginning with zero.");    
        } else {
            s = String(i);
            if (s.charAt(0) == s.charAt(3) && s.charAt(1) == s.charAt(3)) {
                $('#message').text(i + " is palandrome");
            } else {
                $('#message').text(i + " is not a palandrome");
            }
         }
        return false;    
    });   
});
