$(document).ready(function(){
    $('#submit').click(function(){
        Total();
    });
    $('#reset').click(function(){
        $('input').val("");
    });
});

function validInput(numinput){
    if (isNaN(numinput) || numinput < 0){
        return true;
    }
}

function doSwitch(price){
    switch(price){
        case 1: price = 2.98;
        return price;
        break;
        case 2: price = 4.50;
        return price;
        break;
        case 3: price = 9.98;
        return price;
        break;
        case 4: price = 4.49;
        return price;
        break;
        case 5: price = 6.87;
        return price;
        break;
    }
}

function Total(){
    var input = new Array(), totalamount = 0;
    input[0] = parseInt(document.getElementById("quantity1").value);
    input[1] = parseInt(document.getElementById("quantity2").value);
    input[2] = parseInt(document.getElementById("quantity3").value);
    input[3] = parseInt(document.getElementById("quantity4").value);
    input[4] = parseInt(document.getElementById("quantity5").value);
    if(validInput(input[0]) || validInput(input[1]) || validInput(input[2]) || validInput(input[3]) || validInput(input[4])){
        document.getElementById("errmsg").innerHTML = ("Please enter a non-negative amount for each product.");
    }
    else{
        for(var i = 1;i <= input.length; i++){
            var total;
            total = (input[i-1] * doSwitch(i));
            document.getElementById("total" + i).value = "$" + total.toFixed(2);
            totalamount = totalamount + total;
        }
        document.getElementById("totalamount").value = "$" + totalamount.toFixed(2);
    }
}
