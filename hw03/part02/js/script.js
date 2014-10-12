$(document).ready(function(){
    
    // tooltip for user name input 
    $(function(){
        $('#user').tooltip();
    });
    // Get quantity of items sold and append to list
    $("#submit").click(function(event){
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
        result = add(quantity);
        sum = 200 + result[0];
        amount = result[1];
        $("#error").empty().hide();
        $("#total").val("$ " + sum.toFixed(2));
        $("#amount").val("$ " + amount.toFixed(2));
        $('.quantity').each(function(i) {
            $(this).val("$ " + result[2][i].toFixed(2));
        });
        $('.total').each(function(i) {
            $(this).val(quantity[i]);
        });
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
    var totals = [];
    for (var i = 0; i < quantity.length; i++) {
        if (i === 0) {
            totals.push(quantity[i] * 239.99);
            sum += (quantity[i] * 239.99) * .09;
        }
        if (i === 1) {
            totals.push(quantity[i] * 129.75);
            sum += (quantity[i] * 129.75) * .09;
        }
        if (i === 2) {
            totals.push(quantity[i] * 99.95);
            sum += (quantity[i] * 99.95) * .09;
        }
        if (i === 3) {
            totals.push(quantity[i] * 350.89);
            sum += (quantity[i] * 350.89) * .09;

            }    
    
    }
        var amount = 0;
        for(var i=0; i<totals.length; i++){
            amount += totals[i]; 
        }

        return [sum, amount, totals];
        

}    
