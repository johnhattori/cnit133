$(document).ready(function() {
    
    $('#c2f').click(function() {
        input = parseInt($('#c2f_input').val());
        c2f(input);

    });    
    
    $('#f2c').click(function() {
        input = $('#f2c_input').val();
        f2c(input);
    }); 

    $('#c2f_input').focus(function() {
        $(this).val('');    
    });
    
    $('#f2c_input').focus(function() {
        $(this).val('');    
    });
});

function c2f(value) {
    
    $('#c2f_input').val('');
    c = Math.round(5/9 * (value -32));
    $('#c2f_input').val(value + " degrees F is " + c + " degrees C");
}

function f2c(value) {
    
    $('#f2c_input').val('');
    f = Math.round((9/5 * value) + 32);
    $('#f2c_input').val(value + " degrees C is " + f + " degrees F");
}
