$(document).ready(function(){
    
    // tooltip for user name input 
    $(function(){
        $('#user').tooltip();
    });
    // Get quantity of items sold and append to list
    $("#submit").click(function(){
        quantity = [];
        is_error = false;
        $(".score").each(function() {
            number = parseFloat($(this).val());

            if (isNaN(number)) {
                $("#error").text("You must enter a number for each item. Enter 0 for no items sold.").show();
                is_error = true;
                event.preventDefault();
            } else {
                if (!isNaN(number)) {
                    quantity.push(number);
                    event.preventDefault();
                } 
            }
    });
    if (!is_error) {
        sum = 200 + add(quantity);
        $("#error").empty().hide();
        $("#total").text("$ " + sum.toFixed(2));
    }

    });
        $("#reset").click(function(){
            $(".score").each(function() {
                $(this).val("");
            });
            $("#error").empty().hide();
            $("#total").empty();
    });

});

function add(quantity) {
    var sum = 0;
    for (var i = 0; i < quantity.length; i++) {
        if (i === 0) {
            sum += (quantity[i] * 239.99) * .09;
        }
        if (i === 1) {
            sum += (quantity[i] * 129.75) * .09;
        }
        if (i === 2) {
            sum += (quantity[i] * 99.95) * .09;
        }
        if (i === 3) {
            sum += (quantity[i] * 350.89) * .09;

            }    
    
    }
        return sum;

}    
